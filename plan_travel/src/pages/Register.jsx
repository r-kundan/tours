import React from 'react'
import "../style/register.css"

function Register() {
  return (
    <div className="main-container">
      <div className="row   register"> 
    <h1 className="col-10 ">Register on KundanVista's</h1>
    <div className="col-10 ">
        <form action="/signup" method="POST"
        className="needs-validation" novalidate>
            <div className="mb-3">
                <label for="username" className="form-lable">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="enter username"
                  className="form-control"
                  required
                /><div className="invalid-feedback">username should be valid</div>
              </div>
              <div className="mb-3">
                <label for="email" className="form-lable">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="enter email"
                  className="form-control"
                  required
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
                />
              </div>
              <button className="btn">SignUp</button>
        </form>
    </div>
</div>
    </div>
  )
}

export default Register