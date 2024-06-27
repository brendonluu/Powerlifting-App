import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import SignIn from './routes/SignIn'

export const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/test", element: <div>Test</div>},
  {path: "/profile", element: <div>Profile</div>},
  {path: "/signin", element: <SignIn/>}
])
