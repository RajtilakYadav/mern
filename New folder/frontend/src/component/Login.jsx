import React from 'react'
import  './login.css'

const Login = () => {
  return (
    <div>
    {/* Hello world */}
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card w-75">
        <h3 className="mt-2 mb-4 text-center txt">CREATE AN ACCOUNT</h3>
        <form>
          <input
            className="mt-3 w-50 d-flex mx-auto ht"
            type="text"
            placeholder="Name"
          />
          <input
            className="mt-3 w-50 d-flex mx-auto ht"
            type="email"
            placeholder="Email"
          />
          <input
            className="mt-3 w-50 d-flex mx-auto ht"
            type="password"
            placeholder="Password"
          />
          <input
            className="mt-3 w-50 d-flex mx-auto ht"
            type="Repeat your password"
            placeholder="Repeat your password"
          />
          <label className="rt mt-3">
            <input type="checkbox" name="Remember me" className="rt" />I agree all
            statements in
          </label>
          <a href="https://random link" style={{ fontSize: "small" }}>
            Terms of service
          </a>
          <br />
          <button className="mt-3 w-50 text-center tt" type="submit">
            Submit
          </button>
        </form>
        <p className="r text-center mb-3 mt-3">
          Have already an account?
          <a className="bh" href="lawSiginpage.html">
            Login here
          </a>
        </p>
      </div>
    </div>
  </div>
 
  )
}

export default Login