const { Router } = require('express')
const router = Router()
const db = require('../config/db')
const { validateToken } = require("../../teacherJWTauth")

router.get('/get-attendance',validateToken, async (req, res) => {
    // GETTING DATE OF TODAY 
    const date = new Date().toLocaleDateString()
    const teacherId = req.data
    const auth = req.auth
    try {
    // QUERYING FOR CLASS,TEACHER,SUBJECT AND STUDENT INFO
    const sqlQuery1 = `SELECT class_id, student_id,class_division_id,subject FROM 
    class_division 
    INNER JOIN teacher ON class_division.division_teacher = teacher.teacher_id
    INNER JOIN class ON class_division.division_class = class.class_id
    INNER JOIN subject ON teacher.subject = subject.subject_id
    INNER JOIN student ON student.student_classdivision = class_division.class_division_id
    where teacher.teacher_id = ${teacherId.id}`
    const [result] = await db.query(sqlQuery1)
    // QUERYING FOR ATTENDANCE OF CURRENT DATE 
    const [existingAttendance] = await db.query(`SELECT * FROM attendance WHERE date = "${date}"`)
// GETTING ACTIVE TERM 
    const [term] = await db.query(`SELECT term_id FROM term 
WHERE status = 1`)
// GETTING ACTIVE YEAR 
    const [year] = await db.query(`SELECT year_id FROM academicyear 
WHERE status = 1`)
    const termID = term[0].term_id
    const yearID = year[0].year_id

    // CHECKING IF ATTENDANCE ALREADY TAKEN FOR THE DAY 
    if (existingAttendance.length < 1) {
        // TAKE ATTENDANCE ON PAGE MOUNT .. SET * TO ABSENT 
        const query4 = `INSERT INTO attendance(classid,classDivisionid,studentid,subjectid,termid,acad_year,status,date,taken_on)
    VALUES(?,?,?,?,?,?,?,?,now())`

        for (const student of result) {
            const attendanceInfo = [student.class_id, student.class_division_id, student.student_id, student.subject, termID, yearID, "absent", date,]
                await db.query(query4, attendanceInfo)           
        }
        res.json({success:"attendance taken successfully"})

    } else {
        res.json({ message: "Attendance already taken for today" })
    }

} 
    catch (err) {
        res.json({error:err})
    }

})


router.put('/take-attendance', async (req, res) => {
    const date = new Date().toLocaleDateString()
    const checkedStudents = req.body
    const [existingAttendance] = await db.query(`SELECT * FROM attendance WHERE date = "${date}"`)
    if (existingAttendance.length > 0) {
        const sqlQuery = `UPDATE attendance 
        SET status = "present"
        WHERE studentid = ?`
        try {
            for (const studentid of checkedStudents) {
                await db.query(sqlQuery,studentid)
            }
            res.json({ success: "Attendance taken succesfully" })
            
        } catch (err) {
            res.status(400).json({ err: err })
        } 
    }
    else{
        res.json({ message: "Attendance already taken for today" }) 
    }

})


router.get('/view-attendance', async(req,res)=>{
    const date = new Date().toLocaleDateString()
    const sqlQuery = `SELECT * FROM attendance
    WHERE date = '${date}'`
    try {
        const [todaysAttendance] = await db.query(sqlQuery)
        res.json(todaysAttendance)
    } catch (err) {
        res.json({error:err})
    }
})




module.exports = router