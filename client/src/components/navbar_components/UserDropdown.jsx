import './UserDropdown.css'

import React from 'react'

function UserDropdown() {
  return (
    <ul className="UserDropdown">
      <li className='UserDropdownItem'>My Profile</li>
      <li className='UserDropdownItem'>Settings</li>
      <li className='UserDropdownItem'>Log Out</li>
    </ul>
  )
}

export default UserDropdown