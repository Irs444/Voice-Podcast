import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Podcastcategory = () => {

  const {category} = useParams();
  const [categoryList, setCategoryList] = useState([]);

  const fetchcategoryData = async () => {
    const res = await fetch("http://localhost:5000/publish/getbycategory/horror");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
   if (category) {
    setCategoryList(data.filter((cate) => cate.category === category));
   }else {
    setCategoryList(data);
   }
  };

  useEffect(() => {
    fetchcategoryData();
  }, []);

  const displayCategoryData = () => {
    if (categoryList.length === 0) {
      return <h1>No Podcasts Found</h1>;
    }else {
    return  categoryList.map((cat) =>{
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
  }

  return (
    <div className=''>
    <header className='ls-head mt-3'>
      {/* <div className='container py-5'>
          <input type="text" placeholder='Search Items' className='form-control w-50 m-auto ps-search'  />
        </div> */}
    </header>
    <div className='container mb-5 '>
      <div className='row p-5'> {displayCategoryData()} </div>
    </div>
  </div>
  )
}

export default Podcastcategory