import { NavLink } from "react-router-dom"
import logo from "./../assets/tempLogo.png"
import pfp from "./../assets/Default_pfp.svg"
import './NavBar.css'
import User from "./navbar_components/User"

function NavBar() {
   return (
      <header className="header">
         <nav className="navContainer">
            <NavLink to='/' className="Logo">
               <img className="Logo" src={logo} alt="Name" />
            </NavLink>
            <User />
         </nav>
      </header>

   )
}

export default NavBar