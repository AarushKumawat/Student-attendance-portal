import React from 'react';
import { Link } from 'react-router-dom';

const SidebarTabs = () => {
  const loggedIn = localStorage.getItem('token');

  // Check if the user is logged in based on the presence of the token
  if (loggedIn) {

    return (
      <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
        <div className="offcanvas-lg offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
          <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="/dashboard">
                  <svg className="bi"><use xlinkHref="#house-fill"/></svg>
                  Dashboard
                </a> 
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-2" to="/add-class">
                  <svg className="bi"><use xlinkHref="#file-earmark"/></svg>
                  Add Students
                </Link>
              </li>
  
              <li class="nav-item">
            <Link class="nav-link d-flex align-items-center gap-2" to={"/add-teacher"}>
              <svg class="bi"><use xlinkHref="#people"/></svg>
             Add Teachers
            </Link>
          </li>
  
          <li class="nav-item">
            <Link class="nav-link d-flex align-items-center gap-2" to="/add-class-division">
              <svg class="bi"><use xlinkHref="#cart"/></svg>
              Class Divisions
            </Link>
          </li>
          
  
          <li class="nav-item">
            <Link class="nav-link d-flex align-items-center gap-2" to={"/take-attendance"}>
              <svg class="bi"><use xlinkHref="#people"/></svg>
            Take Attendance
            </Link>
          </li>
  
          <li class="nav-item">
            <Link class="nav-link d-flex align-items-center gap-2" to={"/view-attendance"}>
              <svg class="bi"><use xlinkHref="#people"/></svg>
             View Attendance
            </Link>
          </li>
              {/* Other sidebar items */}
            </ul>
            <br/><br/>
            <hr className="my-3"/>
            <ul className="nav flex-column mb-auto">
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="/">
                  <svg className="bi"><use xlinkHref="#door-closed"/></svg>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
    // User is logged in, so don't render the sidebar
    
  }

  return null;

  // User is not logged in, render the sidebar

};

export default SidebarTabs;
