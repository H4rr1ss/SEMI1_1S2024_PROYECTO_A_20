export const handleDisabled = (id: string, selectedSVG:string) => {
  switch (selectedSVG) {
    case "name":
    case "lastName":
    case "email":
    case "passportNumber":
    case "phone":
    case "nationality":
      return id === selectedSVG;
    default:
      return false;
  }
};

export const newClient = (
  name:string,
  lastName:string,
  email:string,
  passportNumber:string,
  phoneNumber:string,
  nationality:string,
  profile_pic:string,
  password:string
) => {
  return {
    name: name,
    lastName: lastName,
    email: email,
    passportNumber: parseInt(passportNumber),
    phoneNumber: parseInt(phoneNumber),
    nationality: nationality,
    profile_pic: profile_pic,
    password: password,
  }
}