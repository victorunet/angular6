const global = require('../../config/global');
const tableBD = global.tableBinnacle;

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
  
  // get url
  const url = app.get('routes').settings.binnacle;
  
  // all
  app.get(url, (req, res) => {
    var sql = `SELECT * FROM ${tableBD}`;

    connectionBD(sql, {}, res);
  });

  // post
  app.post(url, (req, res) => {
    const { idUser, host, table, operation } = req.body;
    const sql = `INSERT INTO ${tableBD} SET ? `;
    var params = {
      idUser,
      host,
      table,
      operation
    };

    connectionBD(sql, params, res);
  });

};
