import React from 'react'

function Navbar() {
  return (
    <>
    <div class="navbar">
    <img height={60} src="\evision.jpg" alt="evision" />
    <div class="navbar__brand">
    </div>
    <div class="navbar__nav">
      <ul class="navbar__nav-list">
        <li class="navbar__nav-item">
          <a href="#home" style={{color: "blue"}} class="navbar__nav-link">
            Home
          </a>
        </li>
        <li class="navbar__nav-item">
          <a href="#about" style={{color: "blue"}} class="navbar__nav-link">
            About
          </a>
        </li>
        <li class="navbar__nav-item">
          <a href="#contact" style={{color: "blue"}} class="navbar__nav-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
  </>
  )
}

export default Navbar