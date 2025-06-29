import { NavLink } from "react-router-dom"
import SideBarButton from "./UI/SideBarButton"

const SideBar = () => {

  const navLinkClass = ({ isActive }) => isActive ? "bg-white lg:pl-5 flex items-center justify-center lg:justify-start text-black font-semibold py-2 lg:rounded-tr-xl lg:rounded-br-xl rounded-sm p-2" : "flex items-center justify-center lg:justify-start lg:pl-2 p-2 py-2 text-[color:var(--color-grey-300)] hover:bg-[#3f3f3f8b] hover:lg:rounded-tr-xl hover:lg:rounded-br-xl rounded-sm";

  return (
    <nav className="bg-[var(--color-grey-900)] lg:h-full sm:h-[100px] lg:col-span-1 lg:row-start-1 rounded-tl-sm rounded-tr-sm lg:rounded-tr-2xl lg:rounded-br-2xl" id="sidebar">
      <div className="lg:pr-8">
        <div className="lg:flex items-center justify-center pt-10 pb-8 hidden  " id="sidebar-logo">
          <img src="/public/images/logo-large.svg" alt="web logo" />
        </div>
        <div className="lg:flex lg:flex-col lg:gap-6 gap-4 justify-between grid grid-cols-5 lg:pt-8 py-2" id="navigation-buttons">

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