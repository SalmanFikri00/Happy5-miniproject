import logo from "../assets/Logo-Square.svg"
const Sidebar = () => {
  return (
    <aside className=" bg-list h-screen p-5">
        <img src={logo} alt="logo" width={28} className="w-[28px] max-w-none" />
    </aside>
  )
}

export default Sidebar
