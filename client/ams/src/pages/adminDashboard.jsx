

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

function AdminDashboard() {
  const userData = JSON.parse(localStorage.getItem('user'));
  const attendance = userData ? userData.attendance : null;
  const { authState: user } = useAuth();
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const [defaulter, setDefaulter] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:2500/get-all-students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);

  useEffect(() => {
    if (attendance !== undefined && parseInt(attendance) < 75) {
      setDefaulter(true);
    } else {
      setDefaulter(false);
    }
  }, [attendance]);

  return (
    <div className="container mt-4" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px'}}>
      {attendance === null && (
        <div className="jumbotron">
          <h1 className="display-4">Student Dashboard</h1>
          <p className="lead">Welcome to the student dashboard.</p>
        </div>
      )}

      {attendance === undefined && (
        <div>
          <h1 className="mb-4">Welcome, {user.user.fname}!</h1>
          <h2 className="mb-4">Student list</h2>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Attendance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.fname}</td>
                    <td>{student.lname}</td>
                    <td>{student.email}</td>
                    <td>{student.attendance}</td>
                    <td>
                      <Link to={`/student-details/${student.id}`} className="btn btn-primary">Update Attendance</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {attendance !== undefined && (
        <div>
          <h1 className="mb-4">Welcome, {user.user.fname}!</h1>
          
          {defaulter ? (
            
            <h3>Attendance: {user.user.attendance}%. You are in the defaulter's list.</h3>
            
          ) : (
            <h2>Attendance: {attendance}%</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
