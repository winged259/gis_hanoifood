var express = require('express');
var router = express.Router();
const pool = require('../db')

router.get('/',async(req,res)=>{
    try{
        const data = await pool.query("SELECT * FROM hanoi_restaurant ORDER BY rating DESC LIMIT 100 ")
        res.json(data.rows)
    }catch(err){
        console.error(err.message)
    }
})


module.exports = router;