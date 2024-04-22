'use client'
import Ticket from '@/components/ui/ticket/Ticket';
import { useClientStore } from '@/store/store'
import './tickets.css'

export default function Tickets() {
  const clientStore = useClientStore();

  return (
    <div className="tickets flex flex-col items-center flex-grow h-auto w-full mt-14">
      <h1>Mis viajes</h1>
      <div className="box flex flex-col items-center w-5/6 mb-8 h-auto">
        {clientStore.tickets.map((t, index) => (
          <Ticket
            key={index}
            origin={t.origin}
            destination={t.destination}
            idFlight={t.idFlight}
            date={t.date}
            typeFlight={t.typeFlight}
            boardingTime={t.boardingTime}
            arrivalTime={t.arrivalTime}
            id={t.id}
            lastName={clientStore.lastName}
            flightPrice={t.flightPrice}
            check={t.check}
          />
        ))}
      </div>
    </div>
  )
}
