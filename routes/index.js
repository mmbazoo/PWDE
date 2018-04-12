const express = require('express');
const router = express.Router();
const pg = require('pg');
const {Pool} = require('pg');
const path = require('path');
const config = require('../config')
const connectionString = config.connectionString

const pool = new Pool({
    connectionString: connectionString,
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* Test Query */
const query = {
    text: 'INSERT INTO items(ID, text) VALUES($1, $2)',
    values: ['2', 'brian.m.carlson@gmail.com'],
}

// callback
pool.query(query, (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        console.log(res.rows[0])
    }
})

module.exports = router;
