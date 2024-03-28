import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import './Signup.css'

const SignupSchema = yup.object().shape({
  email:yup.string().email('invalid email').required('Required'),
  // password: yup.string().required('required').min(8),
  name: yup.string().required('firstName'),
  password: yup.string()
  .required("Password is required")
  .min(4, "Password length should be at least 4 characters")
  .max(12, "Password cannot exceed more than 12 characters"),
  cpassword: yup.string()
  .required("Confirm Password is required")
  .min(4, "Password length should be at least 4 characters")
  .max(12, "Password cannot exceed more than 12 characters")
  .oneOf([yup.ref("password")], "Passwords do not match")

})

const SignupForm = () =>useFormik({
  initialValues:{
    email:'',
    name: '',
    password:'',
    cpassword: ''
  },
  onSubmit : (value,{resetForm}) =>{
    console.log(value)
    resetForm()
  },
  validationSchema: SignupSchema

}) 




const  Signup = () => {
  return (
    <div>
      <section className="sec vh-100" style={{ backgroundColor: "#eee" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: 50 }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                {/* {step2 : Handling when submit} */}
                <form className="mx-1 mx-md-4" onSubmit={SignupForm.handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="name"
                        onChange={SignupForm.handleChange}
                        value={SignupForm.values.name}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1c">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="email"
                        id="email"
                        onChange={SignupForm.handleChange}
                        value={SignupForm.values.email}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example3c">
                        Your Email
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="password"
                        onChange={SignupForm.handleChange}
                        value={SignupForm.values.password}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="cpassword"
                        onChange={SignupForm.handleChange}
                        value={SignupForm.values.cpassword}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4cd">
                        Repeat your password
                      </label>
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://media.designcafe.com/wp-content/uploads/2020/05/18183844/easy-diy-wall-art-ideas-for-your-home.jpg"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Signup