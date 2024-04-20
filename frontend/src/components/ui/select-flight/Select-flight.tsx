'use client'
import Payments from '@/components/ui/Payments/Payments';
import { flights } from '@/seed/seed';
import Flight from '../flight/Flight';
import { useState } from 'react';
import './select-flight.css'

interface traveler{
  typeTraveler: string;
  quantity: number;
}
interface ReserveFlight{
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
  travellers: traveler[];
}

const SelectFlight = ( props:ReserveFlight ) =>{
  const [isActive, setIsActive] = useState(false);

  // Data Seleccionada
  const [idFlight_, setIdFlight_] = useState<number>(0);
  const [finalPrice_, setFinalPrice_] = useState<number>(0);

return (
    <>
      {isActive ? (
        <Payments
          origin={props.origin}
          destination={props.destination}
          date={props.date}
          typeFlight={props.typeFlight}
          travellers={props.travellers}
          idFlight={idFlight_}
          boardingTime={flights[idFlight_].boardingTime}
          arrivalTime={flights[idFlight_].arrivalTime}
          flightPrice={finalPrice_}
        />
      ) : (
        <div className="h-full flex flex-col items-center">
          <div className="sf-content grid gap-y-4">
          {flights.map((flight, index) => (
            <Flight
            key={index}
            idFlight={flight.id.toString()}
            boardingTime={flight.boardingTime}
            arrivalTime={flight.arrivalTime}
            price={flight.price}
            sets={{
              setIdFlight: setIdFlight_,
              setPrice: setFinalPrice_
            }}
            reserveFlight={props}
            />
          ))}
          </div>

          <button
            className="btn-reserve px-4 py-3 mt-5 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
            onClick={() => setIsActive(!isActive)}
            >
            Continuar
          </button>
        </div>
      )}
    </>
  )
}

export default SelectFlight;