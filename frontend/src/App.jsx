import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/main/Home";
import Signup from "./components/main/Signup";
import Login from "./components/main/Login";
import ArtistLogin from "./components/main/ArtistLogin";
import { SnackbarProvider } from "notistack";
import ArtistSignup from "./components/main/ArtistSignup";
import Main from "./components/main";
import Artist from "./components/artist";
import Profile from "./components/artist/Profile";
import ManagePodcast from "./components/artist/ManagePodcast";
import PublishPage from "./components/artist/PublishPage";
import BrowsePodcast from "./components/main/BrowsePodcast";
import Podcastcategory from "./components/main/Podcastcategory";
import Update from "./components/artist/Update";


const App = () => {
  return (

    <BrowserRouter>

      <SnackbarProvider>
        <Routes>
          <Route path="/" element={<Navigate to={"/main/home"} />} />

          <Route path="main" element={<Main />}>
            <Route path="home" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="artistlogin" element={<ArtistLogin />} />
            <Route path="artistsignup" element={<ArtistSignup />} />
            <Route path="browsepodcast" element={<BrowsePodcast />} />
            <Route path="browsebycategory/:category" element={<Podcastcategory />} />
            
          </Route>

          <Route path="Artist" element={<Artist/>}>
           <Route path="profile" element={<Profile/>}/>
           <Route path="managepodcast" element={<ManagePodcast/>}/>
           <Route path="publish" element={<PublishPage/>}/>
           
           <Route path="update/:id" element={<Update/>}/>
          </Route>


        </Routes>
      </SnackbarProvider>

    </BrowserRouter>


  )
}


export default App;