import {
  bookFlightAPI,
  getDestinationsAPI,
  getFlightsAPI,
  checkInAPI,
  sesMessageAPI,
  getTicketsAPI,
} from "../api/flights.api";

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

export const handleBookFlight = async (
  origin: string,
  destination: string,
  date: string,
  typeFlight: string,
  travellers: number,
  boardingTime: string,
  arrivalTime: string,
  price: number,
  check: boolean,
  flightId: number,
  clientId: number
) => {
  try {
    const bookData = {
      origin: origin,
      destination: destination,
      date: date,
      typeFlight: typeFlight,
      travellers: travellers,
      boardingTime: boardingTime,
      arrivalTime: arrivalTime,
      price: price,
      check: check,
      flightId: flightId,
      clientId: clientId,
    };

    const response = await bookFlightAPI(bookData);
    // Si la API devuelve una respuesta, la retornamos
    return response;
  } catch (error) {
    // Aquí puedes manejar los errores como prefieras
    console.error("An error occurred while get flights", error);
    throw error;
  }
};

export const handleCheckIn = async (
  id: number,
  lastName: string,
  email: string
) => {
  try {
    const checkInData = {
      id,
      lastName,
    };
    const response = await checkInAPI(checkInData);
    await sesMessageAPI({ email });

    return response;
  } catch (error) {
    // Aquí puedes manejar los errores como prefieras
    console.error("An error occurred while get flights", error);
    throw error;
  }
};

export const handleGetTickets = async (id: number) => {
  try {
    const response = await getTicketsAPI(id);
    // Si la API devuelve una respuesta, la retornamos
    return response;
  } catch (error) {
    // Aquí puedes manejar los errores como prefieras
    console.error("An error occurred while get tickets", error);
    throw error;
  }
};
