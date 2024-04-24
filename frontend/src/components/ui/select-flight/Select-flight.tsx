"use client";
import { useState, useEffect } from "react";
import { ReserveFlight } from "@/utils/interfaces/reservationFlight.interface";
import { Flights } from "@/utils/interfaces/reservationFlight.interface";
import { handleGetFlights } from "@/utils/functions/flights.funcs";
import Payments from "@/components/ui/Payments/Payments";
import { toast, ToastContainer } from 'react-toastify';
import Flight from "../flight/Flight";
import "./select-flight.css";

const SelectFlight = (props: ReserveFlight) => {
  const [data, setData] = useState([] as Flights[]);

  useEffect(() => {
    console.log(props.date);

    handleGetFlights(
      props.origin,
      props.destination,
      props.date,
      props.typeFlight
    )
      .then(async (response) => {
        const data = await response.json();
        toast.success("Vuelos obtenidos con éxito");

        setData(data);
      })
      .catch(() => {
        toast.error("Ocurrió un error al obtener los Vuelos");
      });
  }, [props.origin, props.destination, props.date, props.typeFlight]);

  const [isActive, setIsActive] = useState(false);

  // Data Seleccionada
  const [idFlight_, setIdFlight_] = useState<number>(0);
  const [finalPrice_, setFinalPrice_] = useState<number>(0);
  const [indexFlight_, setIndexFlight_] = useState<number>(0);

  const reservationProcess = () => {
    props.setActiveIndex(2);
    setIsActive(!isActive);
  };

  return (
    <>
      {isActive ? (
        <Payments
          id={idFlight_}
          origin={props.origin}
          destination={props.destination}
          date={props.date}
          typeFlight={props.typeFlight}
          travellers={props.travellers}
          boardingTime={data[indexFlight_].boardingTime}
          arrivalTime={data[indexFlight_].arrivalTime}
          flightPrice={finalPrice_}
        />
      ) : (
        <div className="h-full flex flex-col items-center">
          <ToastContainer
            position="top-center"
            autoClose={1800}
          />
          <div className="sf-content grid gap-y-4">
            {data.map((flight, index) => (
              <Flight
                key={index}
                id={flight.id}
                index={index}
                boardingTime={flight.boardingTime}
                arrivalTime={flight.arrivalTime}
                price={parseFloat(flight.price)}
                sets={{
                  setIdFlight: setIdFlight_,
                  setPrice: setFinalPrice_,
                  setIndexFlight: setIndexFlight_,
                }}
                reserveFlight={props}
              />
            ))}
          </div>
          <button
            className="btn-reserve px-4 py-3 mt-5 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
            onClick={reservationProcess}
          >
            Continuar
          </button>
        </div>
      )}
    </>
  );
};

export default SelectFlight;
