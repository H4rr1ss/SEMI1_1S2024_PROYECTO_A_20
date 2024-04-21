
// DATA DE LOGUEO PARA CLIENTE - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
interface Ticket {
    id: string;
    origin: string;
    destination: string;
    date: string;
    typeFlight: string;
    travellers: number;
    idFlight: number;
    boardingTime: string;
    arrivalTime: string;
    flightPrice: number;

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
    name: "Harry",
    lastName: "Gomez",
    phoneNumber: 53670191,
    nationality: "Guatemala",
    email: "harry@gmail.com",
    passportNumber: 36013208101011,
    password: "123",
    profile_pic: "",
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
            check: false
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
            flightPrice: 1200, // Precio del vuelo ya incluido el precio del tipo de vuelo
            check: true
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
            check: false
        }
    ]
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
        destinationCountry: "Spain",
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
                { name: "Plaza Mayor", description: "Historic square in the heart of Madrid." },
                { name: "Prado Museum", description: "Renowned art museum featuring works by European masters." }
            ]
        },
        preventiveRecommendations: "Be sure to have all necessary travel documents and check local COVID-19 guidelines before departure."
    },
    {
        id: 2,
        destinationCountry: "Germany",
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
                { name: "Brandenburg Gate", description: "Iconic neoclassical monument." },
                { name: "Checkpoint Charlie", description: "Former border crossing point between East and West Berlin." }
            ]
        },
        preventiveRecommendations: "Pack appropriate clothing for the season and comfortable walking shoes."
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
            description: "Sydney is the capital city of the state of New South Wales and the most populous city in Australia.",
            places: [
                { name: "Sydney Opera House", description: "Iconic performing arts venue." },
                { name: "Bondi Beach", description: "Popular beach in Sydney." }
            ]
        },
        preventiveRecommendations: "Bring sunscreen and stay hydrated during outdoor activities."
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
            description: "New York City (NYC), often simply called New York, is the most populous city in the United States.",
            places: [
                { name: "Times Square", description: "Iconic commercial and entertainment hub." },
                { name: "Central Park", description: "Urban park in Manhattan." }
            ]
        },
        preventiveRecommendations: "Plan ahead for popular attractions and consider booking tickets in advance."
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
                { name: "Louvre Museum", description: "World's largest art museum and a historic monument." }
            ]
        },
        preventiveRecommendations: "Be mindful of pickpockets in crowded tourist areas."
    }
]
