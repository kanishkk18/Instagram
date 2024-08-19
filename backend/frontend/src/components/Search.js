import React from 'react'
import "./Search.css";
import Navbar from './Navbar';

export default function Search() {
  return (
    <div>
      <Navbar />
        <div className="search">
            <p style={{fontSize:22, paddingLeft:10,fontWeight:600}}>Search</p>
            <div className="searchbox">
            <input type="text" placeholder="Search"/>
            </div>
            <hr/>
            <div className="recenttab">
                <p>Recent</p>
                <button style={{backgroundColor:"transparent", border:"none",color:"blue", float:"inline-end", position:"relative",marginTop:-33 }}>Clear all</button>
            </div>
            <div className="searches">
            
            </div>
        </div>

    </div>
  )
}

