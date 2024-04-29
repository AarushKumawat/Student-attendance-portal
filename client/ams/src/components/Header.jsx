import React from 'react'
import { Link } from 'react-router-dom'            

function Header() {
  return  <header class="navbar nav-height align-top sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
  <Link class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-center text-white" to={"/dashboard"}>Student Information Portal</Link>
  <ul class="navbar-nav flex-row d-md-none">
  <li class="nav-item text-nowrap">
    <button class="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <svg class="bi bi2"><use xlinkHref="#list"/></svg>
    </button>
  </li>
  </ul>
  
  </header>
}

export default Header