import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"

const PageLayout = () => {
  return (
    <div id="finance-app">
        <>
          <SideBar/>
          <Outlet/>
        </>
    </div>
  )
}

export default PageLayout