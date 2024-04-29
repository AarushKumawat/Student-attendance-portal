import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export const Attendance = (props) => {
  const navigate = useNavigate()
  const [message,setMessage] = useState("")
  const {students} = props
  const [checkedStudents, setCheckedStudents] = useState([])

axios.defaults.withCredentials = true
useEffect(()=>{
axios.get("http://localhost:2500/get-attendance")
.then(response=>{
  console.log(response);
})
.catch(err=>{
  // console.log(err.response.data.error);
  navigate("/")
})
  }, [])


  const handleChange = (event)=>{
const {value,checked} = event.target
if (checked) {
 setCheckedStudents([...checkedStudents,value]);
}
  }

  const takeAttendance = ()=>{
    axios.put('http://localhost:2500/take-attendance',checkedStudents)
    .then(response=>{
      setMessage(response.data.message);
    })
    .catch(err=>{
      console.log(err);
    })


  }



  return <div>
    <h3 style={{color:"red"}}>{message}</h3>
    <table border={1}>
      <thead>
      <tr>
        <th>Student</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
   { students.map(s=>{
          return  <tr key={s.student_id}>
          <td> {s.firstName} {s.middleName} {s.lastName}</td>
          <td> <input onChange={handleChange} style={{width:"40px"}} type="checkbox" value={s.student_id} name="check" id="" /></td>
          </tr>
     })}
      
      </tbody>
    </table> <br />

    <button onClick={takeAttendance}>TAKE ATTENDANCE</button>
    
  </div>
}
