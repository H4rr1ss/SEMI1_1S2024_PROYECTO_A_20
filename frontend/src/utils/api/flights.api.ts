import { RecordFlight } from "../interfaces/recordFlight.interface";
import { GetFlights } from "../interfaces/reservationFlight.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/flights";

export const recordFlightAPI = async (data: RecordFlight) =>
  fetch(`${API_URL}/record-flight`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getDestinationsAPI = async () =>
  fetch(`${API_URL}/get-destinations`, {
    method: "GET",
  });

export const getFlightsAPI = async (data: GetFlights) =>
  fetch(`${API_URL}/get-flights`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
