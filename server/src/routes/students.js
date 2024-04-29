const { Router } = require('express')
const router = Router()
// const db = require('../config/db')
const bcrypt = require('bcrypt')
const db = require('../config/db')
const { validateToken } = require('../../teacherJWTauth')
const { generateStudentToken } = require('../../middleware/usermiddleware')



router.post('/student-login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body)
        const sqlQuery = `SELECT * FROM studentinformation WHERE email = ?`;

        const param = [email];
        const data = await db.query(sqlQuery, param);
        console.log(data[0][0].password);
        const studentData = data[0][0];
        // console.log(data)
        if (data[0].length > 0) {
            const auth = await bcrypt.compare(password, studentData.password);
            // const accessToken = createToken(data[0]);
            // res.cookie("token", accessToken, { httpOnly: true });
            if (auth) {
                const token = await generateStudentToken(studentData.id)
                delete studentData.password;
                return res.json({ token: token, user: studentData, auth: true, message: "User logged in" });
            }
            // bcrypt.compare(password, data[0].password, async (err, result) => {
            //     if (result) {
            //         const accessToken = createToken(data[0]);
            //         res.cookie("token", accessToken, { httpOnly: true });
            //         res.json({ token: accessToken, userData: data[0], auth: true, message: "User logged in" });
            //     } else {
            //         res.status(404).json({ err: "Incorrect password" });
            //     }
            // });
            res.status(200).json({ status: true, message: "Student logged in" })
        } else {
            res.status(404).json({ err: "User with email not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(404).json({ err: "User not found" });
    }
});


router.post('/add-student', async (req, res) => {
    const { fname, mname, lname, email, gender, address, phoneNumber, password, subject, clas, attendance } = req.body
    const sqlQuery = `INSERT INTO studentinformation(fname, mname, lname, email, gender, address, phoneNumber, password, subject, class, attendance)
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const hashPassword = await bcrypt.hash(password, 10)
    const studentInfo = [fname, mname, lname, email, gender, address, phoneNumber, hashPassword, subject, clas, attendance];
    console.log(hashPassword)
    console.log(req.body)

    try {
        await db.query(sqlQuery, studentInfo)
        res.json({ success: "Student added succesfully" })
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
})


// router.get('/students',validateToken, async(req,res)=>{
//     const teacherid = req.data
//     const sqlQuery = `SELECT * FROM studentinformation
//     INNER JOIN class ON student.student_class = class.class_id`
//     try {
//        const [students] =  await db.query(sqlQuery)
//         res.json(students)
//     } catch (err) {
//         res.status(400).json({err:err.message})
//     }
// })

router.get('/students', async (req, res) => {
    const sqlQuery = `SELECT * FROM studentinformation`
    try {
        const [students] = await db.query(sqlQuery)
        res.json(students)
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
})

router.get("/student/:userId", async(req, res) => {
    const id = req.params.userId;
    console.log(id)
    try{
        const query = `select * from studentinformation where id=?`
        const param = [id];
        const result = await db.query(query, param);
        console.log(result);
        res.status(200).json(result[0][0])
    }catch(err){
        res.json("Error")
    }
})

// Backend route to update attendance
router.put("/student/:userId/update-attendance", async (req, res) => {
    try {
      const { userId } = req.params;
      const { attendance } = req.body;
  
      // Assuming you have a table named 'studentinformation' with a column 'attendance'
      const query = `UPDATE studentinformation SET attendance = ? WHERE id = ?`;
      const params = [attendance, userId];
  
      await db.query(query, params);
  
      res.status(200).json({ message: "Attendance updated successfully" });
    } catch (error) {
      console.error("Error updating attendance:", error);
      res.status(500).json({ message: "Error updating attendance" });
    }
  });
  
module.exports = router