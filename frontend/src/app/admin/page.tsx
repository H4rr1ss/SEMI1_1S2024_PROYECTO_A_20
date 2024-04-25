"use client";
import {
  handleImageBase64,
  handleRecordFlight,
} from "@/utils/functions/admin.funcs";
import InputAdmin from "@/components/ui/input-admin/Input-admin";
import { useState } from "react";
import Link from "next/link";
import "./admin.css";

export default function Admin() {
  // Detalles vuelo
  const [destinationCountry, setDestinationCountry] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [originCountry, setOriginCountry] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");
  const [boardingTime, setBoardingTime] = useState<string>("");
  const [arrivalTime, setArrivalTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [typeFlight, setTypeFlight] = useState<string>("");

  // Detalles destino
  const [imageBase64, setImageBase64] = useState<string>("");
  const [imageName, setImageName] = useState<string>("");
  const [description, setDescription] = useState("");
  const [place1, setPlace1] = useState("");
  const [description1, setDescription1] = useState("");
  const [place2, setPlace2] = useState("");
  const [description2, setDescription2] = useState("");
  const [preventionRecommendations, setPreventionRecommendations] = useState("");

  const handleRegisterFlight = () => {
    handleRecordFlight(
      destinationCountry,
      destination,
      originCountry,
      origin,
      boardingTime,
      arrivalTime,
      date,
      price,
      typeFlight,
      preventionRecommendations,
      description,
      place1,
      description1,
      place2,
      description2,
      imageName,
      imageBase64
    )
      .then(async (response) => {
        const data = await response.json();
        console.log("Vuelo registrado con éxito");
      })
      .catch(() => {
        console.log("Ocurrió un error al registrar el vuelo");
      });
  };

  return (
    <div className="flex flex-col items-center">

      <h1 className="header-register-flight">REGISTRO DE VUELO</h1>
      <div className="container-details-flight flex flex-col items-center rounded-2xl">
        <div className="w-full rounded-3xl">
          <h1 className="header w-36 h-9 ml-8 flex justify-center items-center">
            Detalles vuelo
          </h1>
        </div>
        <div className="flex h-3/4 w-5/6 flex-wrap content-center gap-x-16 gap-y-9 justify-center">
          <InputAdmin
            inputType="text"
            text="País Destino"
            value={destinationCountry}
            setInfo={setDestinationCountry}
          />
          <InputAdmin
            inputType="text"
            text="Destino"
            value={destination}
            setInfo={setDestination}
          />
          <InputAdmin
            inputType="text"
            text="País Origen"
            value={originCountry}
            setInfo={setOriginCountry}
          />
          <InputAdmin
            inputType="text"
            text="Origen"
            value={origin}
            setInfo={setOrigin}
          />
          <InputAdmin
            inputType="text"
            text="Hora Abordaje"
            value={boardingTime}
            setInfo={setBoardingTime}
          />
          <InputAdmin
            inputType="text"
            text="Hora Arribo"
            value={arrivalTime}
            setInfo={setArrivalTime}
          />
          <InputAdmin
            inputType="date"
            text="Fecha"
            value={date}
            setInfo={setDate}
          />
          <InputAdmin
            inputType="number"
            text="Precio Base"
            value={price}
            setInfo={setPrice}
          />
        </div>
        <div className="relative w-64">
          <select
            className="text-black block appearance-none w-full bg-transparent border hover:border-gray-900 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={typeFlight}
            onChange={(event) => setTypeFlight(event.target.value)}
          >
            <option value="" disabled selected>
              Tipo de vuelo
            </option>
            <option>Economico</option>
            <option>Premium</option>
            <option>Negocios</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-6-6-1 1 7 7 7-7-1-1z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container-details-destination flex flex-col items-center rounded-2xl mt-12">
        <div className="w-full rounded-3xl">
          <h1 className="header w-40 h-9 ml-8 flex justify-center items-center">
            Detalles destino
          </h1>
        </div>
        <div className="flex flex-col items-center h-3/4 w-5/6">
          <label
            htmlFor="fileInput"
            className="custom-file inline-block cursor-pointer w-2/5"
          >
            <span className="text-center">Seleccionar Imagen</span>
            <input
              id="fileInput"
              type="file"
              accept="imageBase64/*"
              className="hidden"
              onChange={(event) =>
                handleImageBase64(event, setImageBase64, setImageName)
              }
            />
          </label>
          <div className="w-full mt-10 flex flex-col items-center">
            <div className="textArea-field w-full mb-20">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label>Descripción Destino</label>
            </div>

            <InputAdmin
              inputType="text"
              text="Lugar Turistico"
              value={place1}
              setInfo={setPlace1}
            />

            <div className="textArea-field w-full mt-5 mb-10">
              <textarea
                value={description1}
                onChange={(e) => setDescription1(e.target.value)}
              />
              <label>Descripción</label>
            </div>

            <InputAdmin
              inputType="text"
              text="Lugar Turistico"
              value={place2}
              setInfo={setPlace2}
            />

            <div className="textArea-field w-full mt-5 mb-24">
              <textarea
                value={description2}
                onChange={(e) => setDescription2(e.target.value)}
              />
              <label>Descripción</label>
            </div>
            <div className="textArea-field w-full">
              <textarea
                value={preventionRecommendations}
                onChange={(e) => setPreventionRecommendations(e.target.value)}
              />
              <label>Recomendaciones preventivas</label>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons mt-14 mb-20 w-4/12 flex justify-between">
        <button
          className="px-4 py-3 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
          onClick={handleRegisterFlight}
        >
          Registrar vuelo
        </button>
        <Link
          className="b-out px-14 py-3 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
          href="/"
        >
          Salir
        </Link>
      </div>
    </div>
  );
}
