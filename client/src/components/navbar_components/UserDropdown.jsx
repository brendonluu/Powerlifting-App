import './UserDropdown.css';
import { useAuth } from '../../contexts/AuthContext';

function UserDropdown() {
  const { logOut } = useAuth();

  return (
    <ul className="UserDropdown">
      <li className='UserDropdownItem'>My Profile</li>
      <li className='UserDropdownItem'>Settings</li>
      <li className='UserDropdownItem' onClick={logOut}>Sign Out</li>
    </ul>
  )
}

export default UserDropdown;
