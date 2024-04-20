'use client'
import SelectFlight from '@/components/ui/select-flight/Select-flight';
import InputReserve from '@/components/ui/input-reserve/Input-reserve';
import { useState } from 'react';
import './reservation.css'

interface traveler{
  typeTraveler: string;
  quantity: number;
}

export default function Flight_reservation() {
  const [isActive, setIsActive] = useState(false);
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [typeFlight, setTypeFlight] = useState<string>('');

  // Inputs viajeros
  const [passagers, setPassagers] = useState<traveler[]>([]);
  const [adults, setAdults] = useState<number>(0);
  const [young, setYoung] = useState<number>(0);
  const [babies, setBabies] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);

  const reservationProcess = () => {
    // Calculo de precios
    setPassagers([
      {typeTraveler: "Adultos(de 18 a 64 años)", quantity: adults},
      {typeTraveler: "Jóvenes(de 15 a 17 años)", quantity: young},
      {typeTraveler: "Bebés(menores de dos años)", quantity: babies},
      {typeTraveler: "Niños(de 5 a 11 años)", quantity: children}
    ])

    setIsActive(!isActive)
  }

  return (
    <div className="reserve-page mt-14 flex flex-col items-center relative text-black flex-grow">
      <div className="fr-header w-full h-72"></div>
      <div className="fr-box absolute flex flex-col items-center">
        <div className="fr-stepsForReservation w-11/12 h-12 flex justify-between rounded-l-2xl rounded-r-2xl">
          <div className="step">
            <div className="circle">1</div>
            <label>Detalles vuelo</label>
          </div>
          <div className="step">
            <div className="circle">2</div>
            <label>Selección vuelo</label>
          </div>
          <div className="step">
            <div className="circle">3</div>
            <label>Pagos</label>
          </div>
        </div>

        <div className={`fr-content rounded-b-2xl w-5/6 h-5/6`}>
          {isActive ? (
            <SelectFlight
              origin={origin}
              destination={destination}
              date={date}
              typeFlight={typeFlight}
              travellers={passagers}
            />
          ) : (
            <div className='flex flex-col items-center'>
              <h1>Reserve tu vuelo</h1>
              <div className="mt-16 flex justify-evenly w-full">
                <div className="input">
                  <input
                      type="text"
                      required
                      value={origin}
                      placeholder='Origen'
                      onChange={(event) => setOrigin(event.target.value)}
                  />
                  <label>Desde</label>
                </div>
                <div className="input">
                  <input
                      type="text"
                      required
                      value={destination}
                      placeholder='Destino'
                      onChange={(event) => setDestination(event.target.value)}
                  />
                  <label>Hacia</label>
                </div>

              </div>
              <div className="flex justify-evenly mt-9 w-full">
                <div className="input">
                  <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  />
                  <label>Fecha</label>
                </div>
                <div className="relative w-64">
                  <select
                    className="block appearance-none w-full bg-transparent border hover:border-gray-900 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={typeFlight}
                    onChange={(event) => setTypeFlight(event.target.value)}
                  >
                    <option value="" disabled selected>Tipo de vuelo</option>
                    <option>Economico</option>
                    <option>Premium</option>
                    <option>Negocios</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 12l-6-6-1 1 7 7 7-7-1-1z"/>
                    </svg>
                  </div>
                </div>

              </div>
              <div className="selectPassengers mt-4 w-5/6 h-48 flex flex-col justify-center items-center">
                <h2 className='mb-5'>Viajeros</h2>
                <div className="w-full flex justify-evenly">
                  <InputReserve text="Adultos (de 18 a 64 años)" value={adults} setValue={setAdults} />
                  <InputReserve text="Jóvenes(de 15 a 17 años)" value={young} setValue={setYoung} />
                </div>
                <div className="w-full flex mt-8 justify-evenly">
                  <InputReserve text="Bebés(menores de dos años)" value={babies} setValue={setBabies} />
                  <InputReserve text="Niños(de 5 a 11 años)" value={children} setValue={setChildren} />
                </div>
              </div>
              <button
                className="btn-reserve px-4 py-3 mt-3 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
                onClick={reservationProcess}
              >
                Continuar Reserva
              </button>
            </div>
        )}
        </div>
      </div>
    </div>
  )
}
