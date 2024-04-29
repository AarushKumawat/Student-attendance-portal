// import React, {useState } from 'react'
// import axios from 'axios'

// function AddStudent(props) {
//     const {classes, divisions} = props
//     const [studentInfo , setStudentInfo] = useState({
//         firstName: "",
//         middleName: "",
//         lastName : "",
//         sgender: "",
//         semail: "",
//         sphoneNumber: "",
//         saddress: "",
//         student_classdivision: "",
//         student_class:"",
//     })

// const handleChange = (event)=>{
//     const {name,value} = event.target
//     setStudentInfo({...studentInfo, [name]:value})
//     }
// axios.defaults.withCredentials = true
//   //  ADD STUDENT 
//     const handleClick = ()=>{
//        axios.post("http://localhost:2500/add-student", studentInfo)
//        .then(response=>{
// console.log(response.data);
//        })
//         .catch(err=>{
// console.log(err);
//        }) 
//     }




//   return (
//     <div className='student container'>
//         <h1>Add Student</h1>

//     <input onChange={handleChange} type="text" placeholder='fName' required name="firstName" id="" />
//     <input onChange={handleChange} type="text" placeholder='mName' name="middleName" id="" />
//     <input onChange={handleChange} type="text" placeholder='lName' name="lastName" id="" />

//     <label htmlFor="">GENDER </label>
//     <select name="sgender" onChange={handleChange} id="">
//     <option >Select gender</option> 
//     <option value="Male">Male</option>
//     <option value="Female">Female</option>
//     </select>
//     <input onChange={handleChange} type="text" placeholder='phoneNumber(OPTIONAL)' name="sphoneNumber" id="" />
//     <input onChange={handleChange} type="text" placeholder='email(OPTIONAL)' name="semail" id="" />
//     <input onChange={handleChange} type="text" placeholder='address(OPTIONAL)' name="saddress" id="" />

//     <label htmlFor="">CLASS </label>
//     <select className='form-control' name="student_class" onChange={handleChange} id=""> 
//     <option value="">Select Class</option>
//  {  classes.map(c=>{
//       return <option key = {c.class_id} value={c.class_id}>{c.class_name}</option>;
//     })} 

//  </select> <br/>
//  <hr />
//     <label htmlFor="">CLASS DIVISION  </label>
//     <select className='form-control' name="student_classdivision" onChange={handleChange} id=""> 
//     <option value="">Select Class Division</option>
//  { divisions.map(d=>{
//       return <option key = {d.class_division_id} value={d.class_division_id}>{d.class_division_name}</option>;
//     })}
//  </select>
//     <button className=' btn btn-success' onClick={handleClick}>Add Student</button>




//     </div>
//   )
// }

// export default AddStudent