import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

function AddTeacher(props) {
  const { classes, subjects } = props;
  const [teacherInfo, setTeacherInfo] = useState({
    fName: '',
    mName: '',
    lName: '',
    gender: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
    subject: '',
    clas: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setTeacherInfo({ ...teacherInfo, [name]: value });
  };

  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:2500/add-teacher', teacherInfo);
      toast.success(response.data.success);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
      <h1 className="mb-4">New Teacher Details</h1>
      <div className="form-group">
        <input onChange={handleChange} type="text" value={teacherInfo.fName} placeholder="First Name" name="fName" className="form-control" />
      </div>
      <div className="form-group">
        <input onChange={handleChange} type="text" value={teacherInfo.mName} placeholder="Middle Name" name="mName" className="form-control" />
      </div>
      <div className="form-group">
        <input onChange={handleChange} type="text" value={teacherInfo.lName} placeholder="Last Name" name="lName" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="gender"></label>
        <select name="gender" onChange={handleChange} className="form-control">
          <option>Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <br></br>
      <div className="form-group">
        <input onChange={handleChange} type="text" value={teacherInfo.phoneNumber} placeholder="Phone Number" name="phoneNumber" className="form-control" />
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
      <button onClick={handleClick} className="btn btn-primary">Add Teacher</button>
    </div>
  );
}

export default AddTeacher;
