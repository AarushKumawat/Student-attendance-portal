// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function UserDetails() {
//   const { userId } = useParams();
//   const [user, setUser] = useState({});
//   const [attendanceValue, setAttendanceValue] = useState('');
//   const navigate = useNavigate();

//   const handleUpdateAttendance = async () => {
//     try {
//       await axios.put(`http://localhost:2500/student/${userId}/update-attendance`, {
//         attendance: attendanceValue
//       });
//       console.log('Attendance updated successfully');
//       navigate('/admin-dashboard'); // Navigate to the admin-dashboard page after updating attendance
//     } catch (error) {
//       console.error('Error updating attendance:', error);
//     }
//   };

//   useEffect(() => {
//     async function fetchUserDetails() {
//       try {
//         const response = await axios.get(`http://localhost:2500/student/${userId}`);
//         setUser(response.data);
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     }

//     fetchUserDetails();

//     // Cleanup function
//     return () => setUser({});
//   }, [userId]);

//   if (!user.fname) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Student Details</h1>
//       <p>Name: {user.fname}</p>
//       <p>Email: {user.email}</p>
//       <p>Attendance: {user.attendance}</p>
//       <p>Update attendance:</p>
//       <input 
//         type="number" 
//         placeholder="Enter new attendance" 
//         value={attendanceValue} 
//         onChange={(e) => setAttendanceValue(e.target.value)} 
//       />
//       <button onClick={handleUpdateAttendance}>Update Attendance</button>
//     </div>
//   );
// }

// export default UserDetails;

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function UserDetails() {
//   const { userId } = useParams();
//   const [user, setUser] = useState({});
//   const [attendanceValue, setAttendanceValue] = useState('');
//   const navigate = useNavigate();

//   const handleUpdateAttendance = async () => {
//     try {
//       await axios.put(`http://localhost:2500/student/${userId}/update-attendance`, {
//         attendance: attendanceValue
//       });
//       console.log('Attendance updated successfully');
//       navigate('/admin-dashboard'); // Navigate to the admin-dashboard page after updating attendance
//     } catch (error) {
//       console.error('Error updating attendance:', error);
//     }
//   };

//   useEffect(() => {
//     async function fetchUserDetails() {
//       try {
//         const response = await axios.get(`http://localhost:2500/student/${userId}`);
//         setUser(response.data);
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     }

//     fetchUserDetails();

//     // Cleanup function
//     return () => setUser({});
//   }, [userId]);

//   if (!user.fname) {
//     return <div className="container mt-4">Loading...</div>;
//   }

//   return (
//     <div className="container mt-4">
//       <h1 className="mb-4">Student Details</h1>
//       <div className="mb-3">
//         <p><strong>Name:</strong> {user.fname}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Attendance:</strong> {user.attendance}</p>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="attendanceInput" className="form-label"><strong>Update Attendance:</strong></label>
//         <input 
//           type="number" 
//           id="attendanceInput"
//           className="form-control"
//           placeholder="Enter new attendance" 
//           value={attendanceValue} 
//           onChange={(e) => setAttendanceValue(e.target.value)} 
//         />
//       </div>
//       <button onClick={handleUpdateAttendance} className="btn btn-primary">Update Attendance</button>
//     </div>
//   );
// }

// export default UserDetails;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [attendanceValue, setAttendanceValue] = useState('');
  const navigate = useNavigate();

  const handleUpdateAttendance = async () => {
    try {
      await axios.put(`http://localhost:2500/student/${userId}/update-attendance`, {
        attendance: attendanceValue
      });
      console.log('Attendance updated successfully');
      navigate('/admin-dashboard'); // Navigate to the admin-dashboard page after updating attendance
    } catch (error) {
      console.error('Error updating attendance:', error);
    }
  };

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await axios.get(`http://localhost:2500/student/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }

    fetchUserDetails();

    // Cleanup function
    return () => setUser({});
  }, [userId]);

  if (!user.fname) {
    return <div className="container mt-4">Loading...</div>;
  }

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', borderRadius: '10px' }}>
      <div className="container mt-4">
        <h1 className="mb-4">Student Details</h1>
        <div className="mb-3">
          <p><strong>Name:</strong> {user.fname}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Attendance:</strong> {user.attendance}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="attendanceInput" className="form-label"><strong>Update Attendance:</strong></label>
          <input 
            type="number" 
            id="attendanceInput"
            className="form-control"
            placeholder="Enter new attendance" 
            value={attendanceValue} 
            onChange={(e) => setAttendanceValue(e.target.value)} 
          />
        </div>
        <button onClick={handleUpdateAttendance} className="btn btn-primary">Update Attendance</button>
      </div>
    </div>
  );
}

export default UserDetails;

