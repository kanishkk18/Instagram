import React, { useState, useContext } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { LoginContext } from "../context/LoginContext";


export default function SignIn() {
  const { setUserLogin } = useContext(LoginContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Toast functions
  const notifyA = (msg) => toast.error(msg)
  const notifyB = (msg) => toast.success(msg)

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const postData = () => {
    //checking email
    if (!emailRegex.test(email)) {
      notifyA("Invalid email")
      return
    }
    // Sending data to server
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password

      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          notifyA(data.error)
        } else {
          notifyB("Signed In Successfully")
          console.log(data)
          localStorage.setItem("jwt", data.token)
          localStorage.setItem("user", JSON.stringify(data.user))

          setUserLogin(true)
          navigate("/")
        }
        console.log(data)
      })
  }

  return (
      <div className="signinbody">
      <div className="backgroundimg">
        <img className="image-background" src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png" alt="" />
        <div className="image-in" id="cf">
          <img className="bottom" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"alt="" />
          <img className="top" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" alt="" />
        </div>
      </div>

      <div className="signIn">
        <div className="loginform">
          <img className="signInLogo" src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/insta_logo_l8u693.png" alt="" />
          <div>
            <input type="email, Number, Username" placeholder="email" Name="email" value={email}  onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div>
            <input type="password" placeholder="password" Name="password" id="password"  value={password}
              onChange={(e) => { setPassword(e.target.value) }}/>
          </div>
          <a href="https://www.instagram.com/accounts/password/reset/?hl=en"style={{ color: "rgb(0,149,246)", fontSize: 10, marginLeft: 150 }} >Forgot password?</a>

          <button className="signInButton" onClick={() => { postData() }} value="Sign In">login</button>

          <div className="separation-login">
            <div className="line"></div>
            <div className="or">OR</div>
            <div className="line1"></div>
            </div>
            
          <button className="loginwithmeta"
          style={{color:"rgb(0,149,246)", fontWeight:"bolder"}} > <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073003/meta-logo-facebook-2-svgrepo-com_hokwwv.png" alt=""/>login with meta </button>

          <p style={{ color: "#fff", fontSize: 14, marginBottom:-30, marginLeft:25 }} > Don't have an account?
            <Link style={{ color: "rgb(0,149,246)", fontSize: 14 }} to="/Signup">Sign up</Link></p>
        </div>
      </div>
      <div className="getapp">
          <img style={{ marginTop: 20,height:120, position:"relative"}} src="" alt=""/>
          <img style={{ marginTop: 20, height:120, position:"relative" }} src="" alt=""/>
        </div>
    </div>
  );
}
