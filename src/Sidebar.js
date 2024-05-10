import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div class="sidebar">
      <ul>
        {/* <br />
        <br />
        <br />
        <br /> */}
        <li>
          <Link to = "/get">
            <button class="nav-link">
               <span style={{color:"black", }} class="nav-label">GET DATA</span>
            </button>
          </Link>
          <Link to = "/post">
            <button class="nav-link">
               <span style={{color:"black"}}  class="nav-label">POST DATA</span>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
