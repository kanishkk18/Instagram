
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profie from "./components/Profie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Createpost from "./components/Createpost";
import { LoginContext } from "./context/LoginContext";
import Modal from "./components/Modal";
import UserProfie from "./components/UserProfile";
import MyfollowingPost from "./components/MyFollowingPost";
import More from './components/More';
import Reels from './components/Reels';
import Search from './components/Search';
import Explore from './components/Explore';

function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <LoginContext.Provider value={{ setUserLogin, setModalOpen }}>
         
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route exact path="/profile" element={<Profie />}></Route>
            <Route path="/createPost" element={<Createpost />}></Route>
            <Route path="/profile/:userid" element={<UserProfie />}></Route>
            <Route path="/Myfollowingpost" element={<MyfollowingPost/>}></Route>
            <Route path="/Explore" element={<Explore/>}></Route>
            <Route path="/More" element={<More/>}></Route>
            <Route path="/Reels" element={<Reels/>}></Route>
            <Route path="/Search" element={<Search/>}></Route>
          </Routes>
          <ToastContainer theme="dark"/>
          {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
        </LoginContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
