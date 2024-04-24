// DATA DE LOGUEO PARA CLIENTE - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export interface Ticket {
  id: string;
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
  travellers: number;
  idFlight: number;
  boardingTime: string;
  arrivalTime: string;
  price: number;

  check: boolean;
}
interface Client {
  name: string;
  lastName: string;
  phoneNumber: number;
  nationality: string;
  email: string;
  passportNumber: number;
  password: string;
  profile_pic: string;
  tickets: Ticket[];
}

export const client: Client = {
  name: "Maia",
  lastName: "Alvarado",
  phoneNumber: 53240691,
  nationality: "Guatemala",
  email: "maia15@gmail.com",
  passportNumber: 2601220810121,
  password: "123",
  profile_pic: "https://picsum.photos/200/300",
  tickets: [
    {
      id: "A3KJ3",
      origin: "Paris",
      destination: "Madrid",
      date: "2022-10-15",
      typeFlight: "Economico",
      travellers: 1,
      idFlight: 1,
      boardingTime: "08:00",
      arrivalTime: "10:30",
      flightPrice: 500, // Precio del vuelo ya incluido el precio del tipo de vuelo
      check: false,
    },
    {
      id: "B7GZ9",
      origin: "New York",
      destination: "Los Angeles",
      date: "2022-11-20",
      typeFlight: "Premium",
      travellers: 2,
      idFlight: 2,
      boardingTime: "12:00",
      arrivalTime: "15:30",
      flightPrice: 12002, // Precio del vuelo ya incluido el precio del tipo de vuelo
      check: true,
    },
    {
      id: "C2HD5",
      origin: "London",
      destination: "Berlin",
      date: "2022-12-05",
      typeFlight: "Negocios",
      travellers: 1,
      idFlight: 3,
      boardingTime: "18:00",
      arrivalTime: "09:30",
      flightPrice: 800, // Precio del vuelo ya incluido el precio del tipo de vuelo
      check: false,
    },
  ],
};

// DATA DE REGISTRO DE VUELOS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
interface Flight {
  id: number;
  destinationCountry: string;
  destination: string;
  originCountry: string;
  origin: string;
  boardingTime: string;
  arrivalTime: string;
  date: string;
  price: number;
  typeFlight: string;
  destinationDetails: DestinationDetail;
  preventiveRecommendations: string;
}

interface DestinationDetail {
  image: string;
  description: string;
  places: Place[];
}

interface Place {
  name: string;
  description: string;
}

export const flights: Flight[] = [
  {
    id: 1,
    destinationCountry: "España",
    destination: "Madrid",
    originCountry: "France",
    origin: "Paris",
    boardingTime: "08:00",
    arrivalTime: "10:30",
    date: "2022-10-15",
    price: 1500,
    typeFlight: "Economico",
    destinationDetails: {
      image: "madrid.jpg",
      description: "Madrid is the capital and largest city of Spain.",
      places: [
        {
          name: "Plaza Mayor",
          description: "Historic square in the heart of Madrid.",
        },
        {
          name: "Prado Museum",
          description:
            "Renowned art museum featuring works by European masters.",
        },
      ],
    },
    preventiveRecommendations:
      "Be sure to have all necessary travel documents and check local COVID-19 guidelines before departure.",
  },
  {
    id: 2,
    destinationCountry: "Alemania",
    destination: "Berlin",
    originCountry: "Italy",
    origin: "Rome",
    boardingTime: "12:00",
    arrivalTime: "15:30",
    date: "2022-11-05",
    price: 2500,
    typeFlight: "Negocios",
    destinationDetails: {
      image: "berlin.jpg",
      description: "Berlin is the capital and largest city of Germany.",
      places: [
        {
          name: "Brandenburg Gate",
          description: "Iconic neoclassical monument.",
        },
        {
          name: "Checkpoint Charlie",
          description:
            "Former border crossing point between East and West Berlin.",
        },
      ],
    },
    preventiveRecommendations:
      "Pack appropriate clothing for the season and comfortable walking shoes.",
  },
  {
    id: 3,
    destinationCountry: "Australia",
    destination: "Sydney",
    originCountry: "Japan",
    origin: "Tokyo",
    boardingTime: "18:00",
    arrivalTime: "09:30",
    date: "2022-12-20",
    price: 3500,
    typeFlight: "Premium",
    destinationDetails: {
      image: "sydney.jpg",
      description:
        "Sydney is the capital city of the state of New South Wales and the most populous city in Australia.",
      places: [
        {
          name: "Sydney Opera House",
          description: "Iconic performing arts venue.",
        },
        { name: "Bondi Beach", description: "Popular beach in Sydney." },
      ],
    },
    preventiveRecommendations:
      "Bring sunscreen and stay hydrated during outdoor activities.",
  },
  {
    id: 4,
    destinationCountry: "United States",
    destination: "New York",
    originCountry: "Canada",
    origin: "Toronto",
    boardingTime: "14:30",
    arrivalTime: "17:00",
    date: "2022-09-10",
    price: 2000,
    typeFlight: "Premium",
    destinationDetails: {
      image: "newyork.jpg",
      description:
        "New York City (NYC), often simply called New York, is the most populous city in the United States.",
      places: [
        {
          name: "Times Square",
          description: "Iconic commercial and entertainment hub.",
        },
        { name: "Central Park", description: "Urban park in Manhattan." },
      ],
    },
    preventiveRecommendations:
      "Plan ahead for popular attractions and consider booking tickets in advance.",
  },
  {
    id: 5,
    destinationCountry: "France",
    destination: "Paris",
    originCountry: "Germany",
    origin: "Berlin",
    boardingTime: "10:00",
    arrivalTime: "12:30",
    date: "2022-08-25",
    price: 1800,
    typeFlight: "Economico",
    destinationDetails: {
      image: "paris.jpg",
      description: "Paris is the capital and most populous city of France.",
      places: [
        { name: "Eiffel Tower", description: "Iconic iron lattice tower." },
        {
          name: "Louvre Museum",
          description: "World's largest art museum and a historic monument.",
        },
      ],
    },
    preventiveRecommendations:
      "Be mindful of pickpockets in crowded tourist areas.",
  },
];

