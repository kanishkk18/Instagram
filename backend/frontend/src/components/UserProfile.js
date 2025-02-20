import React, { useEffect, useState } from "react";
import "./Userprofile.css";
import { useParams } from "react-router-dom";
import Navbar from './Navbar';


export default function UserProfie() {
  var picLink = "https://i.pinimg.com/564x/19/e4/45/19e445d6c4f68fd21cb3509652da1bb4.jpg";
  const { userid } = useParams();
  const [isFollow, setIsFollow] = useState(false);
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  // to follow user
  const followUser = (userId) => {
    fetch("/follow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        followId: userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsFollow(true);
      });
  };

  // to unfollow user
  const unfollowUser = (userId) => {
    fetch("/unfollow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        followId: userId,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
        setIsFollow(false);
      });
  };

  useEffect(() => {
    fetch(`/user/${userid}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result.user);
        setPosts(result.post);
        if (
          result.user.followers.includes(
            JSON.parse(localStorage.getItem("user"))._id
          )
        ) {
          setIsFollow(true);
        }
      });
  }, [isFollow]);

  return (
    <div>
      <Navbar/>
    <div className="user-profile">
      {/* Profile frame */}
      <div className="user-profile-frame">
        {/* profile-pic */}
        <div className="user-profile-pic">
          <img src={user.Photo ? user.Photo : picLink} alt="" />
        </div>
        {/* profile-data */}
        <div className="user-profile-data">
          <div className="user-btn">
            <h1>{user.name}</h1>
            <button
              className="user-followBtn"
              onClick={() => {
                if (isFollow) {
                  unfollowUser(user._id);
                } else {
                  followUser(user._id);
                }
              }}
            >
              {isFollow ? "Unfollow" : "Follow"}
            </button>
           <button className="user-message-btn">Message</button>
          </div>
          <div className="user-profile-info" style={{ display: "flex" }}>
            <p>{posts.length} posts</p>
            <p>{user.followers ? user.followers.length : "0"} followers</p>
            <p>{user.following ? user.following.length : "0"} following</p>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          opacity: "0.8",
          margin: "25px auto",
        }}
      />
      {/* Gallery */}
      <div className="user-gallery">
        {posts.map((pics) => {
          return (
            <img
              key={pics._id}
              src={pics.photo}
              // onClick={() => {
              //     toggleDetails(pics)
              // }}
              className="item"
            ></img>
          );
        })}
      </div>
      {/* {show &&
        <PostDetail item={posts} toggleDetails={toggleDetails} />
      } */}
    </div>
    </div>
  );
}
