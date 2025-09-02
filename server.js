const express = require('express')
const app =express()

require('dotenv').config()

const pool = mysql.createPool({
    host : process.envDB_HOST,
    user: process.env.Db_USER,
    password: process.env.DB_PASSWORd,
    database: process.env.DB_NAME
});

app.listen(port, ()=> {
    console.log('Server is running on http://localhost:${port}')
})