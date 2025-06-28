import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import SideBar from './components/SideBar'

function App() {
  return (
   <>
     <SideBar/>
     <Outlet/>
   </>
  )
}

export default App
