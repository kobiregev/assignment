import React, { useState } from 'react'
import { preformLogout } from '../commhelpers/SessionHelpers'


export default function NavBar({ user, setUser }) { 
    const handleLogOut = async () => {
        const cbSuccess = () => {
            localStorage.removeItem('token')
            setUser({ isLoggedIn: false })
        }
        preformLogout(user.username, cbSuccess)
    }
    return (
        <div className="navBar">
            <h3>{'Hello ' + user.username}</h3>
            <button onClick={handleLogOut} className='primary-btn btn'>Logout</button>
        </div>
    )
}
