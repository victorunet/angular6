//URL SERVER API-REST
const url = "http://localhost:3000/";

//BD
const tableHome      = "home";
const tableLogin    = "login";
const tableRegister = "register";
const tableBinnacle = "binnacle";
const tableUser     = "user";
const tableUsers    = "users";
const tableProfiles = "profiles";
const tableRoles    = "roles";

//URL
const urlHome     = url + tableHome;
const urlLogin    = url + tableLogin;
const urlRegister = url + tableRegister;
const urlBinnacle = url + tableBinnacle;
const urlUsers    = url + tableUsers;
const urlProfiles = url + tableProfiles;
const urlRoles    = url + tableRoles;

//Routes
const routeHome     = '/' + tableHome;
const routeLogin    = '/' + tableLogin;
const routeRegister = '/' + tableRegister;
const routeBinnacle = '/' + tableBinnacle;
const routeUsers    = '/' + tableUsers;
const routeProfiles = '/' + tableProfiles;
const routeRoles    = '/' + tableRoles;

module.exports = {

    //URL SERVER API-REST
    url: url,
    
    //BD
    tableHome:      tableHome,
    tableLogin:     tableLogin,
    tableRegister:  tableRegister,
    tableBinnacle:  tableBinnacle,
    tableUser:      tableUser,
    tableUsers:     tableUsers,
    tableProfiles:  tableProfiles,
    tableRoles:     tableRoles,

    //URL
    urlHome:        url + urlHome,
    urlLogin:       url + tableLogin,
    urlRegister:    url + tableRegister,
    urlBinnacle:    url + tableBinnacle,
    urlUsers:       url + tableUsers,
    urlProfiles:    url + tableProfiles,
    urlRoles:       url + tableRoles,

    //Routes
    routeHome:      routeHome,
    routeLogin:     routeLogin,
    routeRegister:  routeRegister,
    routeBinnacle:  routeBinnacle,
    routeUsers:     routeUsers,
    routeProfiles:  routeProfiles,
    routeRoles:     routeRoles,

    //OTHER
    urlNoFoundPage: url + "noFoundPage",
    urlImages: "../assets/images/",

    //STORAGE
    STORAGE_LOGIN: "login",
    STORAGE_ROL: "rol",
    STORAGE_SHOW: "show"
}
