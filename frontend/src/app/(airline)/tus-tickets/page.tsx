'use client'
import { useEffect, useState } from "react";
import { Ticket } from "@/utils/interfaces/tickets.interface";
import { useClientStore } from "@/store/store";
import { handleGetTickets } from "@/utils/functions/flights.funcs";
import { TicketUI } from "@/components/ui/ticket/Ticket"; // Importa directamente el componente TicketUI en lugar de usar dynamic

export default function Tickets() {
  const clientStore = useClientStore();
  const [tickets, setTickets] = useState<Ticket[]>([]); // Define el tipo de estado para los tickets

  useEffect(() => {
    const fetchTickets = async () => { // Utiliza una función async dentro de useEffect para manejar la solicitud de tickets
      try {
        const response = await handleGetTickets(clientStore.id);
        if (response.ok) {
          const data = await response.json(); // Espera la respuesta antes de convertirla a JSON
          setTickets(data);
        } else {
          // Maneja el caso en que la solicitud no sea exitosa
          console.error("Error al obtener los tickets:", response.status);
        }
      } catch (error) {
        // Maneja cualquier error que ocurra durante la solicitud
        console.error("Error al obtener los tickets:", error);
      }
    };

    fetchTickets(); // Llama a la función fetchTickets al montar el componente
  }, [clientStore.id]);

  return (
    <div className="tickets flex flex-col items-center flex-grow h-auto w-full mt-14">
      <h1>Mis viajes</h1>
      <div className="box flex flex-col items-center w-5/6 mb-8 h-auto">
        {tickets.map((ticket: Ticket, index: number) => ( // Itera sobre la lista de tickets
          <TicketUI
            key={index}
            origin={ticket.origin}
            destination={ticket.destination}
            idFlight={ticket.idFlight}
            date={ticket.date}
            typeFlight={ticket.typeFlight}
            boardingTime={ticket.boardingTime}
            arrivalTime={ticket.arrivalTime}
            id={ticket.id}
            lastName={clientStore.lastName}
            flightPrice={Number(ticket.price)}
            check={ticket.check}
          />
        ))}
      </div>
    </div>
  );
}
