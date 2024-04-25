"use client";
import { useState, useEffect } from "react";
import DestinationCard from "@/components/ui/destinationCard/DestinationCard";
import "./destinations.css";
//import { destinations } from "@/seed/seed";
import { handleGetDestinations } from "@/utils/functions/flights.funcs";
import { GetDestination } from "@/utils/interfaces/destinations.interface";

const Destinations = () => {
  const [data, setData] = useState([] as GetDestination[]);

  useEffect(() => {
    console.log("La página se ha cargado o recargado");

    handleGetDestinations()
      .then(async (response) => {
        const data = await response.json();
        console.log("Destinos obtenidos con éxito", data);

        setData(data);
      })
      .catch((error) => {
        console.error("Ocurrió un error al obtener los destinos", error);
      });
  }, []);

  return (
    <div className="destinatios-page mt-14 flex flex-col items-center h-auto relative flex-grow">
      <div className="header bg-red-400 w-full h-72">
        <h2>Destinos</h2>
      </div>

      <div className="box-destinations grid grid-cols-2 gap-y-10 place-items-center">
        {data.map((destination, index) => (
          <DestinationCard
            key={index}
            url={destination.image}
            country={destination.country}
            city={destination.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
