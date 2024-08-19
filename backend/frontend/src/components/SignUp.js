import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


export default function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  // Toast functions
  const notifyA = (msg) => toast.error(msg)
  const notifyB = (msg) => toast.success(msg)

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

  const postData = () => {
    //checking email
    if (!emailRegex.test(email)) {
      notifyA("Invalid email")
      return
    } else if (!passRegex.test(password)) {
      notifyA("Password must contain at least 8 characters, including at least 1 number and 1 includes both lower and uppercase letters and special characters for example #,?,!")
      return
    }

    // Sending data to server
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        userName: userName,
        email: email,
        password: password

      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          notifyA(data.error)
        } else {
          notifyB(data.message)
          navigate("/signin")
        }
        console.log(data)
      })
  }

  return (
    
        <div className="SignUp">
        <div className="form-container">
            <div className="form">
            <img className="SignUpLogo" src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073002/logo2_wxjkwd.png" alt=""/>

            <p className="loginPara">Sign up to see photos and videos from your friends.</p>

            <button className="loginwithfb" type="submit" > Log in with Facebook</button>

            <div className="separation">
            <div className="line"></div>
            <div className="or">OR</div>
            <div className="line1"></div>
            </div>
            
            <div>
                <input type="email" value={email} placeholder="Email" Name="Email" id="email" onChange={(e) =>
                    {setEmail(e.target.value)}}
                />
            </div>
            <div>
                <input  type="text" placeholder="Full Name" Name="Full Name" id="Fullname" value={name}
                onChange={(e) => { setName(e.target.value)}}
                />
            </div>
            <div>
                <input type="text" placeholder="Username" Name="Username" id="Username" value={userName}
                onChange={(e) =>{ setUserName(e.target.value)}}
                />
            </div>
            <div>
                <input type="password" placeholder="password" 
                value={password} onChange={(e) => {setPassword(e.target.value)}}
                />
            </div>
            <p className="Para">
                People who use our service may have uploaded your contact information to Instagram.Learn More
                </p>

                <p className="Para">
                By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
                </p>
                <button type="submit" id="submit-btn" onClick={()=>{postData()}}>Sign up</button>
                </div>

                <div className="form2">
                    <p className="Para2">Have an account? <Link to="/Signin">Log in</Link></p>

                </div>
                
        </div>
    </div>
  );
}
