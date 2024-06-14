import './User.css'
import { useEffect, useState } from 'react'
import UserDropdown from './UserDropdown'
import pfp from './../../assets/Default_pfp.svg'

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