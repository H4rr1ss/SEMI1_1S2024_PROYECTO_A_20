'use client'
import { useState } from 'react'
import './select-flight.css'

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
    <div className="h-full bg-blue-400">
      <h1>HOLAHOLAHOAL</h1>

      <button
        className="btn-reserve px-4 py-3 mt-3 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
        onClick={handle}
      >
        Continuar
      </button>
    </div>
  )
}

export default SelectFlight;