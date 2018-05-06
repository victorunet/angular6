const global = require('../../config/global');
const tableBD = global.tableUsers;

module.exports = app => {

  // get data BD
  const connection = app.get('dbConnection');

  //function connection
  function connectionBD(sql, params, res) {
    connection.query(sql, params, function (err, result) {
      if(err) {
        console.log(`ERROR in: register: ` + err);
        res.send(err);
      }
      else{
        res.send(result);
      }
    });
  }  
  
  // get url
  const url = app.get('routes').settings.register;
  
  // get
  app.get(url, (req, res) => {
    const { username, password } = req.params;
    var sql = `SELECT *
              FROM ${tableBD}
              WHERE users.username = ${connection.escape(username)}`;
                    
    connectionBD(sql, {}, res);
  });

};
