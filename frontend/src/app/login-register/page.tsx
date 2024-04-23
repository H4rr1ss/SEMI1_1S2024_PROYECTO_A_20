"use client";
import {
  handleFileChange,
  handleRegisterClient,
  handleLoginClient,
} from "@/utils/functions/login-register.funcs";
import { useClientStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./login.css";

const Login = () => {
  const router = useRouter();
  const clientStore = useClientStore();

  const [isActive, setIsActive] = useState<boolean>(false);

  // inputs Login
  const [l_email, setL_email] = useState<string>("");
  const [l_password, setL_password] = useState<string>("");

  // inputs Register
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [passport, setPassport] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [imageBase64, setImageBase64] = useState<string>("");
  const [imageName, setImageName] = useState<string>("");

  const handleClickRegister = () => {
    handleRegisterClient(
      name,
      lastName,
      email,
      passport,
      phone,
      nationality,
      password,
      imageBase64,
      imageName
    )
      .then(async (response) => {
        // Aquí puedes obtener el cuerpo de la respuesta como JSON
        const data = await response.json();
        console.log("Usuario registrado con éxito", data);
      })
      .catch((error) => {
        console.error("Ocurrió un error al registrar el usuario", error);
      });

    setName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setNationality("");
    setPassport("");
    setPassword("");
    setImageBase64("");
  };

  const handleClickLogin = () => {
    if (l_email === "admin" && l_password === "admin") {
      router.push("/admin");
      return;
    }

    handleLoginClient(l_email, l_password)
      .then(async (response) => {
        const data = await response.json();
        console.log("Usuario logeado con éxito", data);

        // Setear el objeto en el estado global
        clientStore.setStore_Client(data);
        console.log(clientStore.getStore_getInfoProfile());

        // Redireccionar a la página de perfil
        router.push("/");
      })
      .catch((error) => {
        console.error("Ocurrió un error al logear el usuario", error);
      });

    // Clear inputs
    setL_email("");
    setL_password("");
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center text-black">
      <div
        className={`container max-w-full relative overflow-hidden ${
          isActive ? "active" : ""
        }`}
      >
        <div className="form-container sign-up absolute top-0 h-full left-0 w-1/2">
          <div className="lr-form">
            <h1>Crear Cuenta</h1>
            <div className="flex justify-between w-full">
              <input
                className="w-40"
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-40"
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex justify-between w-full">
              <input
                className="w-40"
                type="number"
                placeholder="Número de teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                className="w-40"
                type="text"
                placeholder="Nacionalidad"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>
            <input
              className="w-full"
              type="email"
              placeholder="Correo Electronico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full"
              type="number"
              placeholder="No. Pasaporte"
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
            />
            <input
              className="w-full"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="fileInput"
              className="custom-file relative inline-block cursor-pointer w-4/5"
            >
              <span>Clic para seleccionar foto de perfil</span>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  handleFileChange(e, setImageBase64, setImageName)
                }
              />
            </label>
            <button onClick={handleClickRegister}>Registrarse</button>
          </div>
        </div>

        <div className="form-container sign-in absolute top-0 h-full left-0 w-1/2">
          <div className="lr-form">
            <h1>Inicio de sesión</h1>
            <input
              className="w-full"
              type="email"
              placeholder="Correo Electronico"
              value={l_email}
              onChange={(e) => setL_email(e.target.value)}
            />
            <input
              className="w-full"
              type="password"
              placeholder="Contraseña"
              value={l_password}
              onChange={(e) => setL_password(e.target.value)}
            />
            <button onClick={handleClickLogin}>Ingresar</button>
          </div>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Bienvenido, Ingresa ahora!</h1>
              <p>
                Ingresa tus datos personales para utilizar todas las funciones
                de Kehuel Airlines
              </p>
              <button
                className="btn-hidden"
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                Ingresar
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hola, Únete ahora!</h1>
              <p>
                Registra tus datos personales para utilizar todas las funciones
                de Kehuel Airlines
              </p>
              <button
                className="btn-hidden"
                onClick={() => setIsActive(!isActive)}
              >
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
