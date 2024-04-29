const {Router} = require('express')
const router = Router()
const db = require('../config/db')

// ADD TERM 
router.post('/add-term', async(req,res)=>{
    const { term} = req.body
    const sqlQuery = `INSERT INTO term(term)
    VALUES(?)`
    try {
        await db.query(sqlQuery, term)
        res.json({success:"Term added succesfully"})
    } catch (err) {
        res.status(400).json({err:err.message})
    }
})


// ACTIVATE TERM 
router.post('/activate-term', async(req,res)=>{
    const sqlQuery = `UPDATE term
    SET status = ?
    WHERE term_id = 1`
    try {
        await db.query(sqlQuery,1)
        res.json({success:"Term Activated succesfully"})
    } catch (err) {
        res.status(400).json({err:err.message})
    }
})





module.exports= router