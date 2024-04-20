'use client'

interface traveler{
  typeTraveler: string;
  quantity: number;
}

interface Payments{
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
  travellers: traveler[];
  idFlight: number,
  boardingTime: string,
  arrivalTime: string,
  flightPrice: number,
}

const SelectFlight = ( props:Payments ) =>{

  const handle = () => {
    console.log("Pago")
    console.log("Origen: ", props.origin)
    console.log("Destino: ", props.destination)
    console.log("Fecha: ", props.date)
    console.log("Tipo de vuelo: ", props.typeFlight)
    console.log("Pasajeros: ", props.travellers)
    console.log("ID Vuelo: ", props.idFlight)
    console.log("Hora de abordaje: ", props.boardingTime)
    console.log("Hora de llegada: ", props.arrivalTime)
    console.log("Precio final del vuelo: ", props.flightPrice)
  }

  return (
    <div className="">
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