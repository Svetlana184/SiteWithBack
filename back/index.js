const express = require("express");
const cors = require('cors');
const bcrypt = require('bcryptjs');
const {Pool} = require('pg');

const app = express();
app.use(cors());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`server running at port ${PORT}`)
})

app.get('/api/main', async(req, res) => {
    try{
        const result = await pool.query('SELECT * FROM products')
        res.json(result.rows)
    }
    catch(error){
        res.status(500).json({error: `server error ${console.log(error)}`})
    }
})