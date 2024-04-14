'use client'
import InputAdmin from '@/components/ui/input-admin/Input-admin';
import './admin.css'
import { useState } from 'react';


export default function Admin(){
  const [destinationCountry, setDestinationCountry] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [originCountry, setOriginCountry] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");
  const [boardingTime, setBoardingTime] = useState<string>("");
  const [arrivalTime, setArrivalTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [typeFlight, setTypeFlight] = useState<string>("");

  const handle = () => {
    console.log(destinationCountry);
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

        <div className="container-details-destination flex flex-col items-center rounded-2xl mt-12 bg-green-300">
          <div className="w-full rounded-3xl">
            <h1 className='header w-40 h-9 ml-8 flex justify-center items-center'>Detalles destino</h1>
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
        <div className="buttons mt-14 mb-20 w-4/12 flex justify-between">
          <button
            className="px-4 py-3 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
            onClick={handle}
          >
            Registrar vuelo
          </button>
          <button
            className="px-14 py-3 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
            onClick={handle}
          >
            Salir
          </button>
        </div>
      </div>
  );
}