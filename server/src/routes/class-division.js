const {Router} = require('express')
const router = Router()
const db = require('../config/db')
const {validateToken} = require('../../teacherJWTauth')


router.post('/add-class-division',validateToken, async(req,res)=>{
    const {classDivisionName, division_class, division_teacher} = req.body   
     const sqlQuery = `INSERT INTO class_division(class_division_name, division_class, division_teacher)
    VALUES(?,?,?)`
    try {
        await db.query(sqlQuery,[classDivisionName, division_class, division_teacher])
        res.json({success:"Class division added succesfully"})
    } catch (err) {
        res.status(400).json({err:err.message})
    }
})


router.get('/class-divisions', async(req,res)=>{
    const sqlQuery = `SELECT * FROM class_division`
    try {
       const [divisions] =  await db.query(sqlQuery)
        res.json(divisions)
    } catch (err) {
        res.status(400).json({err:err.message})
    }
})




module.exports= router