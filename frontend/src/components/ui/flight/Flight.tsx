import './flight.css'
import { useState, useEffect } from 'react'


interface ReserveFlight{
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
  travellers: number;
}

interface FlightProps {
  date: string;
  boardingTime: string;
  arrivalTime: string;
  price: number;
  reserveFlight: ReserveFlight;
}

const Flight = ( props:FlightProps ) => {
  const [newPrice, setNewPrice] = useState<number>(0);

  useEffect(() => {
    switch (props.reserveFlight.typeFlight) {
      case 'Economico':
        setNewPrice(props.price);
        break;
      case 'Premium':
        setNewPrice((props.price + (props.price * 0.19)));
        break;
      case 'Negocios':
        setNewPrice((props.price + (props.price * 0.31)));
        break;
      default:
        break;
    }

  }, [props.price, props.reserveFlight.typeFlight]);

  return (
    <div className="f-info bg-gray-100 w-full h-32">
      <h2>{'Fecha: ' + props.date}</h2>
      <div className="f-content mt-1 flex justify-between items-center h-24">
        <div className="f-time w-2/3 flex flex-col items-center">
          <div className="w-full flex items-center justify-center">
            <label>{props.boardingTime}</label>
            <div className="line"></div>
            <label>{props.arrivalTime}</label>
          </div>
          <h3>Incluye trayecto operado por Kehuel</h3>
        </div>
        <label>{"Q. " + newPrice}</label>
      </div>
    </div>
  )
}

export default Flight
