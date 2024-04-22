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

export interface Client {
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

export interface ClientProfile{
    name: string;
    lastName: string;
    emial: string;
    passportNumber: number;
    phoneNumber: number;
    nationality: string;
    profile_pic: string;
}

export interface DataEditProfile {
    name: string;
    lastName: string;
    email: string;
    passportNumber: number;
    phoneNumber: number;
    nationality: string;
    profile_pic: string;
}


export interface ClientStore {
    name: string;
    lastName: string;
    phoneNumber: number;
    nationality: string;
    email: string;
    passportNumber: number;
    password: string;
    profile_pic: string;
    tickets: Ticket[];

    // Setters
    setStore_Name: (name: string) => void;
    setStore_Client: (client: Client) => void;
    clearStore_Client: () => void;
    setStore_InfoEditProfile: (
        name: string,
        lastName: string,
        email: string,
        passportNumber: number,
        phoneNumber: number,
        nationality: string,
        profile_pic: string
    ) => void;

    // Getters
    getStore_Name: () => string;
    getStore_getInfoProfile: () => DataEditProfile;
}