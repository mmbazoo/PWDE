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

pool.query('CREATE TABLE IF NOT EXISTS Produkt(artikelnummer VARCHAR(50) NOT NULL,' +
    ' bezeichnung TEXT NULL,' +
    ' marke VARCHAR(45) NULL,' +
    ' URL TEXT NULL,' +
    ' PRIMARY KEY (artikelnummer));' +
    '' +
    ' CREATE TABLE IF NOT EXISTS Preise(' +
    ' ID_preise SERIAL, artikelnummer VARCHAR(50) NULL,' +
    ' preis FLOAT NULL,' +
    ' zeitstempel TIMESTAMP(0) NULL,' +
    ' PRIMARY KEY (ID_preise));' +
    '' +
    ' CREATE TABLE IF NOT EXISTS Kategorie(' +
    ' ID_kategorie SERIAL,' +
    ' kategorie VARCHAR(45) NULL,' +
    ' rang INT NULL,' +
    '' +
    ' PRIMARY KEY (ID_kategorie));' +
    ' CREATE TABLE IF NOT EXISTS Matching_kategorie(' +
    ' ID_matching SERIAL,' +
    ' artikelnummer VARCHAR(50) NOT NULL,' +
    ' ID_kategorie INT NULL,' +
    ' PRIMARY KEY (ID_matching))', (err, res) => {
    console.log(err, res);
    pool.end()
});

