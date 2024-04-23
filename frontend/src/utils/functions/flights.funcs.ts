import { getDestinationsAPI, getFlightsAPI } from "../api/flights.api";

export const handleGetDestinations = async () => {
  try {
    const response = await getDestinationsAPI();
    // Si la API devuelve una respuesta, la retornamos
    return response;
  } catch (error) {
    // Aquí puedes manejar los errores como prefieras
    console.error("An error occurred while get destinations", error);
    throw error;
  }
};

export const handleGetFlights = async (
  origin: string,
  destination: string,
  date: string,
  typeFlight: string
) => {
  try {
    const flightsData = {
      origin,
      destination,
      date,
      typeFlight,
    };

    const response = await getFlightsAPI(flightsData);
    // Si la API devuelve una respuesta, la retornamos
    return response;
  } catch (error) {
    // Aquí puedes manejar los errores como prefieras
    console.error("An error occurred while get flights", error);
    throw error;
  }
};
