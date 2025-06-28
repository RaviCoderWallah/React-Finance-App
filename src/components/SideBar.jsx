import { NavLink } from "react-router-dom"
import SideBarButton from "./UI/SideBarButton"

const SideBar = () => {

  const navLinkClass = ({ isActive }) => isActive ? "bg-white md:pl-5 flex items-center justify-center md:justify-start text-black font-semibold py-2 md:rounded-tr-xl md:rounded-br-xl rounded-sm p-2" : "flex items-center justify-center md:justify-start  md:pl-2 p-2 py-2 text-[color:var(--color-grey-300)] hover:bg-[#3f3f3f8b] hover:md:rounded-tr-xl hover:md:rounded-br-xl rounded-sm";

  return (
    <nav className="bg-[var(--color-grey-900)] md:h-full sm:h-[100px]   md:col-span-1 row-start-1 rounded-tl-sm rounded-tr-sm md:rounded-tr-2xl md:rounded-br-2xl" id="sidebar">
      <div className="md:pr-8">
        <div className="md:flex items-center justify-center pt-10 pb-8 hidden  " id="sidebar-logo">
          <img src="/public/images/logo-large.svg" alt="web logo" />
        </div>
        <div className="md:flex md:flex-col md:gap-6 gap-4 justify-between grid grid-cols-5 md:pt-8 py-2" id="navigation-buttons">

          <NavLink to="/" className={navLinkClass}>
            <SideBarButton name="Overview" image="/public/images/icon-nav-overview.svg" />
          </NavLink>


          <NavLink to="/transactions" className={navLinkClass}>
            <SideBarButton name="Transactions" image="/public/images/icon-nav-transactions.svg" />
          </NavLink>

          <NavLink to="/budgets" className={navLinkClass}>
            <SideBarButton name="Budgets" image="/public/images/icon-nav-budgets.svg" />
          </NavLink>

          <NavLink to="/pots" className={navLinkClass}>
            <SideBarButton name="Pots" image="/public/images/icon-nav-pots.svg" />
          </NavLink>

          <NavLink to="/recurring" className={navLinkClass}>
            <SideBarButton name="Recurring Bills" image="/public/images/icon-nav-recurring-bills.svg" />
          </NavLink>

        </div>
      </div>
    </nav >
  )
}

export default SideBar