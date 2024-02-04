import React from 'react'

const Home = () => {
    return (
        <div style={{ backgroundColor: "black" }}>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 ps-5">
                        <div className='mt-5' >
                            <h4 style={{ color: "yellow" }}>Welcome to</h4>
                        </div>
                        <div className='text-white '>
                            <h1 style={{ fontFamily: "initial", fontSize: "80px" }}>The Voice Vocal Podcast</h1>
                        </div>
                        <div className="text-white fw-bold mt-3">
                            <p>Weekly conversations with forward thinkers at the<br /> forefront of this $1.6 Trillion industry. </p>
                        </div>
                        <div className='mt-5'>
                            <button className=' btn py-3 px-5 fw-bold rounded-pill' style={{ backgroundColor: "yellow", color: "black" }}>ALL EPISODES</button>
                        </div>
                    </div>
                    <div className="col-6 mt-2 ">
                        <img src="https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_640.jpg" alt="" className='img-fluid rounded mx-auto d-block' />

                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 " style={{ backgroundColor: "#151515" }}>
                <div >
                    <button className='btn fw-bold rounded-pill  mt-5 ' style={{ backgroundColor: "yellow", color: "black", marginInlineStart: "140px" }}>Latest Episodes</button>
                </div>
                <div className="row mt-5 " >
                    <div className="col-4 d-flex justify-content-center ">

                        <div style={{ width: "50%", marginBottom: "50px" }} >
                            <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/site/107097/podcasts/M9C19twSTLOuQtw8XrxD_BAP-Cover-2021-01.jpg" alt="" className='img-fluid rounded' />
                        </div>
                    </div>
                    <div className="col-8 text-white ">
                        <div className='mt-3'>
                            <h3 style={{ fontFamily: "initial" }}>Empowering your Bussiness and Achivening your Goals </h3>
                        </div>
                        <div className='d-flex'>
                            <audio controls className='mt-3 ' style={{ marginInline: "9rem" }}>
                                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                            </audio>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container-fluid">
                <div className='text-center' style={{ marginTop: "80px" }}>
                    <h4 style={{ color: "yellow", fontWeight: "bold" }}>Start Listening Today</h4>
                    <h1 className='text-white' style={{ fontSize: "58px", fontFamily: "initial" }}>Previous Episodes</h1>
                </div>
                <div className="row text-white mt-4" style={{ paddingInline: "50px" }}>
                    <div className="col-4">
                        <div className="card" style={{ backgroundColor: "#151515", color: "white" }}>
                            <div className='d-flex justify-content-center mt-3'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5lFBBmrQNfhVmVQImTxcnbbHDpJ00edJlA&usqp=CAU" alt="" className='img-fluid rounded' />
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <p className='ms-2'><i className="fa-solid fa-calendar-days me-2"></i>December 19, 2023</p>
                                <p><i className="fa-solid fa-list"></i>115</p>

                            </div>
                            <div className='ms-4'>
                                <strong>Empowering your Business and<br /> Achieving your Goals with Brian<br /> Kaskavalciyan</strong>
                            </div>
                            <div className='mt-3 d-flex justify-content-center '>
                                <audio controls>
                                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                                </audio>
                            </div>
                              <div className='d-flex justify-content-end m-3 p-3'>
                              <i className="fa-solid fa-share-nodes me-3 fs-3"></i>
                              <i className="fa-solid fa-download fs-3"></i>
                              
                              </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ backgroundColor: "#151515", color: "white" }}>
                        <div className='d-flex justify-content-center mt-3'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5lFBBmrQNfhVmVQImTxcnbbHDpJ00edJlA&usqp=CAU" alt="" className='img-fluid rounded' />
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <p className='ms-2'><i className="fa-solid fa-calendar-days me-2"></i>December 19, 2023</p>
                                <p><i className="fa-solid fa-list"></i>115</p>

                            </div>
                            <div className='ms-4'>
                                <strong>Empowering your Business and<br /> Achieving your Goals with Brian<br /> Kaskavalciyan</strong>
                            </div>
                            <div className='mt-3 d-flex justify-content-center '>
                                <audio controls>
                                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                                </audio>
                            </div>
                            <div className='d-flex justify-content-end m-3 p-3'>
                              <i className="fa-solid fa-share-nodes me-3 fs-3"></i>
                              <i className="fa-solid fa-download fs-3"></i>
                              
                              </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ backgroundColor: "#151515", color: "white" }}>
                        <div className='d-flex justify-content-center mt-3'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5lFBBmrQNfhVmVQImTxcnbbHDpJ00edJlA&usqp=CAU" alt="" className='img-fluid rounded' />
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <p className='ms-2'><i className="fa-solid fa-calendar-days me-2"></i>December 19, 2023</p>
                                <p><i className="fa-solid fa-list"></i>115</p>

                            </div>
                            <div className='ms-4'>
                                <strong>Empowering your Business and<br /> Achieving your Goals with Brian<br /> Kaskavalciyan</strong>
                            </div>
                            <div className='mt-3 d-flex justify-content-center '>
                                <audio controls>
                                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                                </audio>
                            </div>
                            <div className='d-flex justify-content-end m-3 p-3'>
                              <i className="fa-solid fa-share-nodes me-3 fs-3"></i>
                              <i className="fa-solid fa-download fs-3"></i>
                              
                              </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
            <div className="row text-white mt-4" style={{ paddingInline: "50px" }}>
                    <div className="col-4">
                        <div className="card" style={{ backgroundColor: "#151515", color: "white" }}>
                            <div className='d-flex justify-content-center mt-3'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5lFBBmrQNfhVmVQImTxcnbbHDpJ00edJlA&usqp=CAU" alt="" className='img-fluid rounded' />
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <p className='ms-2'><i className="fa-solid fa-calendar-days me-2"></i>December 19, 2023</p>
                                <p><i className="fa-solid fa-list"></i>115</p>

                            </div>
                            <div className='ms-4'>
                                <strong>Empowering your Business and<br /> Achieving your Goals with Brian<br /> Kaskavalciyan</strong>
                            </div>
                            <div className='mt-3 d-flex justify-content-center '>
                                <audio controls>
                                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                                </audio>
                            </div>
                              <div className='d-flex justify-content-end m-3 p-3'>
                              <i className="fa-solid fa-share-nodes me-3 fs-3"></i>
                              <i className="fa-solid fa-download fs-3"></i>
                              
                              </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ backgroundColor: "#151515", color: "white" }}>
                        <div className='d-flex justify-content-center mt-3'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5lFBBmrQNfhVmVQImTxcnbbHDpJ00edJlA&usqp=CAU" alt="" className='img-fluid rounded' />
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <p className='ms-2'><i className="fa-solid fa-calendar-days me-2"></i>December 19, 2023</p>
                                <p><i className="fa-solid fa-list"></i>115</p>

                            </div>
                            <div className='ms-4'>
                                <strong>Empowering your Business and<br /> Achieving your Goals with Brian<br /> Kaskavalciyan</strong>
                            </div>
                            <div className='mt-3 d-flex justify-content-center '>
                                <audio controls>
                                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                                </audio>
                            </div>
                            <div className='d-flex justify-content-end m-3 p-3'>
                              <i className="fa-solid fa-share-nodes me-3 fs-3"></i>
                              <i className="fa-solid fa-download fs-3"></i>
                              
                              </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ backgroundColor: "#151515", color: "white" }}>
                        <div className='d-flex justify-content-center mt-3'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5lFBBmrQNfhVmVQImTxcnbbHDpJ00edJlA&usqp=CAU" alt="" className='img-fluid rounded' />
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <p className='ms-2'><i className="fa-solid fa-calendar-days me-2"></i>December 19, 2023</p>
                                <p><i className="fa-solid fa-list"></i>115</p>

                            </div>
                            <div className='ms-4'>
                                <strong>Empowering your Business and<br /> Achieving your Goals with Brian<br /> Kaskavalciyan</strong>
                            </div>
                            <div className='mt-3 d-flex justify-content-center '>
                                <audio controls>
                                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                                </audio>
                            </div>
                            <div className='d-flex justify-content-end m-3 p-3'>
                              <i className="fa-solid fa-share-nodes me-3 fs-3"></i>
                              <i className="fa-solid fa-download fs-3"></i>
                              
                              </div>
                        </div>
                    </div>
                </div> 
            </div>
             <div className="container-fluid" style={{backgroundColor:"#151515",marginTop:"80px", padding:"70px 0px"}}>
             <div className='text-center' >
                    <h4 style={{ color: "yellow", fontWeight: "bold" }}>We Love Your Reviews </h4>
                    <h1 className='text-white' style={{ fontSize: "58px", fontFamily: "initial" }}>What People Are Saying</h1>
                </div>
                <div className="row  mt-5 mx-5">
                    <div className="col-3">
                        <div>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        </div>
                        <div className='mt-3'>
                            <span className='text-white fw-bold'>Glad to see that this podcast addresses staying on top of market changes, trends and best practices from forward thinkers! Thanks for the continued great content!</span>
                        </div>
                    </div>
                    <div className="col-3">
                    <div>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        </div>
                        <div className="mt-3">
                            <span className='text-white fw-bold'>Great guests with fantastic and varied insight into the future of building and remodeling!</span>
                        </div>
                    </div>
                    <div className="col-3">
                    <div>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        </div>
                        <div className="mt-3">
                            <span className="text-white fw-bold">
                            Great listen on the way to the job site.
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                    <div>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        <i className="fa-solid fa-star fs-5" style={{color:"yellow"}}></i>
                        </div>
                        <div className="mt-3">
                            <span className="text-white fw-bold">
                            It's good to see a podcast dedicated to those who are serious about the future of construction. So far the guests have covered great topics including the subject of change, building science and safety, and new product development. Looking forward to future episodes and learning more about what’s to come in construction.
                            </span>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Home