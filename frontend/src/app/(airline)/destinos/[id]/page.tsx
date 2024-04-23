import './detalle.css'
import { destinations } from '@/seed/seed'
import { PropsDestinationDetail, Place } from '@/utils';

interface Props{
  params: {
      id: string;
  }
}

const DetalleDestino = ({ params }: Props) => {
  const { id } = params;
  console.log(destinations)
  const props: PropsDestinationDetail | undefined = destinations.find((destination) => destination.country === decodeURIComponent(id));

  console.log(id)

  if (!props) {
      return <div className='mt-16 text-center text-black'>No se encontró el destino</div>;
  }

return (
  <div className="detalle-destino flex-grow mt-14 w-full h-auto text-black">
    <h3>{props.country}</h3>
    <h1>Tu puerta de entrada a un paraiso</h1>
    <h4>
      Si estas aquí, es porque estás buscando vuelos a {props.country} y déjame
      decirte que estás a punto de embarcarte en una experiencia inolvidable. En kehuel,
      queremos que disfrutes de cada momento, desde que compras tu boleto hasta que
      aterrizas en esta joya de lugar
    </h4>

    <div className="flex justify-around items-center w-full">
      <div className="d-image rounded bg-red-600 w-3/6 h-56" style={{backgroundImage: `url(${props.image})`}}></div>
      <div
        className="flex flex-col gap-1 justify-center items-start w-[280px] h-4/5 bg-white dark:bg-transparent px-4 py-4 shadow-xl rounded-lg"
      >
        <p className="font-semibold text-xl text-gray-600 mb-2">Tags</p>
        <div className="flex flex-wrap gap-2">
          {props.keywords && props.keywords.map((keyword:string, index:number) => (
            <>
              <p
                className="px-3 py-1 text-[12px] bg-[#d9dfe3] max-w-max rounded font-semibold text-[#7281a3] cursor-pointer"
                key={index}
              >
                #{keyword}
              </p>
            </>
          ))}
        </div>
      </div>
    </div>

    <h1>Acerca de {props.name}</h1>
    <h4>{props.description}</h4>

    <div className="d-places-box">
      <h1>Lugares turísticos de {props.name}</h1>
      <div className="d-places flex flex-col mb-12">
        {props.places && props.places.map((place:Place, index:number) => (
          <div key={index} className="d-place">
            <h2>{place.name}</h2>
            <h4>{place.description}</h4>
          </div>
        ))}
      </div>
    </div>

    <div className="d-recommendations mt-20 h-auto flex flex-col items-center justify-center">
      <h1>Recomendaciones</h1>
      <label>{props.preventRecommendations}</label>
    </div>
  </div>
)
}

export default DetalleDestino;