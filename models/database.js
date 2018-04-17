const {Pool} = require('pg');

const pgUrl = require('pg-database-url');

const dbConfig = {
    host: '192.168.99.100',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'admin'
};

const connectionString = pgUrl(dbConfig);

const pool = new Pool({
    connectionString: connectionString,
});

pool.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)', (err, res) => {
    console.log(err, res);
    pool.end()
});

