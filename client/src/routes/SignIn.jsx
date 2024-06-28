import { Link } from 'react-router-dom'
import './SignIn.css'
import React from 'react'

function SignIn() {
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
        <form className='signIn-form' action={console.log("submit")} method='POST'>
          <input className='signIn-text-input' name="username" type='text' placeholder='User' />
          <input className='signIn-text-input' name="password" type='password' placeholder='Password' />
          <button className="signIn-signIn-button" type='button'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn