'use client'
import { handleDisabled, newClient, changePhoto } from '@/utils/functions/ver-editar-perfil.funcs'
import InputProfile from '@/components/ui/input-profile/Input-profile'
import { useState, useEffect, useRef } from 'react'
import './ver-editar-perfil.css'
import { client } from '@/seed/seed'

export default function ViewEditProfile() {
  // Detalles usuario
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passportNumber, setPassportNumber] = useState<string>("");
  const [phoneNumber, setPhone] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [profile_pic, setProfilePic] = useState<string>("https://picsum.photos/200/300");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Funcionalidades
  const [selectedSVG, setSelectedSVG] = useState('');

  useEffect(() => {
    // Asignar el valor de client.name al estado name al cargar la página
    setName(client.name);
    setLastName(client.lastName);
    setEmail(client.email);
    setPassportNumber(client.passportNumber.toString());
    setPhone(client.phoneNumber.toString());
    setNationality(client.nationality)
  }, []);

  const handleClickSaveChanges = () => {
    const Client = newClient(name, lastName, email, passportNumber, phoneNumber, nationality, profile_pic, client.password);
    console.log(Client);
  }

  const handleClickInputSVG = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Hace clic en el input de tipo file
    }
  };

    return (
      <div className="mt-14 mb-20 text-black flex flex-col items-center">
        <h1 className='h1-editProfile'>PERFIL DE USUARIO</h1>
        <div className="editProfile mt-10 w-3/5 flex flex-col items-center ">
          <div className="h-1/2 w-full flex justify-center mb-4 mt-4">
            <div className="w-2/5 flex flex-col justify-center items-center gap-y-1 ml-5">
                <div className="image h-60 w-56" style={{backgroundImage: `url(${profile_pic})`}}></div>
                <input type="file" className="file" ref={fileInputRef} accept="image/*" style={{display: "none"}} onChange={(event) => {changePhoto(event, setProfilePic);}}/>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg icon icon-tabler icon-tabler-settings-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={handleClickInputSVG}>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor" />
                </svg>
            </div>
            <div className="w-3/5 flex flex-col justify-center items-center gap-y-8">
              <div className="flex items-center gap-x-1">
                <InputProfile inputType="text" text="Nombre" value={name} disabled={handleDisabled("name", selectedSVG)} setInfo={setName}/>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg icon icon-tabler icon-tabler-settings-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={() => {setSelectedSVG("name");}}>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor" />
                </svg>
              </div>
              <div className="flex items-center gap-x-1">
                <InputProfile inputType="text" text="Apellido" value={lastName} disabled={handleDisabled("lastName", selectedSVG)} setInfo={setLastName}/>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg icon icon-tabler icon-tabler-settings-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={() => {setSelectedSVG("lastName");}}>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor" />
                </svg>
              </div>
              <div className="flex items-center gap-x-1">
                <InputProfile inputType="text" text="Correo Electronico" value={email} disabled={handleDisabled("email", selectedSVG)} setInfo={setEmail}/>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg icon icon-tabler icon-tabler-settings-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={() => {setSelectedSVG("email");}}>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <InputProfile inputType="number" text="Num. Pasaporte" value={passportNumber.toString()} disabled={handleDisabled("passportNumber", selectedSVG)} setInfo={setPassportNumber}/>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg icon icon-tabler icon-tabler-settings-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={() => {setSelectedSVG("passportNumber");}}>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor" />
            </svg>
          </div>

          <div className="w-full flex justify-evenly mt-10 mb-10">
            <div className="flex items-center gap-x-1">
              <InputProfile inputType="number" text="Num. Telefono" value={phoneNumber.toString()} disabled={handleDisabled("phoneNumber", selectedSVG)} setInfo={setPhone}/>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg icon icon-tabler icon-tabler-settings-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={() => {setSelectedSVG("phoneNumber");}}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor" />
              </svg>
            </div>
            <div className="flex items-center gap-x-1">
              <InputProfile inputType="text" text="Nacionalidad" value={nationality} disabled={handleDisabled("nationality", selectedSVG)} setInfo={setNationality}/>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg icon icon-tabler icon-tabler-settings-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={() => {setSelectedSVG("nationality");}}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor" />
              </svg>
            </div>
          </div>
          <button
            className="px-4 py-3 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
            onClick={handleClickSaveChanges}
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    )
}
