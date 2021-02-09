import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import { performLogin, preformLogout, validateToken } from '../commhelpers/SessionHelpers'


export default function Login({ setUser, user }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState("")
    const history = useHistory();

    const onLoginSuccess = (token) => {
        const { username, exp } = jwt_decode(token)
        const tokenDate = exp * 1000
        const currentTime = new Date().getTime()
        const ms = tokenDate - currentTime
        setUser({ isLoggedIn: true, username })
        localStorage.token = token
        history.push("/homepage")
        //Actively loggin out user as token expires
        setTimeout(() => {
            preformLogout(username, onLogoutSuccess)
        }, ms)
    }
    const onLogoutSuccess = () => {
        localStorage.removeItem('token')
        setUser({ isLoggedIn: false })
    }
    const handleSubmit = (e) => {
        const onLoginFail = (data) => {
            setErrorMsg(data.msg)
        }
        performLogin(e, onLoginSuccess, onLoginFail, { username, password })
    }
    useEffect(() => {
        if (!user.isLoggedIn && localStorage.token) {
            validateToken(onLoginSuccess)
        }
    },[])

    return (
        <div className="form_container" >
            <h1>{user.username}</h1>
            <form onSubmit={handleSubmit} className="form">
                <label className={errorMsg ? 'error form_error' : ''}>
                    Username:
                <input type="text" name="Username" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                </label>
                <label className={errorMsg ? 'error form_error' : ''}>
                    Password:
                <input type="password" name="Password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div className={errorMsg ? 'error form_error' : ''}>{errorMsg}</div>
                <input disabled={username.length === 0 || password.length === 0} className="primary-btn btn" type="submit" value="Submit" />
            </form>
        </div>
    )
}
