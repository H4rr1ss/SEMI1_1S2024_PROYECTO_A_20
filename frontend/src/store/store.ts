import { ClientStore, Client } from "@/utils/interfaces/clientGeneral.interface";
import { create } from "zustand";

export const useClientStore = create<ClientStore>((set, get) => ({
  name: "",
  lastName: "",
  phoneNumber: 0,
  nationality: "",
  email: "",
  passportNumber: 0,
  password: "",
  profile_pic: "",
  tickets: [],

  // ---------------------------------------- Setters ----------------------------------------
  setStore_Name: (name_: string) => {
    set({ name: name_ });
  },

  setStore_Client: (client: Client) => {
    set(client);
  },

  clearStore_Client: () => {
    set({
      name: "",
      lastName: "",
      email: "",
      passportNumber: 0,
      phoneNumber: 0,
      nationality: "",
      password: "",
      profile_pic: "",
      tickets: []
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
      name: name_,
      lastName: lastName_,
      email: email_,
      passportNumber: passportNumber_,
      phoneNumber: phoneNumber_,
      nationality: nationality_,
      profile_pic: profilePic_,
    });
  },

  // ---------------------------------------- Getters ----------------------------------------
  getStore_Name: () => {
      const { name } = get();
      return name;
  },

  getStore_getInfoProfile: () => {
    const { name, lastName, email, passportNumber, phoneNumber, nationality, profile_pic } = get();
    return { name, lastName, email, passportNumber, phoneNumber, nationality, profile_pic };
  },
}));