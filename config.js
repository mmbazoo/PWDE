const {Pool} = require('pg');
const pgUrl = require('pg-database-url');


const config = {};

const dbConfig = {
    host: '127.0.0.1',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'admin'
};

config.connectionString = pgUrl(dbConfig);

module.exports = config;