const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const global = require('../../config/global');

const routes = express();

//login
routes.set(global.tableLogin, '/' + global.tableLogin + '/:username/:password');

//register
routes.set(global.tableRegister, '/' + global.tableRegister + '/:username');

//rol
routes.set(global.tableRoles, '/' + global.tableRoles + '/:id');

//users
routes.set(global.tableUsers, '/' + global.tableUsers);
routes.set(global.tableUser, '/' + global.tableUsers + '/:id');

//binnacle
routes.set(global.tableBinnacle, '/' + global.tableBinnacle);

module.exports = routes;
