const {Router} = require('express')
const router = Router()
const db = require('../config/db')


router.post('/add-suject', async(req,res)=>{
    const {subjectName} = req.body   
     const sqlQuery = `INSERT INTO subject(subject_name)
    VALUES(?)`
    try {
        await db.query(sqlQuery, subjectName)
        res.json({success:"Subject added succesfully"})
    } catch (err) {
        res.status(400).json({err:"An error occured try again"})
    }
})

router.get('/subjects', async(req,res)=>{
    const sqlQuery = `SELECT * FROM subject`
    try {
       const [subjects] =  await db.query(sqlQuery)
        res.json(subjects)
    } catch (err) {
        res.status(400).json({err:err.message})
    }
})


module.exports= router