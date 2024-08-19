import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

export default function Home() {
  var picLink = "https://i.pinimg.com/564x/19/e4/45/19e445d6c4f68fd21cb3509652da1bb4.jpg"
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([]);

  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("./signup");
    }

    // Fetching all posts
    fetch("/allposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => console.log(err));
  }, []);

  // to show and hide comments
  const toggleComment = (posts) => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
      setItem(posts);
    }
  };

  const likePost = (id) => {
    fetch("/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((posts) => {
          if (posts._id == result._id) {
            return result;
          } else {
            return posts;
          }
        });
        setData(newData);
        console.log(result);
      });
  };
  const unlikePost = (id) => {
    fetch("/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((posts) => {
          if (posts._id == result._id) {
            return result;
          } else {
            return posts;
          }
        });
        setData(newData);
        console.log(result);
      });
  };

  // function to make comment
  const makeComment = (text, id) => {
    fetch("/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        text: text,
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((posts) => {
          if (posts._id == result._id) {
            return result;
          } else {
            return posts;
          }
        });
        setData(newData);
        setComment("");
        notifyB("Comment posted");
        console.log(result);
      });
  };

  

  return (
    <div>
      <Navbar/>
    <div className="home">
      <div className='top-time'></div>
        <div className="story">
          <div className="story-image">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg" alt="story" />
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg" alt="story" />
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg" alt="story" />
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg" alt="story" />
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg" alt="story" />
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg" alt="story" />
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg" alt="story" />
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg" alt="story" />
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg" alt="story" />
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg" alt="story" />
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg"  alt="story" />
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg"  alt="story" />
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg" alt="story" />
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg" alt="story" />
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073004/krishna_kzaw7o.jpg" alt="story" />
            <div class="arrows">
              <button id="prev">&lt;</button>
              <button id="next">&gt;</button>
            </div>
          </div>
           </div>

           <div className="suggestions">
        <div className="suggest-content">
          <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073002/artist_uj0osc.jpg" alt="" />
          <p>Kanishkkb_18</p>
        </div>
        <p style={{ fontSize: 13, color: "#818181", textAlign: 'start', fontWeight: '600', marginTop: 20 }}>Suggested for you</p>
        <div className="suggest-content">
          < img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073002/artist_uj0osc.jpg" alt="" />
          <p>kanishkb_18</p>
          <button className="follow-btn">Follow</button>
        </div>
        <div className="suggest-content">
          < img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073002/artist_uj0osc.jpg" alt="" />
          <p>kanishkb_18</p>
          <button className="follow-btn">Follow</button>
        </div>
        <div className="suggest-content">
          < img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073002/artist_uj0osc.jpg" alt="" />
          <p>kanishkb_18</p>
          <button className="follow-btn">Follow</button>
        </div>
        <div className="suggest-content">
          < img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073002/artist_uj0osc.jpg" alt="" />
          <p>kanishkb_18</p>
          <button className="follow-btn">Follow</button>
        </div>
        <div className="suggest-content">
          < img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073002/artist_uj0osc.jpg" alt="" />
          <p>kanishkb_18</p>
          <button className="follow-btn">Follow</button>

        </div>

        <div>
          <div style={{ textAlign: 'start' }}>
            <a href="https://about.instagram.com/">About</a>.
            <a href="https://about.instagram.com/">Help</a>.
            <a href="https://about.instagram.com/">Press</a>.
            <a href="https://about.instagram.com/">API</a>.
            <a href="https://about.instagram.com/">Jobs</a>.
            <a href="https://about.instagram.com/">Privacy</a>.
            <a href="https://about.instagram.com/">Terms</a>.
            <br />
            <a href="https://about.instagram.com/">Locations</a>.
            <a href="https://about.instagram.com/">Language</a>.
            <a href="https://about.instagram.com/">Meta Verified</a>.
            <p className="mark" style={{color: "#CECECE"}}>© 2024 INSTAGRAM FROM META</p>
          </div>
        </div>
      </div>

      {/* card */}
      {data.map((posts) => {
        return (
          <div className="card">
            {/* card header */}
            <div className="card-header">
              <div className="card-pic">
                <img
                  src={posts.postedBy.Photo ? posts.postedBy.Photo : picLink}
                  alt=""
                />
              </div>
              <h5>
                <Link to={`/profile/${posts.postedBy._id}`}>
                  {posts.postedBy.name}
                </Link>
              </h5>
            </div>
            {/* card image */}
            <div className="card-image">
              <img src={posts.photo} alt="" />
            </div>

            {/* card content */}
            <div className="card-content">
              {posts.likes.includes(
                JSON.parse(localStorage.getItem("user"))._id
              ) ? (
                <span
                  className="material-symbols-outlined material-symbols-outlined-red"
                  onClick={() => {
                    unlikePost(posts._id);
                  }}
                >
                  favorite
                </span>
              ) : (
                <span
                  className="material-symbols-outlined"
                  onClick={() => {
                    likePost(posts._id);
                  }}
                >
                  favorite
                </span>
              )}

              <p>{posts.likes.length} Likes</p>
              <p>{posts.body} </p>
              <p
                style={{ fontWeight: "bold", cursor: "pointer" }}
                onClick={() => {
                  toggleComment(posts);
                }}
              >
                View all comments
              </p>
            </div>

            {/* add Comment */}
            <div className="add-comment">
              <span className="material-symbols-outlined">mood</span>
              <input
                type="text"
                placeholder="Add a comment"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
              <button
                className="comment"
                onClick={() => {
                  makeComment(comment, posts._id);
                }}
              >
                Post
              </button>
            </div>
          </div>
        );
      })}

      {/* show Comment */}
      {show && (
        <div className="showComment">
          <div className="container">
            <div className="postPic">
              <img src={item.photo} alt="" />
            </div>
            <div className="details">
              {/* card header */}
              <div
                className="card-header"
                style={{ borderBottom: "1px solid #00000029" }}
              >
                <div className="card-pic">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <h5>{item.postedBy.name}</h5>
              </div>

              {/* commentSection */}
              <div
                className="comment-section"
                style={{ borderBottom: "1px solid #00000029" }}
              >
                {item.comments.map((comment) => {
                  return (
                    <p className="comm">
                      <span
                        className="commenter"
                        style={{ fontWeight: "bolder" }}
                      >
                        {comment.postedBy.name}{" "}
                      </span>
                      <span className="commentText">{comment.comment}</span>
                    </p>
                  );
                })}
              </div>

              {/* card content */}
              <div className="card-content">
                <p>{item.likes.length} Likes</p>
                <p>{item.body}</p>
              </div>

              {/* add Comment */}
              <div className="add-comment">
                <span className="material-symbols-outlined">mood</span>
                <input
                  type="text"
                  placeholder="Add a comment"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
                <button
                  className="comment"
                  onClick={() => {
                    makeComment(comment, item._id);
                    toggleComment();
                  }}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <div
            className="close-comment"
            onClick={() => {
              toggleComment();
            }}
          >
            <span className="material-symbols-outlined material-symbols-outlined-comment">
              close
            </span>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
