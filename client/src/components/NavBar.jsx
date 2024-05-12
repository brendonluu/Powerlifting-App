import { NavLink } from "react-router-dom"
import logo from "./../assets/tempLogo.png"
import './NavBar.css'

function NavBar() {
   return (
      <header className="header">
         <nav className="navContainer">
            <NavLink to='/' className="Logo">
               <img className="Logo" src={logo} alt="Name" />
            </NavLink>
         </nav>
      </header>
      
   )
}

export default NavBar