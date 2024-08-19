import React, { useState, useEffect, useRef } from "react";
import "./Createpost.css";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';


export default function Createpost() {
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [step, setStep] = useState(1); // Step state to manage the steps
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  useEffect(() => {
    // Saving post to MongoDB
    if (url) {
      fetch("/createPost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          body,
          pic: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            notifyA(data.error);
          } else {
            notifyB("Successfully Posted");
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [url]);

  // Posting image to Cloudinary
  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "Instagram-clone");
    data.append("cloud_name", "kanishkkcloud18");
    fetch("https://api.cloudinary.com/v1_1/kanishkkcloud18/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.log(err));
  };

  const loadfile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // Free memory
    };
  };

  const handleFileSelect = (event) => {
    loadfile(event);
    setImage(event.target.files[0]);
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2); // Move to the caption step
    } else {
      postDetails(); // Call postDetails if on the final step
    }
  };

  const handleClose = () => {
    navigate("/"); // Navigate to the home page or any other desired route
  };

  return (
    <div>
      <Navbar />
      <div className="create">
        <div className="close" onClick={handleClose}>
          <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073002/close_nrpcq9.png" alt="" />
        </div>
        <div className="createPost">
          {/* Header */}
          <div className="post-header">
            <p>Create New Post</p>
            <button id="post-btn" onClick={handleNext}>
              {step === 1 ? "Next" : "Share"}
            </button>
          </div>
          {step === 1 ? (
            <div className="main-div">
              {/* Image preview */}
              <img
                id="output"
                src= "https://i.pinimg.com/564x/9c/72/08/9c720864ef843df60c021cee826bfcd9.jpg"  alt="img"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
             />
              {!image && (
                <>
                  <p>Drag photos and videos here</p>
                  <button className="file-btn" onClick={() => fileInputRef.current.click()}>
                    Select from computer
                  </button>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />
            </div>
          ) : (
            <div className="details">
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                type="text"
                placeholder="Write a caption...."
              ></textarea>
            </div>
            )}
            </div>
          </div>
        </div>
      );
    }