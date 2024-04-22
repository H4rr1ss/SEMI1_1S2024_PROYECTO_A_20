'use client'
import Link from "next/link"
import { useClientStore } from '@/store/store';
import './top-menu.css'

const TopMenu = () => {
  const clientStore = useClientStore();

  return (
    <nav className="flex h-14 justify-between items-start w-full fixed top-0 left-0 z-50">
      <div className="nav-p1-bg w-20 flex h-14 "></div>

      {/* BANDERA */}
      <Link href="/" className="tp-flag h-14 w-20 text-white flex justify-center items-end pb-4">
        <span className="font-bold">Kehuel</span>
      </Link>

      {/* MENU */}
      <div className="nav-p2-bg flex justify-end w-full h-14">
        <div className="w-3/4">
          <div className="flex justify-start items-center h-14 p-5">
            <Link className="item h-14 w-48 flex items-center justify-center" href={"/reserve-su-vuelo"}>Reserva tu vuelo</Link>
            <Link className="item h-14 w-24 flex items-center justify-center" href={"/tus-tickets"}>Tickets</Link>
            <Link className="item h-14 w-28 flex items-center justify-center" href={"/check-in"}>Check-In</Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/4">
          {clientStore.getStore_Name() === "" ? (
            <Link className="item h-14 w-52 flex items-center justify-center gap-1" href={"/login-register"}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-square-rounded" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
              </svg>
              Ingreso/Registro
            </Link>
          ) : (
            <div className="flex items-center justify-center w-full gap-5">
              <Link className="item h-14 w-auto flex items-center justify-center gap-1" href={"/ver-editar-perfil"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-square-rounded" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                  <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                  <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
                </svg>
                {clientStore.getStore_Name()}
              </Link>
              <Link className="item flex justify-center items-center h-14 w-32 gap-3" href={"/"} onClick={() => {clientStore.clearStore_Client()}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout-2" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                  <path d="M15 12h-12l3 -3" />
                  <path d="M6 15l-3 -3" />
                </svg>
                Cerrar Sesión
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default TopMenu
