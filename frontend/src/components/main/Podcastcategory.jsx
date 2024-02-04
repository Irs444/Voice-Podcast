import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Podcastcategory = () => {

  const {category} = useParams();
  const [categoryList, setCategoryList] = useState([]);

  const fetchcategoryData = async () => {
    const res = await fetch("http://localhost:5000/publisg/getbycategory/" + category)
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setCategoryList(data);
  }

  useEffect(() => {
    fetchcategoryData();
  }, [])

  return (
    <div>
        <>
 
  <main className="my-5">
    <div className="container">
     
      <section className="text-center text-md-start">
        <h4 className="mb-5">
          <strong>PODCAST</strong>
        </h4>
       {
        categoryList.map((cat) =>{
        <div className="row">
          
          <div className="col-md-4 mb-4">
            <div
              className="bg-image hover-overlay shadow-1-strong rounded"
              data-mdb-ripple-init=""
              data-mdb-ripple-color="light"
            >
              <img
                src={"http://localhost:5000/" + cat.image}
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                />
              </a>
            </div>
          </div>
          <div className="col-md-8 mb-4">
            <h3>{cat.title}</h3>
            <h5>{cat.category}</h5>
            <p>
             {cat.description}
            </p>
            <button
              type="button"
              className="btn btn-primary"
              data-mdb-ripple-init=""
            >
              Read
            </button>
          </div>
          
        </div>
     }) }
      
      </section>
    
      <nav className="my-4" aria-label="...">
        <ul className="pagination pagination-circle justify-content-center">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">
              2 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </main>
  {/*Main layout*/}
  {/*Footer*/}
  <footer className="bg-light text-lg-start">
   
    <hr className="m-0" />
    <div className="text-center py-4 align-items-center fw-bold">
      <p>Follow on social media</p>
      <a
        href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
        className="btn btn-primary m-1"
        role="button"
        data-mdb-ripple-init=""
        rel="nofollow"
        target="_blank"
      >
        <i className="fab fa-youtube" />
      </a>
      <a
        href="https://www.facebook.com/mdbootstrap"
        className="btn btn-primary m-1"
        role="button"
        rel="nofollow"
        data-mdb-ripple-init=""
        target="_blank"
      >
        <i className="fab fa-facebook-f" />
      </a>
      <a
        href="https://twitter.com/MDBootstrap"
        className="btn btn-primary m-1"
        role="button"
        rel="nofollow"
        data-mdb-ripple-init=""
        target="_blank"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        href="https://github.com/mdbootstrap/mdb-ui-kit"
        className="btn btn-primary m-1"
        role="button"
        rel="nofollow"
        data-mdb-ripple-init=""
        target="_blank"
      >
        <i className="fab fa-github" />
      </a>
    </div>
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2020 Copyright:
      <a className="text-dark" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/*Footer*/}
</>

 
    </div>
  )
}

export default Podcastcategory