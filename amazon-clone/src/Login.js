import React, { useState } from 'react'
import { Link ,useHistory} from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('')
    
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        }).catch(error=>alert(error.message))

    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
                history.push('/')
            }
        }).catch(error=>alert(error.message))
        
    }

    return (
        <div className="login">
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className="login__logoIndia">
                    <img
                    alt=""  
                    className="login__logo"
                    src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo-700x394.png"
                    />
                    <span className="login__logoDotIn">
                        .in
                    </span>
                </div>
                
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    
                    <button type="submit" onClick={signIn }className='login__signInButton'>Sign In</button>

                </form>
                <p>
                    By continuing, you agree to AMAZON FAKE CLONE
                    <span style={{ color: "blue" }}> Conditions of Use </span> and
                    <span style={{color:"blue"}}> Privacy Notice</span>
                    .
                </p>
                <button onClick={register}
                    className="login__registerButton">Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
