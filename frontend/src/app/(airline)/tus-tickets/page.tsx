"use client";
import { useEffect, useState } from "react";
import TicketUI from "@/components/ui/ticket/Ticket";
import { Ticket } from "@/seed/seed";
import { useClientStore } from "@/store/store";
import "./tickets.css";
import { handleGetTickets } from "@/utils/functions/flights.funcs";

export default function Tickets() {
  const clientStore = useClientStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    handleGetTickets(clientStore.id).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setData(data);
        });
      }
    });
  }, []);

  return (
    <div className="tickets flex flex-col items-center flex-grow h-auto w-full mt-14">
      <h1>Mis viajes</h1>
      <div className="box flex flex-col items-center w-5/6 mb-8 h-auto">
        {data.map((t: Ticket, index: number) => (
          <TicketUI
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
            flightPrice={Number(t.price)}
            check={t.check}
          />
        ))}
      </div>
    </div>
  );
}
