 const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "mysql",
        port: 3306,
        user: "root",
        password: "",
        database: "api"
    }
 });

 module.exports = knex;