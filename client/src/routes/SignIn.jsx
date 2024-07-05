import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'

function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignInClick = () => {
    console.log({
      "username": username,
      "password": password
    })
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="signIn-container">
        <div className='signIn-back-button-wrapper'>
          <Link to="/">
            <button className='signIn-back-button' type="button">
              ↼ Back
            </button>
          </Link>
        </div>
        <span className="signIn-title">Sign In</span>
        <form className='signIn-form'>
          <input
            className='signIn-text-input'
            name="username"
            type='text'
            placeholder='User'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='signIn-text-input'
            name="password"
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="signIn-signIn-button"
            type='button'
            onClick={handleSignInClick}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn