import { NavLink } from "react-router-dom"

const ContentCardHeader = ({name, navigatePage, buttonName}) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold">{name}</h2>
      <NavLink to={navigatePage}>
        <button className="flex items-center justify-center gap-4 cursor-pointer">
          <div className="text-[14px] text-slate-700">{buttonName}</div>
          <div className="flex items-center justify-center">
            <img src="/public/images/icon-caret-right.svg" alt={name} />
          </div>
        </button>
      </NavLink>
    </div>
  )
}

export default ContentCardHeader