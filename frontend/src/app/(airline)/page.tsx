import './initialP.css'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="slider-box bg-blue-500">
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
              <h2>Prepárese para volar alto</h2>
            </div>
          </li>
          <li>
            <Image
              src="/imas/4.jpg"
              alt="slice4"
              layout="fill"
            />
            <div className="text">
              <h2>Explore el encanto y la belleza de la costa Oeste.</h2>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
