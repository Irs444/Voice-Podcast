import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";


const SignupSchema = Yup.object().shape({
  name: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup
      .string()
      .required('Please Enter your password')
      .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  cPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const ArtistSignup = () => {

  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
        name: '',
        email: '',
        password: '',
        cPassword: ''
    },
    onSubmit: async (values, { setSubmitting }) => {
        // setSubmitting(true);
        console.log(values);

        const res = await fetch('http://localhost:5000/artist/add', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(res.status);
        // console.log(response.statusText);

        if (res.status === 200) {

            enqueueSnackbar("User Added Successfully", { variant: 'success' });
            navigate('/artistlogin');
            
        } else if (response.status === 401) {
            enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });
        
        } else {
            enqueueSnackbar("User Not Added", { variant: 'error' });
        }

    },
    validationSchema: SignupSchema
});
  return (
    <div>
 <section className="vh-100">
  <div className="container p-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100 p-5">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid"
          alt="Phone image"
        />
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1  ">
        <form onSubmit={signupForm.handleSubmit} className='w-75 '>
          {/* Email input */}
          <div className="form mb-4">
          <label className="form-label fw-bold" htmlFor="form1Example13">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={signupForm.values.name}
              onChange={signupForm.handleChange}
              className="form-control form-control-lg border border-primary"
            />
           <span className='text-danger'>{signupForm.errors.name}</span>
          </div>
          {/* email input */}
          <div className="form mb-4">
          <label className="form-label fw-bold" htmlFor="form1Example23">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={signupForm.values.email}
              onChange={signupForm.handleChange}
              className="form-control form-control-lg  border border-primary"
            />
           <span className='text-danger'>{signupForm.errors.email}</span>
          </div>
          <div className="form mb-4">
          <label className="form-label fw-bold" htmlFor="form1Example23">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={signupForm.values.password}
              onChange={signupForm.handleChange}
              className="form-control form-control-lg  border border-primary"
            />
           <span className='text-danger'>{signupForm.errors.password}</span>
          </div>
          <div className="form mb-4">
          <label className="form-label fw-bold" htmlFor="form1Example23">
              Repeat Password
            </label>
            <input
              type="password"
              id="cPassword"
              value={signupForm.values.cPassword}
              onChange={signupForm.handleChange}
              className="form-control form-control-lg  border border-primary"
            />
           <span className='text-danger'>{signupForm.errors.cPassword}</span>
          </div>
          <div className="d-flex justify-content-around align-items-center mb-4">
            {/* Checkbox */}
            {/* <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="form1Example3"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="form1Example3">
                {" "}
                Remember me{" "}
              </label>
            </div> */}
            {/* <a href="#!">Forgot password?</a> */}
          </div>
          {/* Submit button */}
          <div className='text-center'>
          <button type="submit" className="btn btn-primary btn-lg ">
            Sign in
          </button>
          </div>
          {/* <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div> */}
          {/* <a
            className="btn btn-primary btn-lg btn-block"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f me-2" />
            Continue with Facebook
          </a> */}
          {/* <a
            className="btn btn-primary btn-lg btn-block"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter me-2" />
            Continue with Twitter
          </a> */}
        </form>
      </div>
    </div>
  </div>
</section>






    </div>
  )
}

export default ArtistSignup