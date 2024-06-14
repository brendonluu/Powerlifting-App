import { NavLink } from "react-router-dom"
import logo from "./../assets/tempLogo.png"
import './NavBar.css'
import User from "./navbar_components/User"
import { useState } from "react"

function NavBar() {
   const [loggedIn, setLoggedIn] = useState(false)

   const logIn = () => {
      setLoggedIn(current => true)
   }
   return (
      <header className="header">
         <nav className="navContainer">
            <NavLink to='/' className="Logo">
               <img className="Logo" src={logo} alt="Name" />
            </NavLink>
            {
               loggedIn
                  ? <User />
                  : <button className="logIn" onClick={logIn}>Log In</button>
            }
         </nav>
      </header>

   )
}

export default NavBar