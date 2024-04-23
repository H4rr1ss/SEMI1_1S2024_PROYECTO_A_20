import { ChangeEvent } from "react";
import { registerUserAPI, cognitoAuthAPI } from "../api/auth.api";

export const handleFileChange = (
  event: ChangeEvent<HTMLInputElement>,
  setImageBase64: (imageBase64: string) => void,
  setImageName: (imageName: string) => void
): void => {
  const files = event.target.files;

  if (!files || files.length === 0) {
    return;
  }

  const file = files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const base64 = reader.result as string;
    setImageBase64(base64);
    setImageName(file.name);
  };

  reader.onerror = () => {
    return;
  };

  reader.readAsDataURL(file);
};

export const handleRegisterUser = async (
  firstName: string,
  lastName: string,
  email: string,
  passportNumber: string,
  phoneNumber: string,
  nationality: string,
  password: string,
  imageBase64: string,
  imageName: string
) => {
  const clientData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    passportNumber: parseInt(passportNumber),
    phoneNumber: parseInt(phoneNumber),
    nationality: nationality,
    password: password,
  };

  const imageData = {
    base64: imageBase64,
    name: imageName,
  };

  const authData = {
    name: firstName + " " + lastName,
    password: password,
    email: email,
  };

  try {
    const registerData = {
      client: clientData,
      profilePicture: imageData,
    };

    const response = await registerUserAPI(registerData);
    await cognitoAuthAPI(authData);

    // Si la API devuelve una respuesta, la retornamos
    return response;
  } catch (error) {
    // Aquí puedes manejar los errores como prefieras
    console.error("An error occurred while registering the user", error);
    throw error;
  }
};
