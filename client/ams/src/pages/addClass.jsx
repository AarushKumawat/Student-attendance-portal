

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

function AddStudent(props) {
  const { classes, subjects } = props;
  const [studentInfo, setStudentInfo] = useState({
    fname: '',
    mname: '',
    lname: '',
    gender: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
    attendance: ''
  });
  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;
    setStudentInfo({ ...studentInfo, [name]: value });
  };

  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:2500/add-student', studentInfo);
      toast.success(response.data.success);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4"  style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
      <h1 className="mb-4">New Student Details</h1>
      <div className="form-group">
        <input onChange={handleChange} type="text" value={studentInfo.fname} placeholder="First Name" name="fname" className="form-control" />
      </div>
      <div className="form-group">
        <input onChange={handleChange} type="text" value={studentInfo.mname} placeholder="Middle Name" name="mname" className="form-control" />
      </div>
      <div className="form-group">
        <input onChange={handleChange} type="text" value={studentInfo.lname} placeholder="Last Name" name="lname" className="form-control" />
      </div>
      <div className="form-group">
        {/* <label htmlFor="gender">Gender</label> */}
        <select name="gender" onChange={handleChange} className="form-control">
          <option>Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <br></br>
      <div className="form-group">
        <input onChange={handleChange} type="text" value={studentInfo.phoneNumber} placeholder="Phone Number" name="phoneNumber" className="form-control" />
      </div>
      <div className="form-group">
        <input onChange={handleChange} type="text" placeholder="Email" name="email" className="form-control" />
      </div>
      <div className="form-group">
        <input onChange={handleChange} type="text" placeholder="Address" name="address" className="form-control" />
      </div>
      <div className="form-group">
        <input onChange={handleChange} type="password" placeholder="Password" name="password" className="form-control" />
      </div>
      <div className="form-group">
        <input onChange={handleChange} type="text" value={studentInfo.attendance} placeholder="Attendance" name="attendance" className="form-control" />
      </div>
      <button onClick={handleClick} className="btn btn-primary">Add Student</button>
    </div>
  );
}

export default AddStudent;
