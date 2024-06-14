import { useEffect, useState } from 'react'
import pfp from './../../assets/Default_pfp.svg'
import './User.css'
import UserDropdown from './UserDropdown'

function User() {
  const [menuState, setMenuState] = useState(false)

  const changeMenuState = () => {
    setMenuState(current => !current)
  }

  useEffect(() => {
    console.log(menuState)
  }, [menuState])

  return (
    <>
      <img className="profilePicture" src={pfp} alt="User" onClick={changeMenuState} />
      {
        menuState
          ? <UserDropdown />
          : <></>
      }
    </>
  )
}

export default User