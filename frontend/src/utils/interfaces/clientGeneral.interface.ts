interface Ticket {
  id: string;
  origin: string;
  destination: string;
  date: string;
  typeFlight: string;
  travellers: number;
  boardingTime: string;
  arrivalTime: string;
  flightPrice: number;
  check: boolean;
  idFlight: number;
}

export interface Client {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  nationality: string;
  email: string;
  passportNumber: number;
  password: string;
  profilePicture: string;
  tickets: Ticket[];
}

export interface ClientRegister {
  firstName: string;
  lastName: string;
  email: string;
  passportNumber: number;
  phoneNumber: number;
  nationality: string;
  password: string;
}

export interface ClientAuth {
  name: string;
  password: string;
  email: string;
}

export interface ClientLogin {
  email: string;
  password: string;
}

export interface ClientProfile {
  firstName: string;
  lastName: string;
  emial: string;
  passportNumber: number;
  phoneNumber: number;
  nationality: string;
  profilePicture: string;
}

export interface DataEditProfile {
  firstName: string;
  lastName: string;
  email: string;
  passportNumber: number;
  phoneNumber: number;
  nationality: string;
  profilePicture: string;
}

export interface ClientStore {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  nationality: string;
  email: string;
  passportNumber: number;
  password: string;
  profilePicture: string;
  tickets: Ticket[];

  // Setters
  setStore_Name: (firstName: string) => void;
  setStore_Client: (client: Client) => void;
  clearStore_Client: () => void;
  setStore_InfoEditProfile: (
    firstName: string,
    lastName: string,
    email: string,
    passportNumber: number,
    phoneNumber: number,
    nationality: string,
    profilePicture: string
  ) => void;

  // Getters
  getStore_Name: () => string;
  getStore_getInfoProfile: () => DataEditProfile;
}
