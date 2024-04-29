const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const cors = require('cors')
const port  = 2500

const academicyearRoute = require('./src/routes/academic-year')
const termRoute = require('./src/routes/term')
const classRoute = require('./src/routes/class')
const classDivisionRoute = require('./src/routes/class-division')
const subjectRoute = require('./src/routes/subject')
const teacherRoute = require('./src/routes/teachers')
const studentRoute = require('./src/routes/students')
const attendanceRoute = require('./src/routes/attendance')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin:['http://localhost:3000', 'http://localhost:3001'],
    methods:['POST','GET','PUT','DELETE'],
    credentials:true
}))
// app.use(cors());
app.use(academicyearRoute)
app.use(termRoute)
app.use(classRoute)
app.use(classDivisionRoute)
app.use(subjectRoute)
app.use(teacherRoute)
app.use(studentRoute)
app.use(attendanceRoute)








app.listen(port, ()=>{
    console.log(`running on port ${port}`);
})