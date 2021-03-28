import React from 'react'
import "./style.css"
export default function Post({ profileUrl,id, username, caption, comments, user }) {
    
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerLeft">
                    
        <img className = "post__headerprofilePic" src={profileUrl}></img>
        </div>
        <p style={{marginLeft: "8px"}}>{username} </p>
        
        <button className="post__delete"> Delete</button>
        </div>
    </div>
       
    )
}
