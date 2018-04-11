const {Pool} = require('pg');
const pgUrl = require('pg-database-url');


var config = {};

const dbConfig = {
    host: '192.168.99.100',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'admin'
};

config.connectionString = pgUrl(dbConfig);

module.exports = config;