import { recordFlightAPI } from "../api/flights.api";

export const handleImageBase64 = (
  event: any,
  setImageBase64: (imageBase64: string) => void,
  setImageName: (imageName: string) => void
) => {
  try {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      // Configurar el evento de carga del lector
      reader.onload = function (e) {
        if (e.target && e.target.result) {
          const base64Image = e.target.result as string;

          // Actualizar el estado con el Base64 de la imagen
          setImageBase64(base64Image);
          setImageName(file.name);
        }
      };

      // Leer el archivo como Base64
      reader.readAsDataURL(file);
    } else {
      console.log("No se ha seleccionado un archivo");
    }
  } catch (error) {
    console.log("Ha ocurrido un error");
  }
};

export const handleRecordFlight = async (
  destinationCountry: string,
  destination: string,
  originCountry: string,
  origin: string,
  boardingTime: string,
  arrivalTime: string,
  date: string,
  price: string,
  typeFlight: string,
  preventiveRecommendations: string,
  description: string,
  place1: string,
  description1: string,
  place2: string,
  description2: string,
  imageName: string,
  imageBase64: string
) => {
  const flightData = {
    destinationCountry: destinationCountry,
    destination: destination,
    originCountry: originCountry,
    origin: origin,
    boardingTime: boardingTime,
    arrivalTime: arrivalTime,
    date: date,
    price: parseInt(price),
    typeFlight: typeFlight,
    preventiveRecommendations: preventiveRecommendations,
  };

  const destinationDetailData = {
    description: description,
    places: [
      {
        name: place1,
        description: description1,
      },
      {
        name: place2,
        description: description2,
      },
    ],
    destinationImage: {
      name: imageName,
      base64: imageBase64,
    },
  };

  try {
    const recordData = {
      flight: flightData,
      destinationDetails: destinationDetailData,
    };

    const response = await recordFlightAPI(recordData);
    return response;
  } catch (error) {
    // Aquí puedes manejar los errores como prefieras
    console.error("An error occurred while registering the user", error);
    throw error;
  }
};
