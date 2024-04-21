import { FlightProps } from '@/utils/interfaces/reservationFlight.interface';
import { useState, useEffect } from 'react'
import './flight.css'

const Flight = ( props:FlightProps ) => {
  const [newPrice, setNewPrice] = useState<number>(0);
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 300);

    props.sets.setIdFlight(parseInt(props.idFlight));
    props.sets.setPrice(newPrice);
  };

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
    <div className={`f-info bg-gray-100 w-full h-32 ${isPressed ? 'pressed' : ''}`} onClick={handleClick}>
      <h2>{'Fecha: ' + props.reserveFlight.date}</h2>
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
