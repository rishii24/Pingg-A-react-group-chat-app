import React, { useState } from 'react'
import axios from 'axios';
import loginimg from '../Images/team.jpg'
import '../App.css'

require('dotenv').config()

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': process.env.REACT_APP_PROJECT_ID,
            'User-Name': username,
            'User-Secret': password
        }

        try {
            //username | password => chatengine fetch messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            //if works-> logged in

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload();

        } catch (error) {
            // try again please
            setError('Oops, incorrect Username/Password')
        }
    }


    return (
        <div className="login-page">
            <div className="login-container">

                <div className="heading">
                    <h1>Welcome to Pingg`</h1>
                    <p>Create your own custom groups and start texting.</p>
                </div>


                <div className="login-modal">
                    <div className="login-img">
                        <img src={loginimg} alt="" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input"
                            placeholder="Username" required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input"
                            placeholder="Password" required />

                        <div align="center" >
                            <button type="submit" className="button">
                                <span>Login</span>
                            </button>
                        </div>

                        <h3 className="error">{error}</h3>
                    </form>
                </div>
            </div>
            <div className="footer">
                <p>	&#xA9;<b>Pingg`</b> 2021 | All rights reserved.  </p>
            </div>
        </div>
    )
}

export default LoginForm