interface destinations {
  name: string;
  country: string;
  image: string;
  description: string;
  keywords: string[];
  places: Place[];
  preventRecommendations: string;
}

export const props: PropsDestinationDetail = {
  name: "Madrid",
  country: "España",
  image: "../../imas/destinations/madrid.webp",
  description:
    "España, situada en la Península Ibérica, es un país diverso y culturalmente rico con una rica historia y una impresionante arquitectura. Con más de 47 millones de habitantes, es el segundo país más grande de la Unión Europea. Desde las soleadas playas hasta las montañas nevadas, España ofrece una variedad de paisajes. Ha dejado una huella duradera en el mundo a través de su legado histórico, desde la dominación romana hasta el imperio español en los siglos XVI y XVII.",
  keywords: ["España", "Madrid", "Ciudad", "Capital"],
  places: [
    {
      name: "Plaza Mayor",
      description:
        "La Plaza Mayor es uno de los lugares más emblemáticos de Madrid, la capital de España. Situada en el corazón de la ciudad, esta plaza rectangular de estilo barroco fue construida en el siglo XVII durante el reinado de Felipe III. La Plaza Mayor ha sido testigo de una gran variedad de eventos a lo largo de su historia, desde corridas de toros y ejecuciones públicas hasta celebraciones reales y mercados.",
    },
    {
      name: "Prado Museum",
      description:
        "El Museo del Prado, ubicado en Madrid, es uno de los museos de arte más importantes del mundo y una joya cultural de España. Fundado en 1819, cuenta con una impresionante colección de obras maestras que abarcan desde el siglo XII hasta el siglo XIX, destacando especialmente la pintura española, italiana y flamenca.",
    },
  ],
  preventRecommendations:
    "Al visitar el Museo del Prado en Madrid, asegúrate de comprar tus entradas con anticipación para evitar las largas colas. Llega temprano para evitar las multitudes y planifica tu visita para no perderte tus obras favoritas. Respeta las normas del museo, mantén el distanciamiento social y lleva mascarilla si es necesario. No olvides hidratarte y tomar descansos regulares. Con estas precauciones, disfrutarás de una visita segura y memorable al Museo del Prado.",
};

export const destinations: destinations[] = [
  {
    name: "Madrid",
    country: "España",
    image: "../../imas/destinations/madrid.webp",
    description:
      "España, situada en la Península Ibérica, es un país diverso y culturalmente rico con una rica historia y una impresionante arquitectura. Con más de 47 millones de habitantes, es el segundo país más grande de la Unión Europea. Desde las soleadas playas hasta las montañas nevadas, España ofrece una variedad de paisajes. Ha dejado una huella duradera en el mundo a través de su legado histórico, desde la dominación romana hasta el imperio español en los siglos XVI y XVII.",
    keywords: ["Spain", "Madrid", "city", "capital"],
    places: [
      {
        name: "Plaza Mayor",
        description: "Historic square in the heart of Madrid.",
      },
      {
        name: "Prado Museum",
        description: "Renowned art museum featuring works by European masters.",
      },
    ],
    preventRecommendations:
      "Be sure to have all necessary travel documents and check local COVID-19 guidelines before departure.",
  },
  {
    name: "Berlin",
    country: "Alemania",
    image: "../../imas/destinations/berlin.jpg",
    description: "Berlin is the capital and largest city of Germany.",
    keywords: ["Germany", "Berlin", "city", "capital"],
    places: [
      {
        name: "Brandenburg Gate",
        description: "Iconic neoclassical monument.",
      },
      {
        name: "Checkpoint Charlie",
        description:
          "Former border crossing point between East and West Berlin.",
      },
    ],
    preventRecommendations:
      "Pack appropriate clothing for the season and comfortable walking shoes.",
  },
  {
    name: "Sydney",
    country: "Australia",
    image: "../../imas/destinations/sidney.jpg",
    description:
      "Sydney is the capital city of the state of New South Wales and the most populous city in Australia.",
    keywords: ["Australia", "Sydney", "city", "capital"],
    places: [
      {
        name: "Sydney Opera House",
        description: "Iconic performing arts venue.",
      },
      { name: "Bondi Beach", description: "Popular beach in Sydney." },
    ],
    preventRecommendations:
      "Bring sunscreen and stay hydrated during outdoor activities.",
  },
  {
    name: "New York",
    country: "Estados Unidos",
    image: "../../imas/destinations/newYork.jpg",
    description:
      "New York City (NYC), often simply called New York, is the most populous city in the United States.",
    keywords: ["United States", "New York", "city", "populous"],
    places: [
      {
        name: "Times Square",
        description: "Iconic commercial and entertainment hub.",
      },
      { name: "Central Park", description: "Urban park in Manhattan." },
    ],
    preventRecommendations:
      "Plan ahead for popular attractions and consider booking tickets in advance.",
  },
];
