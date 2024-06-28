import './App.css'
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <NavBar />
      <div className='App'>
        <Menu />
        <Dashboard />
      </div>
    </>
  )
}

export default App
