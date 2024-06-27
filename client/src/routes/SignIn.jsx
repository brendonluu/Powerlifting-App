import './SignIn.css'
import React from 'react'

function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="SignInContainer">
        <span className="SignInTitle">Sign In</span>
        <form className='LogInForm' action={console.log("submit")} method='POST'>
          <input className='LogInField' name="username" type='text' placeholder='User'/>
          <input className='LogInField' name="password" type='password' placeholder='Password'/>
          <button className="SignInButton" type='button'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn