import { useState, useEffect } from 'react'
import './Menu.css'

function Menu() {
  const [menuState, setMenuState] = useState(true)

  const changeMenuState = () => {
    setMenuState(current => !current)
  }

  useEffect(() => {
    console.log(menuState)
  }, [menuState])

  return (
    <>
      {menuState
        ?
        <div className="menu">
          <div className='menu-close-button-wrapper'>
            <button className='menu-close-button' onClick={changeMenuState}>
              ✕
            </button>
          </div>
        </div>
        :
        <div className="menu-open-button-wrapper">
          <button className="menu-open-button" type="button" onClick={changeMenuState}>☰</button>
        </div>
      }
    </>
  )
}

export default Menu
