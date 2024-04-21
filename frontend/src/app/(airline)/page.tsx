import './initialP.css'
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex-grow'>
      {/* CARROUSEL */}
      <div className="slider-box bg-blue-600">
        <ul>
          <li>
            <Image
              src="/imas/1.jpg"
              alt="slice1"
              layout="fill"
            />

            <div className="text">
              <h2>Tu viaje comienza aquí</h2>
            </div>
          </li>
          <li>
            <Image
              src="/imas/2.webp"
              alt="slice2"
              layout="fill"
            />
            <div className="text">
              <h2>Los mejores vuelos con Kehuel Airlines</h2>
            </div>
          </li>
          <li>
            <Image
              src="/imas/3.jpg"
              alt="slice3"
              layout="fill"
            />
            <div className="text">
              <h2>Prepárete para volar alto</h2>
            </div>
          </li>
          <li>
            <Image
              src="/imas/4.jpg"
              alt="slice4"
              layout="fill"
            />
            <div className="text">
              <h2>Explora el encanto y la belleza de la costa Oeste.</h2>
            </div>
          </li>
        </ul>
      </div>

      <div className="other-options text-black mt-10">

        <h1 className='text-initial text-center'>Vuela Más por Menos: Vuelos Baratos</h1>

        <div className="options flex justify-around">
          <div className="important-documents flex flex-col items-center justify-center h-80 w-1/4 ">
            <div className="circle flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-text" width="80" height="80" viewBox="0 0 24 24" stroke-width="1" stroke="#F1F0ED" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                <path d="M9 12h6" />
                <path d="M9 16h6" />
              </svg>
            </div>
            <h4>DOCUMENTOS IMPORTANTES</h4>
            <button className="px-9 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
              Ver más
            </button>
          </div>
          <div className="destinations flex flex-col items-center justify-center h-80 w-1/4 ">
            <div className="circle flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="80" height="80" viewBox="0 0 24 24" stroke-width="1" stroke="#F1F0ED" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
            </div>
            <h4>DESTINOS</h4>
            <button className="px-9 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
              Ver más
            </button>
          </div>
          <div className="passenger-rights flex flex-col items-center justify-center h-80 w-1/4 ">
            <div className="circle flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-bank" width="80" height="80" viewBox="0 0 24 24" stroke-width="1" stroke="#F1F0ED" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21l18 0" />
                <path d="M3 10l18 0" />
                <path d="M5 6l7 -3l7 3" />
                <path d="M4 10l0 11" />
                <path d="M20 10l0 11" />
                <path d="M8 14l0 3" />
                <path d="M12 14l0 3" />
                <path d="M16 14l0 3" />
              </svg>
            </div>
            <h4>DERECHOS Y DEBERES DEL PASAJERO</h4>
            <button className="px-9 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
              Ver más
            </button>
          </div>
        </div>

        <div className="about-kehuel text-center">
          <h3>Personaliza tu viaje y disfruta de las mejores ofertas de vuelos</h3>
          <p>
          Personaliza fácilmente tus planes de viaje, y aprovéchate de las opciones más útiles de Kehuel como alertas
          de precios de vuelos, calendario de ofertas y ofertas de reserva anticipada. El sistema de pago seguro de
          Kehuel te ofrece las opciones de pago más seguras y sencillas, incluido el pago con tarjeta de crédito y débito.
          </p>
          <h3>Conozca más sobre nuestra historia, nuestro negocio y nuestras iniciativas de sostenibilidad.</h3>
          <p>
          Kehuel conecta el mundo hacia y a través de nuestro centro global en Guatemala. Operamos aviones modernos,
          eficientes y cómodos, y nuestra fuerza laboral culturalmente diversa ofrece servicios galardonados a nuestros
          clientes en seis continentes todos los días.
          </p>
        </div>
      </div>
    </div>
  )
}
