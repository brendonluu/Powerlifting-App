import './NavBar.css'
import { NavLink } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import logo from "./../assets/tempLogo.png"
import User from "./navbar_components/User"

function NavBar() {
   const { loggedIn, logIn } = useAuth();

   return (
      <header className="header">
         <nav className="navContainer">
            <NavLink to='/' className="Logo">
               <img className="Logo" src={logo} alt="Name" />
            </NavLink>
            {
               loggedIn
                  ? <User />
                  : <button className="logIn" onClick={logIn}>Sign In</button>
            }
         </nav>
      </header>

   )
}

export default NavBar