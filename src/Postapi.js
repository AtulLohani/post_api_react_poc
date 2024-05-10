import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
function Postapi() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [save, setSave] = useState([]);

  function saveUser() {
    console.log({ name, email, mobile });
    let data = { name, email, mobile };
    fetch("https://mocki.io/v1/7dc5f6a5-e570-40d6-9573-6a384b8fdee4", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((ressult) => {
      console.warn("result", ressult);

      if (ressult.status === 405) {
        setSave();
      } else {
        console.error("Error Agaya Chutiye");
      }
    });
  }
  return (
    <>
      <Navbar />
      <div>
        <Sidebar/>
      </div>
      <div className="App">
        <h1>Post Api Method</h1>
        {!save && <h3>Response Record Successfully</h3>}

       <div className="inputbox"> <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          placeholder="Enter Name"
        /></div>{" "}
        <br /> <br />
       <div className="inputbox"> <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          placeholder="Enter Email"
        /></div>{" "}
        <br /> <br />
       <div className="inputbox"> <input
          type="text"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          name="mobile"
          placeholder="Enter Mobile"
        /></div>{" "}
        <br /> <br />
        <button type="button" onClick={saveUser}>
          Save New User
        </button>
      </div>
    </>
  );
}

export default Postapi;
