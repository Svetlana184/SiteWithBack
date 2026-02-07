const express = require("express");
const cors = require('cors');
const bcrypt = require('bcryptjs');
const {Pool} = require('pg');

const app = express();
app.use(cors("http://localhost:5173/"));

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "1234",
    port: "5432"
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

app.delete('/api/delete/:id', async(req, res) => {
    try{
        await pool.query('DELETE FROM product WHERE id = $1', [req.params.id]);
        res.json({success: true});
    } catch {
        res.status(500).json({error: error.message});
    }
})