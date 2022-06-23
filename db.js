const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'depvaomat01',
    database: 'project-gis',
    host: 'localhost',
    port: 5432
});

module.exports = pool;