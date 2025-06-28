const SideBarButton = ({name, image}) => {
  return (
    <button className="flex md:flex-row items-center justify-center md:gap-6 gap-4 border-none outline-none md:text-[18px] cursor-pointer">
        <img src={image} alt={name}/>
        <span>{name}</span>
    </button>
  )
}

export default SideBarButton