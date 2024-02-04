import React, { useEffect, useState } from 'react'

const BrowsePodcast = () => {

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

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        podcastList.map((pod) => {
                            return <div className="col-3 ">

                                <div className="card h-100 mt-4">
                                    <img src={"http://localhost:5000/" + pod.image} alt="" className='card-img-top' style={{ height: "10rem" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{pod.title}</h5>
                                        <h3 className="card-title">{pod.category}</h3>
                                        <p className="card-text">{pod.description}</p>

                                    </div>
                                    <div className="card-footer">
                                        <div>
                                            <button className='btn btn-warning'><i className="fa-solid fa-play fs-6"></i></button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BrowsePodcast