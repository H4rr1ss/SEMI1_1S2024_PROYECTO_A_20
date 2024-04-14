'use client'
import InputAdmin from '@/components/ui/input-admin/Input-admin';
import { useState } from 'react';
import Link from "next/link"
import './admin.css'

export default function Admin(){
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
  const [imageBase64, setImageBase64] = useState<string>('');
  const [description, setDescription] = useState('');
  const [place1, setPlace1] = useState('borrar texto');
  const [description1, setDescription1] = useState('');
  const [place2, setPlace2] = useState('borrar texto');
  const [description2, setDescription2] = useState('');
  const [preventionRecommendations, setPreventionRecommendations] = useState('');


  const handle = () => {
    console.log(destinationCountry);
    console.log(description);
  }

  const handleImageBase64 = (event: any) => {
    try {
      const file = event.target.files?.[0];

      if (file) {
        const reader = new FileReader();

        // Configurar el evento de carga del lector
        reader.onload = function (e) {
          if (e.target && e.target.result) {
            const base64Image = e.target.result as string;

            // Actualizar el estado con el Base64 de la imagen
            setImageBase64(base64Image);
          }
        };

        // Leer el archivo como Base64
        reader.readAsDataURL(file);
      } else {
        console.log("No se ha seleccionado un archivo");
      }
    } catch (error) {
      console.log("Ha ocurrido un error");
    }
  }

  return(
      <div className="flex flex-col items-center">
        <h1 className='header-register-flight'>REGISTRO DE VUELO</h1>
        <div className="container-details-flight flex flex-col items-center rounded-2xl">
          <div className="w-full rounded-3xl">
            <h1 className='header w-36 h-9 ml-8 flex justify-center items-center'>Detalles vuelo</h1>
          </div>
          <div className="flex h-3/4 w-5/6 flex-wrap content-center gap-x-16 gap-y-9 justify-center">
            <InputAdmin inputType="text" text="País Destino" setInfo={setDestinationCountry}/>
            <InputAdmin inputType="text" text="Destino" setInfo={setDestination}/>
            <InputAdmin inputType="text" text="País Origen" setInfo={setOriginCountry}/>
            <InputAdmin inputType="text" text="Origen" setInfo={setOrigin}/>
            <InputAdmin inputType="text" text="Hora Abordaje" setInfo={setBoardingTime}/>
            <InputAdmin inputType="text" text="Hora Arribo" setInfo={setArrivalTime}/>
            <InputAdmin inputType="text" text="Fecha" setInfo={setDate}/>
            <InputAdmin inputType="text" text="Precio Base" setInfo={setPrice}/>
          </div>
          <InputAdmin inputType="text" text="Tipo vuelo" setInfo={setTypeFlight}/>
        </div>

        <div className="container-details-destination flex flex-col items-center rounded-2xl mt-12">
          <div className="w-full rounded-3xl">
            <h1 className='header w-40 h-9 ml-8 flex justify-center items-center'>Detalles destino</h1>
          </div>
          <div className="flex flex-col items-center h-3/4 w-5/6">
            <label htmlFor="fileInput" className="custom-file inline-block cursor-pointer w-2/5">
              <span className='text-center'>Seleccionar Imagen</span>
              <input
                id="fileInput"
                type="file"
                accept="imageBase64/*"
                className="hidden"
                onChange={handleImageBase64}
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

              <h2>{place1}</h2>

              <div className="textArea-field w-full mt-5 mb-7">
                <textarea
                  value={description1}
                  onChange={(e) => setDescription1(e.target.value)}
                />
                <label>Descripción</label>
              </div>

              <h2>{place2}</h2>

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
            onClick={handle}
          >
            Registrar vuelo
          </button>
          <Link
            className="b-out px-14 py-3 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
            href={"/"}
          >
            Salir
          </Link>
        </div>
      </div>
  );
}