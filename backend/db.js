/** Database connection for Microblog. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

const client = new Client("postgresql:///microblog");

client.connect();


module.exports = client;
