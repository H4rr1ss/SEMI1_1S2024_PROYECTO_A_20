'use client'
import { flights } from '@/seed/seed';
import './select-flight.css'
import Flight from '../flight/Flight';

interface ReserveFlight{
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
  travellers: number;
}

const SelectFlight = ( props:ReserveFlight ) =>{

  const handle = () => {
    console.log(props.origin);
    console.log(props.destination);
    console.log(props.date);
    console.log(props.typeFlight);
    console.log(props.travellers);
  }



return (
    <div className="h-full flex flex-col items-center">
      <div className="sf-content grid gap-y-4">
      {flights.map((flight, index) => (
        <Flight
          key={index} // Añade un atributo key para identificar de forma única cada elemento de la lista
          date={flight.date}
          boardingTime={flight.boardingTime}
          arrivalTime={flight.arrivalTime}
          price={flight.price}
          reserveFlight={props}
        />
      ))}
      </div>

      <button
        className="btn-reserve px-4 py-3 mt-5 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
        onClick={handle}
        >
        Continuar
      </button>
    </div>
  )
}

export default SelectFlight;