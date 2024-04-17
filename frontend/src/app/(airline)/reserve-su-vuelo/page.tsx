import './reservation.css'

export default function Flight_reservation() {
  return (
    <div className="reserve-page mt-14 flex flex-col items-center relative text-black flex-grow">
      <div className="fr-header w-full h-72"></div>
      <div className="fr-box absolute flex flex-col items-center">
        <div className="fr-stepsForReservation w-11/12 h-12 flex justify-between rounded-l-2xl rounded-r-2xl">
          <div className="step">
            <div className="circle">1</div>
            <label>Detalles vuelo</label>
          </div>
          <div className="step">
            <div className="circle">2</div>
            <label>Selección vuelo</label>
          </div>
          <div className="step">
            <div className="circle">3</div>
            <label>Pagos</label>
          </div>
        </div>

        <div className="fr-content rounded-b-2xl w-5/6 h-5/6">

        </div>
      </div>
    </div>
  )
}
