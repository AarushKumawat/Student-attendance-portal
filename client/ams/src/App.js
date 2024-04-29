import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './pages/login';
import AdminDashboard from './pages/adminDashboard';
import UserDetails from './pages/userDetails';
import AddStudent from './pages/addClass';
import AddTeacher from './pages/addTeacher';
import AddSubject from './pages/addSubject';
import AddClassDivision from './pages/addClassDivision';
// import AddStudent from './pages/addStudent';
import Navbar from './components/Navbar';
import { Attendance } from './pages/attendance';
import Svg from './components/Svg';
import Header from './components/Header';
import SidebarTabs from './components/SidebarTabs';
import Main from './components/Main';


function App() {
const [year, setYear] = useState("")
const [classes, setClasses] = useState([])
const [subjects, setSubjects] = useState([])
const [teachers, setTeachers] = useState([])
const [divisions, setDivisions] = useState([])
const [students, setStudents] = useState([])

axios.defaults.withCredentials = true

// useEffect(()=>{
// axios.get('http://localhost:2500/academic-year')
// .then((response)=>{
//   const data = response.data
//   setYear(data[0])
// })
// .catch(err=>{
//   console.log(err);
// })
//   }, [])


//   useEffect(()=>{
//     axios.get('http://localhost:2500/classes')
//     .then(response=>{
//         setClasses(response.data)
//     }).catch(err=>{
//         console.log(err);
//     })
// },[]) 


// useEffect(()=>{
//   axios.get('http://localhost:2500/subjects')
//   .then(response=>{
//       setSubjects(response.data)
//     }).catch(err=>{
//       console.log(err);
//     })
// },[])  

// useEffect(()=>{
//   axios.get('http://localhost:2500/teachers')
//   .then(response=>{
//       setTeachers(response.data)
//   }).catch(err=>{
//       console.log(err);
//   })
// },[])  

// useEffect(()=>{
//   axios.get('http://localhost:2500/class-divisions')
//   .then(response=>{
//       setDivisions(response.data)
//   }).catch(err=>{
//       console.log(err);
//   })
// },[]) 

// axios.defaults.withCredentials = true
// useEffect(()=>{
//   axios.get('http://localhost:2500/students')
//   .then(response=>{
//       setStudents(response.data)
//       // console.log(response.data);
//   }).catch(err=>{
//       console.log(err);
//   })
// },[]) 


  return  <div className="App">
  <Svg/>
<Header/>

<div class="container-fluid">
    <div class="row">
   <SidebarTabs/>
   <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
  
        <Routes>
        <Route path='/' element={<Login/>} > </Route>
        <Route path='/dashboard' element={<Main/>} > </Route>
          <Route path='/admin-dashboard' element={<AdminDashboard/>} > </Route>
          <Route path='/add-class' element={<AddStudent/>} > </Route>
          <Route path='/add-teacher' element={<AddTeacher classes = {classes}  subjects = {subjects} />} > </Route>
          <Route path='/add-subject' element={<AddSubject />} > </Route>
          <Route path='/add-class-division' element={<AddClassDivision classes = {classes} teachers = {teachers}  />} > </Route>
          <Route path='/add-student' element={<AddStudent classes = {classes} divisions = {divisions} />} > </Route>
          <Route path='/take-attendance' element={<Attendance students = {students} />} > </Route>
          <Route path='/student-details/:userId' element={< UserDetails students = {students} />} > </Route>
        </Routes>


    
</main>

   </div>
    </div>

      </div>

}

export default App;
