import { NavLink } from "react-router-dom"
import './NavBar.css'

function NavBar() {
   return (
      <header className="header">
         <nav className="navContainer">
            <NavLink to='/' className="Logo">
               <img className="Logo" src="./../assets/tempLogo.png" alt="Name" />
            </NavLink>
         </nav>
      </header>
      
   )
}

export default NavBar