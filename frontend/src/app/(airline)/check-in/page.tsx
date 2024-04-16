import Image from 'next/image';
import './check-in.css'

export default function Check_in() {
  return (
    <div className="check-page mt-14 flex flex-col items-center relative">

      <div className="header bg-red-400 w-full h-72"></div>

      <div className="box-ckeckIn rounded-3xl absolute">
        <h1 className="title ml-12 rounded-bl-lg rounded-br-lg w-28 h-8 text-center">
          Check-In
        </h1>

        <div className="inputs h-44 flex flex-col justify-center items-center gap-y-12 mt-9">
          <div className="input-field">
              <input
                  required
              />
              <label>Código de reserva</label>
          </div>
          <div className="input-field">
              <input
                  required
              />
              <label>Apellido</label>
          </div>
        </div>

        <div className="box-button w-full flex justify-center mt-4">
        <button
          className="px-4 py-3 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
        >
          Guardar Cambios
        </button>
        </div>
      </div>

      <div className="reminder h-40 w-full border-t-4 border-b-4 border-dashed border-gray-300 flex flex-col items-center justify-center">
        <h1>Recuerda que:</h1>
        <p>
          Al realizar el check-in, confirmas tu presencia en el vuelo, lo que permite a la aerolinea planificar
          con precisión la capacidad y la logística del vuelo.
        </p>
      </div>
    </div>
  )
}
