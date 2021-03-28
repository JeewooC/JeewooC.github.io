import React from 'react'
import "./style.css"
export default function Post({ profileUrl,id, username, caption, comments, user,photoUrl }) {
    
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerLeft">
                    
        <img className = "post__headerprofilePic" src={profileUrl}></img>
        </div>
        <p style={{marginRight:"450px"}}>{username} </p>
        
        <button className="post__delete"> Delete</button>
        </div>
        <div className="post__center">
            <img className="post__photoUrl" src={photoUrl}/>
        </div>
        <div>
            <p><span style={{fontWeight:"500", marginRight: "4px"}}>{username}</span>{caption}</p>
        </div>
    </div>
       
    )
}
