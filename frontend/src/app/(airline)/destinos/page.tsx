'use client'
import DestinationCard from '@/components/ui/destinationCard/DestinationCard'
import './destinations.css'
import { destinations } from '@/seed/seed'

const Destinations = () =>{

  return (
    <div className="destinatios-page mt-14 flex flex-col items-center h-auto relative flex-grow">
      <div className="header bg-red-400 w-full h-72">
        <h2>Destinos</h2>
      </div>

      <div className="box-destinations grid grid-cols-2 gap-y-10 place-items-center">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            url={destination.image}
            country={destination.country}
            city={destination.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Destinations;