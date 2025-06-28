import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"

const PageLayout = () => {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-12 gap-6 min-h-[100vh]" id="finance-app">
      <SideBar />
      <Outlet />
    </div>
  )
}

export default PageLayout