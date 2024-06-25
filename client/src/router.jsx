import {createBrowserRouter} from 'react-router-dom'
import App from './App'

export const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/test", element: <div>Test</div>},
  {path: "/profile", element: <div>Profile</div>},
  {path: "/login", element: <div>Log In</div>}
])
