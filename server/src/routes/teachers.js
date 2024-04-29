const { Router } = require('express')
const router = Router()
const db = require('../config/db')
const bcrypt = require('bcrypt')
const saltRounds = 10
const { createToken } = require('../../teacherJWTauth')
const { generateTeacherToken } = require ('../../middleware/usermiddleware')



router.post('/teacher-login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const sqlQuery = `SELECT * FROM teacherinformation WHERE email = ?`;
        const param = [email];
        const data = await db.query(sqlQuery, param);

        if (data.length > 0 && data[0].length > 0) {
            const userData = data[0][0];
            const auth = await bcrypt.compare(password, userData.password);
            
            if (auth) {
                const token = await generateTeacherToken(userData.id);
                delete userData.password;
                return res.json({
                    status: true,
                    token: token,
                    user: userData,
                    message: "User signed in successfully",
                });
            } else {
                return res.status(400).json({ status: false, message: "Invalid password" });
            }
        } else {
            res.status(400).json({ status: false, message: "User Not Found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});


// Example backend API route to update attendance
router.put('/update-attendance/:studentId', async (req, res) => {
    const { studentId } = req.params;
    const { attendance } = req.body;
  
    try {
      // Update attendance for the student with the given studentId in the database
      const sqlQuery = `UPDATE studentinformation SET attendance = ? WHERE id = ?`;
      await db.query(sqlQuery, [attendance, studentId]);
      
      res.status(200).json({ message: 'Attendance updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  


router.post('/add-teacher', async (req, res) => {
    const { fName, mName, lName, gender, email, phoneNumber, address, password, subject, clas } = req.body;

    try {
        const sqlQuery = `INSERT INTO teacherInformation (fname, mname, lname, email, gender, address, phoneNumber, password, subject, class)
                           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        // Hashing the password
        const hashPassword = await bcrypt.hash(password, 10); // Wait for the hashing to complete

        const teacherInfo = [fName, mName, lName, email, gender, address, phoneNumber, hashPassword, subject, clas];
        const result = await db.query(sqlQuery, teacherInfo);
        console.log(result); // check the result in your console

        res.json({ success: "Teacher added successfully" });
    } catch (err) {
        console.error(err); // log the error for debugging
        res.status(400).json({ err: "An error occurred, please try again" });
    }
});



router.get('/teachers', async (req, res) => {
    const sqlQuery = `SELECT * FROM teacherinfo`
    try {
        const [teachers] = await db.query(sqlQuery)
        res.json(teachers)
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
})

router.get('/get-all-students', async (req, res) => {
    const sqlQuery = `SELECT * FROM studentinformation`
    try {
        const [teachers] = await db.query(sqlQuery)
        res.json(teachers)
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
})

module.exports = router