const {Router} = require('express')
const router = Router()
const db = require('../config/db')

const date = new Date().getFullYear()
const year = date + "/"+ (date + 1)

router.post('/add-year', async(req,res)=>{
    const sqlQuery = `INSERT INTO academicyear(accademic_year)
    VALUES(?)`
    try {
        await db.query(sqlQuery, year)
        res.json({success:"Year added succesfully"})
    } catch (err) {
        res.status(400).json({err:err.message})
    }
})

router.get('/academic-year', async(req,res)=>{
    const sqlQuery = `SELECT * FROM academicyear`
    try {
       const [acad_year] =  await db.query(sqlQuery)
        res.json(acad_year)
    } catch (err) {
        res.status(400).json({err:err.message})
    }
})


module.exports= router