"use client";
import "./payments.css";
import { Payments } from "@/utils/interfaces/reservationFlight.interface";

const SelectFlight = (props: Payments) => {
  let totalPassengers = 0;
  let finalCost = 0;

  const handle = () => {
    finalCost = totalPassengers * props.flightPrice;
    console.log("Pago");
    console.log("Origen: ", props.origin);
    console.log("Destino: ", props.destination);
    console.log("Fecha: ", props.date);
    console.log("Tipo de vuelo: ", props.typeFlight);
    console.log("Pasajeros: ", props.travellers);
    console.log("ID Vuelo: ", props.id);
    console.log("Hora de abordaje: ", props.boardingTime);
    console.log("Hora de llegada: ", props.arrivalTime);
    console.log("Precio final del vuelo: ", finalCost);
  };

  return (
    <div className="p-box w-full h-full flex flex-col items-center">
      <div className="resume w-4/5 h-48 mt-5 flex flex-col items-center justify-center">
        <h2>Resumen de compra</h2>
        {props.travellers.map((traveler, index) => {
          if (traveler.quantity > 0) {
            totalPassengers += traveler.quantity;
            return (
              <div key={index} className="cant flex justify-evenly w-3/6">
                <h3>{traveler.quantity + " " + traveler.typeTraveler}</h3>
                <label>{"Q. " + props.flightPrice}</label>
              </div>
            );
          }
          return null; // Opcional: si no se cumple la condición, puedes devolver null o algún otro valor.
        })}
        <div className="line"></div>
        <div className="total mt-1 w-2/5 flex justify-between">
          <h3>Total</h3>
          <label>{"Q. " + totalPassengers * props.flightPrice}</label>
        </div>
      </div>

      <div className="card w-4/5 h-56 mt-4 flex flex-col items-center">
        <h2>Datos Tarjeta</h2>
        <div className="input-field relative mt-5">
          <input type="text" required style={{ textTransform: "uppercase" }} />
          <label>Nombre completo</label>
        </div>

        <div className="input-field relative mt-5">
          <input
            type="text"
            required
            maxLength={25}
            onInput={(e) => {
              const input = e.currentTarget;
              const unformattedValue = input.value
                .replace(/\D/g, "")
                .substring(0, 16); // Eliminamos caracteres no numéricos y limitamos a 16 dígitos
              const formattedValue = unformattedValue.replace(
                /(\d{4})(?=\d)/g,
                "$1 - "
              ); // Agregamos espacios después de cada grupo de 4 números
              input.value = formattedValue;
            }}
          />
          <label>Número de tarjeta</label>
        </div>

        <div className="flex justify-evenly w-full">
          <div className="input-field2 relative mt-5">
            <input
              type="text"
              required
              placeholder="MM / AA"
              maxLength={7}
              onInput={(e) => {
                const input = e.currentTarget;
                const unformattedValue = input.value
                  .replace(/\D/g, "")
                  .substring(0, 6); // Eliminamos caracteres no numéricos y limitamos a 6 dígitos
                const formattedValue = unformattedValue.replace(
                  /(\d{2})(?=\d)/g,
                  "$1 / "
                ); // Agregamos barras después de cada grupo de 2 números
                input.value = formattedValue;
              }}
            />
            <label>Fecha expiracion</label>
          </div>
          <div className="input-field2 relative mt-5">
            <input type="password" required placeholder="CVV" />
            <label>código</label>
          </div>
        </div>
      </div>

      <button
        className="btn-reserve px-4 py-2 mt-5 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
        onClick={handle}
      >
        Finalizar Reserva
      </button>
    </div>
  );
};

export default SelectFlight;
