import { getDestinationsAPI } from "../api/flights.api";

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
