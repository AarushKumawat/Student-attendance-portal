

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'sonner';
// import { useAuth } from '../context/auth';
// import './login.css'

// const Login = () => {
//   const navigate = useNavigate();
//   const { setUserAuthInfo } = useAuth();
//   const [userInfo, setUserInfo] = useState({
//     email: '',
//     password: ''
//   });

//   const [studentInfo, setStudentInfo] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setUserInfo({ ...userInfo, [name]: value });
//   };

//   const handleStudentChange = event => {
//     const { name, value } = event.target;
//     setStudentInfo({ ...studentInfo, [name]: value });
//   };

//   const handleTeacherLogin = () => {
//     axios.post('http://localhost:2500/teacher-login', userInfo)
//       .then(response => {
//         const data = response.data;
//         setUserAuthInfo(data);
//         toast.success(data.message);
//         navigate('/admin-dashboard');
//       })
//       .catch(err => {
//         console.error(err);
//         toast.error('An error occurred while logging in. Please try again later.');
//       });
//   };

//   const handleStudentLogin = () => {
//     axios.post('http://localhost:2500/student-login', studentInfo)
//       .then(response => {
//         const data = response.data;
//         setUserAuthInfo(data);
//         toast.success(data.message);
//         navigate('/admin-dashboard');
//       })
//       .catch(err => {
//         console.error(err);
//         toast.error('An error occurred while logging in. Please try again later.');
//       });
//   };

//   return (
//     <div className = 'page-container'>
//       <main className="form-signin d-flex justify-content-between">
//         <div className="login-container">
//           <form>
//             <h1 className="h3 mb-3 fw-normal"><strong>Teacher Login</strong></h1>
//             <div className="form-floating">
//               <input type="email" onChange={handleChange} autoComplete="off" required value={userInfo.email} name="email" className="form-control" placeholder="Email" />
//               <label htmlFor="floatingInput">Email</label>
//             </div>
//             <div className="form-floating">
//               <input type="password" name="password" required onChange={handleChange} className="form-control" value={userInfo.password} placeholder="Password" />
//               <label htmlFor="floatingPassword">Password</label>
//             </div>
//             <button onClick={handleTeacherLogin} className="btn btn-primary w-100 py-3" type="button">Login</button>
//             <div className="container mt-3">
//             <span><strong> Don't have an account? </strong></span>
//             <button className="btn btn-primary" type="button"><strong><a href="/add-teacher">Signup</a></strong></button>
//             </div>
//           </form>
        

//         <div className="spacer" />

        
//           <form>
//             <h1 className="h3 mb-3 fw-normal"><strong>Student Login</strong></h1>
//             <div className="form-floating">
//               <input type="email" onChange={handleStudentChange} autoComplete="off" required value={studentInfo.email} name="email" className="form-control" placeholder="Email" />
//               <label htmlFor="floatingInput">Email</label>
//             </div>
//             <div className="form-floating">
//               <input type="password" name="password" required onChange={handleStudentChange} className="form-control" value={studentInfo.password} placeholder="Password" />
//               <label htmlFor="floatingPassword">Password</label>
//             </div>
//             <button onClick={handleStudentLogin} className="btn btn-primary w-100 py-3" type="button">Login</button>
//             <div className="container mt-3">
//               <span><strong> Don't have an account? </strong>  </span>
//               <button className="btn btn-primary" type="button"><strong><a href="/add-teacher">Signup</a></strong></button>
//             </div>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuth } from '../context/auth';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const { setUserAuthInfo } = useAuth();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });

  const [studentInfo, setStudentInfo] = useState({
    email: '',
    password: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleStudentChange = event => {
    const { name, value } = event.target;
    setStudentInfo({ ...studentInfo, [name]: value });
  };

  const handleTeacherLogin = () => {
    axios.post('http://localhost:2500/teacher-login', userInfo)
      .then(response => {
        const data = response.data;
        setUserAuthInfo(data);
        toast.success(data.message);
        navigate('/admin-dashboard');
      })
      .catch(err => {
        console.error(err);
        toast.error('An error occurred while logging in. Please try again later.');
      });
  };

  const handleStudentLogin = () => {
    axios.post('http://localhost:2500/student-login', studentInfo)
      .then(response => {
        const data = response.data;
        setUserAuthInfo(data);
        toast.success(data.message);
        navigate('/admin-dashboard');
      })
      .catch(err => {
        console.error(err);
        toast.error('An error occurred while logging in. Please try again later.');
      });
  };

  return (
    <main className="page-container">
      <div className="form-signin d-flex justify-content-between">
        <div className="login-container">
          <form>
            <h1 className="h3 mb-3 fw-normal"><strong>Teacher Login</strong></h1>
            <div className="form-floating">
              <input type="email" onChange={handleChange} autoComplete="off" required value={userInfo.email} name="email" className="form-control" placeholder="Email" />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input type="password" name="password" required onChange={handleChange} className="form-control" value={userInfo.password} placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button onClick={handleTeacherLogin} className="btn btn-primary w-100 py-3" type="button">Login</button>
            <div className="container mt-3">
              <span><strong> Don't have an account? </strong></span>
              <strong><a href="/add-teacher">Signup</a></strong>
            </div>
          </form>
        

        <div className="spacer" />

        
          <form>
            <h1 className="h3 mb-3 fw-normal"><strong>Student Login</strong></h1>
            <div className="form-floating">
              <input type="email" onChange={handleStudentChange} autoComplete="off" required value={studentInfo.email} name="email" className="form-control" placeholder="Email" />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input type="password" name="password" required onChange={handleStudentChange} className="form-control" value={studentInfo.password} placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button onClick={handleStudentLogin} className="btn btn-primary w-100 py-3 text-white" type="button">Login</button>
            <div className="container mt-3">
              <span><strong> Don't have an account? </strong>  </span>
              <strong><a href="/add-teacher">Signup</a></strong>
            </div>
          </form>
        </div>
        
      </div>
    <marquee><strong>Welcome to our site Mrs. Jyoti Jadhav Ma'am</strong></marquee>
    </main>
    
  );
};

export default Login;
