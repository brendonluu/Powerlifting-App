import './NavBar.css'
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import logo from "./../assets/tempLogo.png"
import User from "./navbar_components/User"

function NavBar() {
   const { loggedIn } = useAuth();

   return (
      <header className="header">
         <nav className="navContainer">
            <Link to='/' className="Logo">
               <img className="Logo" src={logo} alt="Name" />
            </Link>
            {
               loggedIn
                  ? <User />
                  :
                  <Link to="/signin">
                     <button className="signIn">
                        Sign In
                     </button>
                  </Link>
            }
         </nav>
      </header>

   )
}

export default NavBar