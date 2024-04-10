import Link from "next/link"
import './top-menu.css'

const TopMenu = () => {
  return (
    <nav className="flex h-14 justify-between items-start w-full fixed top-0 left-0 z-50">
      <div className="nav-p1-bg w-20 flex h-14 "></div>

      {/* BANDERA */}
      <Link href="/" className="tp-flag h-14 w-20 text-white flex justify-center items-end pb-4">
        <span className="font-bold">Kehuel</span>
      </Link>

      {/* MENU */}
      <div className="nav-p2-bg flex justify-end w-full h-14">
        <div className="w-3/4 hidden sm:block">
          <div className="flex justify-start items-center h-14 p-5">
          <Link className="item h-14 w-48 flex items-center justify-center" href={"/reserve-su-vuelo"}>Reserva tu vuelo</Link>
            <Link className="item h-14 w-24 flex items-center justify-center" href={"/tus-tickets"}>Tickets</Link>
            <Link className="item h-14 w-28 flex items-center justify-center" href={"/check-in"}>Check-In</Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/4">
          <Link className="item h-14 w-52 flex items-center justify-center gap-1" href={"/"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-square-rounded" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
            </svg>
            Ingreso/Registro
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default TopMenu
