var express = require('express');
var router = express.Router();
const pool = require('../db')

// function longlatToLatlong(s){
//     const arr = s.split(',')
//     const newS = arr[1].concat(',',arr[0])
//     return newS
// }

router.get('/', async (req, res) => {

    const restaurant = (await pool.query("SELECT * FROM hanoi_restaurant ORDER BY rating DESC LIMIT 100 ")).rows
    
    res.render('index.ejs', { restaurant })
})
router.post('/route',async(req,res)=>{
    let {departLocation,destLocation,moveType} = req.body
    let queryLine = ''
    // departLocation_latlong = longlatToLatlong(departLocation)
    // destLocation_latlong = longlatToLatlong(destLocation)
    if(moveType ==='Đi xe'){
        queryLine = `SELECT ST_AsGeoJSON(ST_MakeLine(route.route_geom)) FROM (
            SELECT route_geom FROM wrk_fromAtoB_astar('hanoi_vehicle_net',${departLocation},${destLocation}) ORDER BY seq) AS route;`
    }
    else {queryLine = `SELECT ST_AsGeoJSON(ST_MakeLine(route.route_geom)) FROM (
        SELECT route_geom FROM wrk_fromAtoB_astar('hanoi_walk_net',${departLocation},${destLocation}) ORDER BY seq) AS route;`}
    
    console.log(queryLine);
    const queryResult = (await pool.query(queryLine)).rows
    line = queryResult[0]
    res.render('route.ejs',{departLocation,destLocation,line})
})

module.exports = router;