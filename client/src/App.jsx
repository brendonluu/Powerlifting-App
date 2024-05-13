import './App.css'
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <NavBar />
      <body className='App'>
        <Menu />
        <Dashboard />
      </body>
    </>
  )
}

export default App
