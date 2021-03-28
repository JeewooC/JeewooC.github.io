import React from 'react'
import "./style.css"
import { SignInBtn } from '../../components'

export default function index() {
    return (
        <div className="navbar">
            <div className="titleBox">
                <img src="https://svgur.com/i/VVY.svg" alt="logo" height="50" />
                <p className="title">Viridi</p>
            </div>
            

           <SignInBtn />
        </div>
    )
}
