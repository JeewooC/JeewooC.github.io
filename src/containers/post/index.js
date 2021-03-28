import React, { useContext, useState } from 'react'
import { Comment } from '../../components'
import { UserContext } from '../../contexts/user'
import { db, storage } from '../../firebase'
import "./style.css"
export default function Post({ profileUrl,id, username, caption, comments, photoUrl }) {
    
    const [user, setUser] = useContext(UserContext).user;

    const deletePost = () =>{
        var imageref = storage.refFromUrl(photoUrl)

        imageref.delete().then(function(){
            console.log("delete successful")
        }).catch(function(error){
            console.log(`Error ${error}`)
        })
        db.collection("posts").doc(id).delete().then(function(){
            console.log("delete successful")
        }).catch(function(error){
            console.log(`Error post info delete ${error}`)

        })
    }
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerLeft">
                    <img className = "post__headerprofilePic" src={profileUrl}></img>
                </div>
                <p style={{marginRight:"450px"}}>{username} </p>
                {user && user.email.replace("@gmail.com", "") == username ?
                <button className="post__delete">Delete</button> :
                (<></>)}
            </div>
            <div className="post__center">
                <img className="post__photoUrl" src={photoUrl}/>
            </div>
            <div>
                <p><span style={{fontWeight:"500", marginRight: "4px"}}>{username}</span>{caption}</p>
            </div>
            {comments ? comments.map((comment) => 
            <Comment username={comment.username} caption ={comment.comment}/> ) : (
            <></>
            )}
        </div>
    )
}
