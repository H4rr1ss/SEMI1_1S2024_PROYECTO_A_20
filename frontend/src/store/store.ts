import {
  ClientStore,
  Client,
} from "@/utils/interfaces/clientGeneral.interface";
import { create } from "zustand";

export const useClientStore = create<ClientStore>((set, get) => ({
  firstName: "",
  lastName: "",
  phoneNumber: 0,
  nationality: "",
  email: "",
  passportNumber: 0,
  password: "",
  profilePicture: "",
  tickets: [],

  // ---------------------------------------- Setters ----------------------------------------
  setStore_Name: (name_: string) => {
    set({ firstName: name_ });
  },

  setStore_Client: (client: Client) => {
    set(client);
  },

  clearStore_Client: () => {
    set({
      firstName: "",
      lastName: "",
      email: "",
      passportNumber: 0,
      phoneNumber: 0,
      nationality: "",
      password: "",
      profilePicture: "",
      tickets: [],
    });
  },

  setStore_InfoEditProfile: (
    name_: string,
    lastName_: string,
    email_: string,
    passportNumber_: number,
    phoneNumber_: number,
    nationality_: string,
    profilePic_: string
  ) => {
    set({
      firstName: name_,
      lastName: lastName_,
      email: email_,
      passportNumber: passportNumber_,
      phoneNumber: phoneNumber_,
      nationality: nationality_,
      profilePicture: profilePic_,
    });
  },

  // ---------------------------------------- Getters ----------------------------------------
  getStore_Name: () => {
    const { firstName } = get();
    return firstName;
  },

  getStore_getInfoProfile: () => {
    const {
      firstName,
      lastName,
      email,
      passportNumber,
      phoneNumber,
      nationality,
      profilePicture,
    } = get();
    return {
      firstName,
      lastName,
      email,
      passportNumber,
      phoneNumber,
      nationality,
      profilePicture,
    };
  },
}));
