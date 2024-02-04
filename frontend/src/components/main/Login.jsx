import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});

const Login = () => {

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
      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      console.log(res.statusText);

      if (res.status === 200) {
        enqueueSnackbar('Loggedin Successfully', { variant: 'success' });
        navigate('/');

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
      <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img
          src="https://img.freepik.com/free-vector/illustrated-people-doing-podcast_23-2148771969.jpg?w=740&t=st=1706304696~exp=1706305296~hmac=f9a78affc23deeb57cd1c93ce081a244df3189650fb5af39abbec0310f492852"
          className="img-fluid"
          alt="Phone image"
        />
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form onSubmit={loginForm.handleSubmit} className='w-50'>
          {/* Email input */}
          <div className="form mb-2">
          <label className="form-label fw-bold" htmlFor="form1Example13">
              Email address
            </label>
            <input
              type="email"
              id='email' 
              onChange={loginForm.handleChange} 
              value={loginForm.values.email}
              className="form-control form-control btn-outline-warning"
            />
             <span className='text-danger ms-3'>{ loginForm.errors.email}</span>
           
          </div>
          {/* Password input */}
          <div className="form mb-2">
          <label className="form-label fw-bold" htmlFor="form1Example23">
              Password
            </label>
            <input
              type="password"
              id='password'
               onChange={loginForm.handleChange} 
               value={loginForm.values.password}
              className="form-control form-control btn-outline-warning"
            />
             <span className='text-danger ms-3'>{ loginForm.errors.password}</span>
           
          </div>
          <div className="d-flex justify-content-around align-items-center ">
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
          <button type="submit" className="btn btn-warning text- ">
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
          </a>
          <a
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

export default Login