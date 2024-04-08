import Link from "next/link"

const TopMenu = () => {
  return (
    <nav className="flex h-32 justify-between items-start w-full fixed top-0 left-0">

      <div className="w-20 bg-red-500 flex h-10 ">

      </div>
      {/* BANDERA */}
      <Link href="/" className="bg-white h-20 w-20 text-black flex justify-center items-end pb-3">
        <span className="font-bold">Kehuel</span>
      </Link>

      {/* MENU */}
      <div className="flex justify-end w-full bg-red-500 h-10">
        <div className="w-3/4 hidden sm:block">
          <div className="flex justify-start items-center h-10 p-5">
            <Link className="hover:bg-gray-600 h-10 w-24 flex items-center justify-center" href={"/"}>Tickets</Link>
            <Link className="hover:bg-gray-600 h-10 w-36 flex items-center justify-center" href={"/"}>Reserve su vuelo</Link>
            <Link className="hover:bg-gray-600 h-10 w-28 flex items-center justify-center" href={"/"}>Check-In</Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/4">
          <Link className="hover:bg-gray-600 h-10 w-40 flex items-center justify-center" href={"/"}>Ingreso/Registro</Link>
        </div>
      </div>
    </nav>
  )
}

export default TopMenu
