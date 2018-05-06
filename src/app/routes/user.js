const global = require('../../config/global');
const tableBD = global.tableUsers;

module.exports = app => {

  // get data BD
  const connection = app.get('dbConnection');

  //function connection
  function connectionBD(sql, params, res) {
    connection.query(sql, params, function (err, result) {
      if(err) {
        console.log(`ERROR in: ${tableBD}: ` + err);
        res.send(err);
      }
      else{
        res.send(result);
      }
    });
  }  
  
  // get urls
  const url = app.get('routes').settings.users;
  const urlAD = app.get('routes').settings.user;

  // all
  app.get(url, (req, res) => {
    var sql = `SELECT * FROM ${tableBD}`;

    connectionBD(sql, {}, res);
  });

  // get
  app.get(urlAD, (req, res) => {
    const { id } = req.params;
    var sql = `SELECT * FROM ${tableBD} WHERE id = ${connection.escape(id)}`;

   connectionBD(sql, {}, res);
  });

  // post
  app.post(url, (req, res) => {
    const { username, password } = req.body;
    const sql = `INSERT INTO ${tableBD} SET ? `;
    var params = {
      username,
      password
    };

    connectionBD(sql, params, res);
  });

  // put
  app.put(url, (req, res) => {
    const { id, username, password } = req.body;
    const sql = `UPDATE ${tableBD} SET
                  username = ${connection.escape(username)}, password = ${connection.escape(password)}
                WHERE id = ${connection.escape(id)}`;

    connectionBD(sql, {}, res);
  });

  // delete
  app.delete(urlAD, (req, res) => {
    const { id } = req.params;
    var sql = `DELETE FROM ${tableBD} WHERE id = ${connection.escape(id)}`;
    
    connectionBD(sql, {}, res);
  });

};
