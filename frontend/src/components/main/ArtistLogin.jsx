import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});


const ArtistLogin = () => {

  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values));
      console.log(values);

      // send request to backend/REST API
      const res = await fetch('http://localhost:5000/artist/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      // console.log(res.statusText);

      if (res.status === 200) {
        enqueueSnackbar('Loggedin Successfully', { variant: 'success' });
        navigate('/artist/publish');

        const data = await res.json();
        console.log(data);
        //to uave user data  in session ,inbuilt api- sessionstorage
        sessionStorage.setItem('user', JSON.stringify(data));

      } else if (response.status === 401) {
        enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }


    },
    validationSchema: LoginSchema
  });
  return (
    <div>
        <>
  {/* Section: Design Block */}
  <section className="  text-lg-start d-flex justify-content-center">
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .rounded-t-5 {\n      border-top-left-radius: 0.5rem;\n      border-top-right-radius: 0.5rem;\n    }\n\n    @media (min-width: 992px) {\n      .rounded-tr-lg-0 {\n        border-top-right-radius: 0;\n      }\n\n      .rounded-bl-lg-5 {\n        border-bottom-left-radius: 0.5rem;\n      }\n    }\n  ",
          
      }}
    />
    <div className="card mb-3 w-50" style={{marginTop:"100px"}}>
      <div className="row g-0 d-flex align-items-center">
        <div className="col-lg-4 d-none d-lg-flex">
          <img
            src="https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_640.jpg" height={300}
            alt="Trendy Pants and Shoes"
            className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5 rounded"
          />
        </div>
        <div className="col-lg-8">
          <div className="card-body py-5 px-md-5">
            <form  onSubmit={loginForm.handleSubmit}>
              {/* Email input */}
              <div className="form mb-4">
              <label className="form-label fw-bold" htmlFor="form2Example1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={loginForm.values.email}
                  onChange={loginForm.handleChange}
                  className="form-control"
                />
              <span className='text-danger'>{loginForm.errors.email}</span>
              </div>
              {/* Password input */}
              <div className="form mb-4">
              <label className="form-label fw-bold" htmlFor="form2Example2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={loginForm.values.password}
                  onChange={loginForm.handleChange}
                  className="form-control"
                />
               <span className='text-danger'>{loginForm.errors.password}</span>
              </div>
              {/* 2 column grid layout for inline styling */}
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  {/* Checkbox */}
                  <div className="form-check">
                    {/* <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example31"
                      defaultChecked=""
                    /> */}
                    {/* <label
                      className="form-check-label"
                      htmlFor="form2Example31"
                    >
                      {" "}
                      Remember me{" "}
                    </label> */}
                  </div>
                </div>
                <div className="col">
                  {/* Simple link */}
                  <a href="#!">Forgot password?</a>
                </div>
              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section: Design Block */}
</>

    </div>
  )
}

export default ArtistLogin