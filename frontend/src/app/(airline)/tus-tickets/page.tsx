import './tickets.css'
import { client } from '@/seed/seed'

export default function Tickets() {
  return (
    <div className="tickets flex flex-col items-center flex-grow h-auto w-full mt-14">
      <h1>Mis viajes</h1>
      <div className="box flex flex-col items-center bg-green-400 w-5/6 mb-8 h-auto">
      {client.tickets.map((t, index) => (
        <div className="ticket bg-red-400 w-11/12 h-56" key={index}>
          <div className="header flex justify-between items-center w-full h-8">
            <div className="travel flex">
              <div className="icon flex bg-slate-400">
                <h2>{"Vuelo de "}</h2>
                <label>{t.origin}</label>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-departure" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M14.639 10.258l4.83 -1.294a2 2 0 1 1 1.035 3.863l-14.489 3.883l-4.45 -5.02l2.897 -.776l2.45 1.414l2.897 -.776l-3.743 -6.244l2.898 -.777l5.675 5.727z" />
                  <path d="M3 21h18" />
                </svg>
              </div>
              <div className="icon flex bg-green-600">
                <h2>{"a "}</h2>
                <label>{t.destination}</label>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-arrival" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M15.157 11.81l4.83 1.295a2 2 0 1 1 -1.036 3.863l-14.489 -3.882l-1.345 -6.572l2.898 .776l1.414 2.45l2.898 .776l-.12 -7.279l2.898 .777l2.052 7.797z" />
                  <path d="M3 21h18" />
                </svg>
              </div>
              <h3>{" - " + t.date}</h3>
            </div>
            <h2>{"Vuelo: " + t.typeFlight}</h2>
          </div>

          <div className="content flex items-center bg-blue-500 mt-5 h-28">
            <div className="info-l w-2/4 bg-gray-400">
              x
            </div>
            <div className="line"></div>
            <div className="info-c w-1/5 bg-yellow-800">
              es
            </div>
            <div className="line"></div>
            <div className="info-r w-1/5 bg-green-700">
              w
            </div>
          </div>
            <div className="footer flex mt-3 justify-center w-full">
              <label>Estado Check-In</label>
            </div>
        </div>
      ))}
      </div>
    </div>
  )
}
