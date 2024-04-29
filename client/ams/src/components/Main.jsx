



import React from 'react';
import './Main.css' 

function Main() {
  return (
    <div>
      <div className="header d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Welcome User</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="box">
              <span className="count"> </span>
              <span className="boxitem">Students</span>
              <p><a className="a" href="/add-class">ADD NEW STUDENT</a></p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="box">
              <span className="count"> </span>
              <span className="boxitem">Teachers</span>
              <p><a className="a" href="/add-teacher">ADD NEW TEACHER</a></p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="box">
              <span className="count"> </span>
              <span className="boxitem">Attendance</span>
              <p><a className="a" href="/admin-dashboard">TAKE ATTENDANCE</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
