import React, { useContext, useState } from 'react'
import "./style.css"
import { SignInBtn } from '../../components'
import { UserContext } from '../../contexts/user';

export default function Navbar() {

    const [user, setUser] = useContext(UserContext).user;

    return (
        <div className="navbar">
            <div className="titleBox">
                <img src="https://svgur.com/i/VVY.svg" alt="logo" height="50" />
                <p className="title">Viridi</p>
            </div>
            

           {user ? (
               <div className="verticalCenter">
                    <img src={user.photoURL} className="profilePhoto"/> 
                </div>
           ) : <SignInBtn />}
        </div>
    )
}
