import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ManagePodcast = () => {

  const [podcastList, setPodcastList] = useState([]);

  const fetchPodcastData = async () => {
    const res = await fetch("http://localhost:5000/publish/getall");
    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setPodcastList(data);
  }
  useEffect(() => {
    fetchPodcastData();

  }, [])

  const deletepodcast = async (id) => {
    console.log(id);

    const res = await fetch("http://localhost:5000/publish/delete/" + id, {
      method: "DELETE",
    });
    console.log(res.status);
    if (res.status === 200) {
      enqueueSnackbar('Podcast Deleted Successfully', { variant: 'success' });
      fetchPodcastData();
    
    }

  }

  const displayPodcastData = () => {
   
    return  <table className='table '>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>
          <th>Description</th>
          
          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
            podcastList.map( ( pod ) => {
              return <tr>
                <td><img src={"http://localhost:5000/" + pod.image} alt="" height={40} /></td>
                <td>{pod.title}</td>
                <td>{pod.category}</td>
                <td>{pod.description}</td>
              
                <td>
                  <Link to={`/artist/update/${pod._id}`} className='btn btn-primary'>Edit</Link>
                </td>
                <td>
                  <button className='btn btn-danger' onClick={ e => deletepodcast(pod._id) } >Delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    }

  return (
    <div>
     <div className='container'>
        <h1 className='text-center fw-bold text-danger mt-4' style={{ fontFamily: "initial" }}>Manage Podcast</h1>
        {displayPodcastData()}
      </div>
    </div>
  )
}

export default ManagePodcast