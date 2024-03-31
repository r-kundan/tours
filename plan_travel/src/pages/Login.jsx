import React, { useState } from 'react'
import {Form} from "reactstrap"
// import "../style/register.css"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic, e.g., make a POST request to your backend API
  };

  return ( 
  <div className="main-container">
    <div className='register row'>
    <h1 className="col-8">Login to KundanVista's</h1>
    <div className="col-8">
        <Form action="/login" method="POST"
        className="needs-validation" novalidate>
            <div>
                <label for="username" className="form-lable">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="enter username"
                  className="form-control"
                  required
                  value={username}
          onChange={(e) => setUsername(e.target.value)}

                />
             </div>
              <div className="mb-3">
                <label for="password" className="form-lable">Password</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="enter password"
                  className="form-control"
                  required
                  value={password}
          onChange={(e) => setPassword(e.target.value)}

                />
              </div>
              <button className="btn ">LogIn</button>

        </Form>
    </div>
    </div>
</div>
  )
}

export default Login