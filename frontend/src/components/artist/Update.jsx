import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack';
import { Formik } from 'formik';
import toast from 'react-hot-toast';

const Update = () => {

    const {id} = useParams();
    const [updateValues , setUpdateValues] = useState(null);
    const[selImage, setselImage] = useState('');

    const navigate = useNavigate();

    const fetchPodcastData = async () => {
        const res = await fetch("http://localhost:5000/publish/getbyid/"+id);
        console.log(res.status);
    
        const data = await res.json();
        console.log(data);
    
        setUpdateValues(data);
      }
      useEffect(() => {
        fetchPodcastData();
    
      }, [])

      const submitForm = async (values) => {
        console.log(values);
        values.image = selImage.name;
        const res = await fetch('http://localhost:5000/publish/update/'+id, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log(res.status);
        if(res.status === 200){
          enqueueSnackbar('User Updated Successfully', { variant: 'success' });
          navigate('/artist/managepodcast');
        }
    };

    const uploadeImage = async (e) => {
      const file = e.target.files[0];
       setselImage(file);
      const fd = new FormData();
      fd.append("myfile", file);
      fetch("http://localhost:5000/util/uploadfile",{
          method: "POST",
          body: fd,
      }) .then((res) => {
      if(res.status === 200){
          console.log("file uploaded");
          toast.success('File Uploaded!!');
      }
      });
  
      
  }


      

  return (
    <div>
        <div className="container d-flex justify-content-center mt-5">

        {
          updateValues !== null ? ( <Formik initialValues={updateValues} onSubmit={submitForm}>
            {(PublishForm) => {
              
              return    <form className="form" onSubmit={PublishForm.handleSubmit} >
          <h1 className='text-center fw-bold text-danger' style={{ fontFamily: "cursive" }}>Update Podcast</h1>
          <hr style={{ color: "black", Size: "10px" }} />
          <div className="mb-2">
            <label htmlFor="" className='form-label fw-bold'>Tittle</label>
            <input type="text" className="form-control btn-outline-dark "
              id='title' value={PublishForm.values.title} onChange={PublishForm.handleChange} />
          </div>
          <div className="mb-2">
            <label htmlFor="" className='form-label fw-bold'>Category</label>
            <input type="text" className="form-control btn-outline-dark "
              id='category' value={PublishForm.values.category} onChange={PublishForm.handleChange} />
          </div>
          <div className="mb-2">
            <label htmlFor="" className='form-label fw-bold'>Description</label>
            <textarea type="text" className="form-control btn-outline-dark h-75" placeholder='Comment...'
             id='description' value={PublishForm.values.description} onChange={PublishForm.handleChange}/>
          </div>
          <div className="mb-2">
            <label htmlFor="uploade-image" className="form-label fw-bold">Add Image</label>
            <input type="file" id='uploade-image' className='form-control btn-outline-dark' onChange={uploadeImage} />
          </div>
         
          <div className="text-center mt-5">
            <button className='btn btn-danger' type='submit'>Update</button>
          </div>
        </form>
        }}
        </Formik>): <h2 className='text-center'>Loading....</h2>

      }

      </div>
    </div>
  )
}

export default Update