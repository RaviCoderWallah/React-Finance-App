import { NavLink } from "react-router-dom"
import SideBarButton from "./UI/SideBarButton"

const SideBar = () => {

  return (
    <nav className="bg-[var(--color-grey-900)] h-full md:col-span-1 row-start-1 rounded-tr-2xl rounded-br-2xl " id="sidebar">
      <div className="pr-8">
        <div className="flex items-center justify-center py-4" id="sidebar-logo">
          <h1 className="text-white text-3xl font-extrabold hidden md:block">finance</h1>
        </div>
        <div className="flex md:flex-col md:gap-6 gap-4 flex-row pt-8" id="navigation-buttons">

          <NavLink to="/" className={({ isActive }) => isActive ? "bg-white pl-5 text-black font-semibold py-2 rounded-tr-xl rounded-br-xl" : "pl-5 py-2 text-[color:var(--color-grey-300)] hover:bg-[#3f3f3f8b] hover:rounded-tr-xl hover:rounded-br-xl"}>
            <SideBarButton name="Overview" image="/public/images/icon-nav-overview.svg" />
          </NavLink>


          <NavLink to="/transactions" className={({ isActive }) => isActive ? "bg-white pl-5 text-black font-semibold py-2 rounded-tr-xl rounded-br-xl" : "pl-5 py-2 text-[color:var(--color-grey-300)] hover:bg-[#3f3f3f8b] hover:rounded-tr-xl hover:rounded-br-xl"}>
            <SideBarButton name="Transactions" image="/public/images/icon-nav-transactions.svg" />
          </NavLink>

          <NavLink to="/budgets" className={({ isActive }) => isActive ? "bg-white pl-5 text-black font-semibold py-2 rounded-tr-xl rounded-br-xl" : "pl-5 py-2 text-[color:var(--color-grey-300)] hover:bg-[#3f3f3f8b] hover:rounded-tr-xl hover:rounded-br-xl"}>
            <SideBarButton name="Budgets" image="/public/images/icon-nav-budgets.svg" />
          </NavLink>

          <NavLink to="/pots" className={({ isActive }) => isActive ? "bg-white pl-5 text-black font-semibold py-2 rounded-tr-xl rounded-br-xl" : "pl-5 py-2 text-[color:var(--color-grey-300)] hover:bg-[#3f3f3f8b] hover:rounded-tr-xl hover:rounded-br-xl"}>
            <SideBarButton name="Pots" image="/public/images/icon-nav-pots.svg" />
          </NavLink>

          <NavLink to="/recurring" className={({ isActive }) => isActive ? "bg-white pl-5 text-black font-semibold py-2 rounded-tr-xl rounded-br-xl" : "pl-5 py-2 text-[color:var(--color-grey-300)] hover:bg-[#3f3f3f8b] hover:rounded-tr-xl hover:rounded-br-xl"}>
            <SideBarButton name="Recurring Bills" image="/public/images/icon-nav-recurring-bills.svg" />
          </NavLink>

        </div>
      </div>
    </nav >
  )
}

export default SideBar