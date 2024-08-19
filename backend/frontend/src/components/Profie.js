import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";
import "./Profile.css";
import ProfilePic from "./ProfilePic";
import Navbar from './Navbar';

export default function Profie() {
  var picLink = "https://i.pinimg.com/564x/19/e4/45/19e445d6c4f68fd21cb3509652da1bb4.jpg"
  const [pic, setPic] = useState([]);
  const [show, setShow] = useState(false)
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("")
  const [changePic, setChangePic] = useState(false)


  const toggleDetails = (posts) => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
      setPosts(posts);
    }
  };

  const changeprofile = () => {
    if (changePic) {
      setChangePic(false)
    } else {
      setChangePic(true)
    }
  }


  useEffect(() => {
    fetch(`/user/${JSON.parse(localStorage.getItem("user"))._id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setPic(result.post);
        setUser(result.user)
        console.log(pic);
      });
  }, []);

  return (
    <div>
      <Navbar />
    <div className="profile-main">
        <div className="imgholder">
          <div className="profile">
            <img onClick={changeprofile}
            src={user.Photo ? user.Photo : picLink}
            alt="" />
          </div>
        </div>
        <div className="name-section">
        {JSON.parse(localStorage.getItem("user")).userName}
          <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073005/setting_sdgxf0.png" alt=""/>
          <button>View archive</button>
          <button>Edit profile</button>
        </div>
        <div className="pff">
          <div>
            <p>{pic ? pic.length : "0"}posts</p>
          </div>
          <div>
            <p>{user.followers ? user.followers.length : "0"}followers</p>
          </div>
          <div>
            <p>{user.following ? user.following.length : "0"}following</p>
          </div>
        </div>
        <div className="bio">
          <p>{JSON.parse(localStorage.getItem("user")).name}</p>
          <div>
            <p style={{ marginTop: -4, fontSize: 14 }}>I’m a web developer 👨‍💻<br />
              & a UI/UX designer 👨‍🎨</p>
          </div>

          {show &&
        <PostDetail item={posts} toggleDetails={toggleDetails} />
      }
      {
        changePic &&
        <ProfilePic changeprofile={changeprofile} />
      }
  
        </div>
        <div className="highlight-section">
          <div className="highlights">
            <div className="highlight">
              <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073005/plusicon_mvfi1b.png" alt="" />
              <p>New</p>
            </div>
          </div>
        </div>
        <div className="tablist">
          <div className="posts">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073005/post_ewnzo0.png" alt=''/>
            <p>POSTS</p>
          </div>
          <div className="saved">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073005/saved_zg3wqf.png" alt=''/>
            <p>SAVED</p>
          </div>
          <div className="tag">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1724073005/tag_f8kq5p.png" alt=''/>
            <p>TAGGED</p>
          </div>
        </div>
        <div className="post-section">
           {/* Gallery */}
      <div className="gallery">
        {pic.map((pics) => {
          return <img key={pics._id} src={pics.photo}
            onClick={() => {
              toggleDetails(pics)
            }}
            className="item"></img>;
        })}
      </div>
      
        </div>
        <div className="contactinfo">
          <div className="contact">

            <div>
              <a href="https://about.instagram.com/">Jobs</a>
              <a href="https://about.instagram.com/">About</a>
              <a href="https://about.instagram.com/">Terms</a>
              <a href="https://about.instagram.com/">Meta</a>
              <a href="https://about.instagram.com/">Hashtags</a>
              <a href="https://about.instagram.com/">Locations</a>
              <a href="https://about.instagram.com/">Blogs</a>
              <a href="https://about.instagram.com/">Privacy</a>
              <a href="https://about.instagram.com/">Help</a>
              <a href="https://about.instagram.com/">API</a>
              <a href="https://about.instagram.com/">Threads</a>
              <a href="https://about.instagram.com/">Instagram Lite</a>
              <a href="https://about.instagram.com/">Meta Verified</a>
              <a href="https://about.instagram.com/">Contact Uploading & Non-Users</a>
            </div>
            <select>
              <option value="en">English</option>
              <option value="af">Afrikaans</option>
              <option value="da">Dansk</option>
              <option value="de">Deutsch</option>
              <option value="el">Ελληνικά</option>
              <option value="en-gb">English (UK)</option>
              <option value="es">Español (España)</option>
              <option value="es-la">Español</option>
              <option value="fi">Suomi</option>
              <option value="es-la">Español</option>
              <option value="fi">Suomi</option>
              <option value="fr">Français</option>
              <option value="id">Bahasa Indonesia</option>
              <option value="it">Italiano</option>
              <option value="ja">日本語</option>
              <option value="ko">한국어</option>
              <option value="ms">Bahasa Melayu</option>
              <option value="nb">Norsk</option>
              <option value="nl">Nederlands</option>
              <option value="pl">Polski</option>
              <option value="pt-br">Português (Brasil)</option>
              <option value="pt">Português (Portugal)</option>
              <option value="ru">Русский</option>
              <option value="sv">Svenska</option>
              <option value="th">ภาษาไทย</option>
              <option value="tl">Filipino</option>
              <option value="tr">Türkçe</option>
              <option value="zh-cn">中文(简体)</option>
              <option value="zh-tw">中文(台灣)</option>
              <option value="bn">বাংলা</option>
              <option value="gu">ગુજરાતી</option>
              <option value="hi">हिन्दी</option>
              <option value="hr">Hrvatski</option>
              <option value="hu">Magyar</option>
              <option value="kn">ಕನ್ನಡ</option>
              <option value="ml">മലയാളം</option>
              <option value="mr">मराठी</option>
              <option value="ne">नेपाली</option>
              <option value="fr-ca">Français (Canada)</option>
              <option value="uk">Українська</option>
            </select>
            <p>© 2024 Instagram from Meta</p>

          </div>

        </div>
      </div>
    </div>
  );
}
