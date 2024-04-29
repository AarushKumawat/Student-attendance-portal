const {Router} = require('express')
const router = Router()
const db = require('../config/db')


router.post('/add-class', async(req,res)=>{
    const {className} = req.body   
     const sqlQuery = `INSERT INTO class(class_name)
    VALUES(?)`
    try {
        await db.query(sqlQuery, className)
        res.json({success:"Class added succesfully"})
    } catch (err) {
        res.status(400).json({err:"An error occured try again"})
    }
})

router.get('/classes', async(req,res)=>{
    const sqlQuery = `SELECT * FROM class
    ORDER BY class_name ASC`
    try {
       const [classes] =  await db.query(sqlQuery)
        res.json(classes)
    } catch (err) {
        res.status(400).json({err:err.message})
    }
})


module.exports= router