import {
  ClientRegister,
  ClientAuth,
  ClientLogin,
} from "../interfaces/clientGeneral.interface";
import { ImageBase64 } from "../interfaces/image.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/auth";
const COGNITO_API_URL = process.env.NEXT_PUBLIC_COGNITO_API_URL;

export const registerClientAPI = async (data: {
  client: ClientRegister;
  profilePicture: ImageBase64;
}) =>
  fetch(`${API_URL}/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const cognitoAuthAPI = async (data: ClientAuth) =>
  fetch(`${COGNITO_API_URL}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const loginClientAPI = async (data: ClientLogin) =>
  fetch(`${API_URL}/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
