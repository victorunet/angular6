const global = require('../../config/global');
const tableBD = global.tableUsers;

module.exports = app => {

  // get data BD
  const connection = app.get('dbConnection');

  //function connection
  function connectionBD(sql, params, res) {
    connection.query(sql, params, function (err, result) {
      if(err) {
        console.log(`ERROR in: login: ` + err);
        res.send(err);
      }
      else{
        res.send(result);
      }
    });
  }  
  
  // get url
  const url = app.get('routes').settings.login;
  const urlRol = app.get('routes').settings.roles;
  
  // get
  app.get(url, (req, res) => {
    const { username, password } = req.params;
    var sql = `SELECT *
              FROM ${tableBD}
              WHERE users.username = ${connection.escape(username)} AND
                    users.password = ${connection.escape(password)}`;
                    
    connectionBD(sql, {}, res);
  });

  // get rol
  app.get(urlRol, (req, res) => {
    const { id } = req.params;
    var sql = `SELECT roles.name
              FROM ${tableBD}
              JOIN profiles ON profiles.idUser = users.id
              JOIN roles ON roles.id = profiles.idRol
              WHERE users.id = ${connection.escape(id)}`;
                  
    connectionBD(sql, {}, res);
  });

};
