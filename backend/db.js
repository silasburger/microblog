/** Database connection for Microblog. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

const client = new Client(`postgresql:///${DB_URI}`);

client.connect();


module.exports = client;
