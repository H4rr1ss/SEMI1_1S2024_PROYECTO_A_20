import { ChangeEvent } from 'react'

export const newClientLogin = (
  name:string,
  lastName:string,
  phoneNumber:string,
  nationality:string,
  email:string,
  passportNumber:string,
  password:string,
  profile_pic:string
) => {
  return {
    name: name,
    lastName: lastName,
    phoneNumber: parseInt(phoneNumber),
    nationality: nationality,
    email: email,
    passportNumber: parseInt(passportNumber),
    password: password,
    profile_pic: profile_pic
  }
}

export const handleFileChange = (event: ChangeEvent<HTMLInputElement>, setImageBase64: (imageBase64: string) => void): void => {
  const files = event.target.files;

  if (!files || files.length === 0) {
    return;
  }

  const file = files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const base64 = reader.result as string;
    setImageBase64(base64);
  };

  reader.onerror = () => {
    return;
  };

  reader.readAsDataURL(file);
};