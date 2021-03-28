import React from 'react'
import "./style.css"
import { CreatePost, Navbar } from '../../containers'
import { CommentInput } from '../../components'

export default function Home() {
    return (
        <div className="home">
           <Navbar />
           <CreatePost />
           <CommentInput />
         </div>
    )
}
