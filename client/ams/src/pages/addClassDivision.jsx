import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddClassDivision(props) {
  const {classes, teachers} = props
const navigate = useNavigate()
  const [division, setDivision] = useState({
    classDivisionName:"",
    division_class:"",
    division_teacher:""
  })

  const handleChange = (event)=>{
    const {name, value} = event.target
setDivision({...division,[name]:value })
  }
axios.defaults.withCredentials = true
  const handleClick = ()=>{
    axios.post('http://localhost:2500/add-class-division', division)
    .then(response=>{
      console.log(response.data);
    })
    .catch(err=>{
      navigate('/')
    })

    setDivision({
      classDivisionName:""
    })
  }

  return (
    <div>
        <input value={division.classDivisionName} type="text" onChange={handleChange} placeholder='class division name' name="classDivisionName" id="" />

        <label htmlFor=""> CLASS  </label>
    <select name="division_class" onChange={handleChange} id=""> 
    <option value="">Select Class</option>
 { classes.map(c=>{
      return <option key = {c.class_id} value={c.class_id}>{c.class_name}</option>;
    })}
 </select> <br />

 <label htmlFor=""> TEACHER </label>
    <select name="division_teacher" onChange={handleChange} id=""> 
    <option value="">Select Teacher</option>
 { teachers.map(t=>{
      return <option key = {t.teacher_id} value={t.teacher_id}>{t.fName + " " + t.mName + " " + t.lName}</option>;
    })}
 </select> <br/> <br />

 <button onClick={handleClick} >Add class Division</button>
    </div>
  )
}

export default AddClassDivision