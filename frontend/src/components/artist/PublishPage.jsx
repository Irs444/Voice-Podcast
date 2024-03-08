import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import {toast} from "react-hot-toast";
 



const PublishPage = () => {

  const[selImage, setselImage] = useState('');

  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder
  } = useAudioRecorder();

  useEffect(() => {
    if (!recordingBlob) return;
    

    // recordingBlob will be present at this point after 'stopRecording' has been called
  }, [recordingBlob])


  const recorderControls = useAudioRecorder()
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
         
    
   
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


  const PublishForm = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: "",
      category: ""
    },
    onSubmit: async (values) => {
      values.image = selImage.name;
      console.log(values);

      const res = await fetch("http://localhost:5000/publish/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res.status);

      if (res.status === 200) {
        enqueueSnackbar("Publish Successfully", { varient: "success" });
      } else if (res.status === 400) {
        enqueueSnackbar("Something went wrong", { varient: "danger" });
      } else {
        enqueueSnackbar("Something went wrong", { varient: "danger" });
      }
    },
  });

  return (

    <div className='ms-3 mt-3'>
     <div className="container d-flex justify-content-center mt-5">
        <form className="form" onSubmit={PublishForm.handleSubmit}>
          <h1 className='text-center fw-bold text-danger' style={{ fontFamily: "cursive" }}>Publish Podcast</h1>
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
              id='description' value={PublishForm.values.description} onChange={PublishForm.handleChange} />
          </div>
          <div className="mb-2">
            <label htmlFor="uploade-image" className="form-label fw-bold">Add Image</label>
            <input type="file" id='uploade-image' className='form-control btn-outline-dark' onChange={uploadeImage} />
          </div>
          <div className="mb-2">
            <AudioRecorder
              onRecordingComplete={(blob) => addAudioElement(blob)}
              recorderControls={recorderControls}
            />
            {/* <button type='submit' onClick={recorderControls.stopRecording} className='btn btn-danger mt-3'>Stop recording</button> */}
          </div>
          <div className="text-center mt-5">
            <button className='btn btn-danger' type='submit'>Add Podcast</button>
          </div>
        </form>

      </div>
    
    </div>
  )
}

export default PublishPage