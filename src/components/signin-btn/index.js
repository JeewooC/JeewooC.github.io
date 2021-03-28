import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user';
import { signInWithGoogle } from '../../services/auth'
import "./style.css"

export default function SignInBtn() {
    const [user, setUser] = useContext(UserContext).user; 

    const signInBtnClick = async () => {
        let user = await signInWithGoogle();
        if (user) setUser(user);
        console.log(user)
    };

    return (
        <div className="signInBtn" onClick={signInBtnClick}>
            <p>Sign In With Google</p>
        </div>
    );
}