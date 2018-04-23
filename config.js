const pgUrl = require('pg-database-url');


const config = {};

const dbConfig = {
    host: '141.7.63.204',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'admin'
};

config.connectionString = pgUrl(dbConfig);

module.exports = config;