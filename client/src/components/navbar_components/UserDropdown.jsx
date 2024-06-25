import './UserDropdown.css';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

function UserDropdown() {
  const { logOut } = useAuth();

  return (
    <ul className="UserDropdown">
      <li className='UserDropdownItem'>
        <Link to="/profile">
          My Profile
        </Link>
      </li>
      <li className='UserDropdownItem'>Settings</li>
      <li className='UserDropdownItem' onClick={logOut}>Sign Out</li>
    </ul>
  )
}

export default UserDropdown;
