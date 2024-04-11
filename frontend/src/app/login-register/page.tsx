'use client'
import { useState } from 'react'
import './login.css'


const Login = () =>{
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='flex flex-col h-screen items-center justify-center text-black'>
      <div className={`container max-w-full relative overflow-hidden ${isActive ? 'active' : ''}`}>
        <div className="form-container sign-up absolute top-0 h-full left-0 w-1/2">
          <form>
            <h1>Crear Cuenta</h1>
            <div className="flex justify-between w-full">
              <input className='w-40' type="text" placeholder='Nombre' />
              <input className='w-40' type="text" placeholder='Apellido' />
            </div>
            <div className="flex justify-between w-full">
              <input className='w-40' type="text" placeholder='Número de teléfono' />
              <input className='w-40' type="text" placeholder='Nacionalidad' />
            </div>
            <input className='w-full' type="email" placeholder='Correo Electronico' />
            <input className='w-full' type="number" placeholder='No. Pasaporte' />
            <input className='w-full' type="password" placeholder='Contraseña' />
            <label htmlFor="fileInput" className="custom-file relative inline-block cursor-pointer w-4/5">
              <span>Clic para seleccionar foto de perfil</span>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </label>
            <button>Registrarse</button>
          </form>
        </div>

        <div className="form-container sign-in absolute top-0 h-full left-0 w-1/2">
          <form>
            <h1>Inicio de sesión</h1>
            <input className='w-full' type="email" placeholder='Correo Electronico' />
            <input className='w-full' type="password" placeholder='Contraseña' />
            <button>Ingresar</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Bienvenido, Ingresa ahora!</h1>
              <p>Ingresa tus datos personales para utilizar todas las funciones de Kehuel Airlines</p>
              <button className="btn-hidden" onClick={() => {setIsActive(!isActive);}}>
                Ingresar
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hola, Únete ahora!</h1>
              <p>Registra tus datos personales para utilizar todas las funciones de Kehuel Airlines</p>
              <button className="btn-hidden" onClick={() => {setIsActive(!isActive);}}>
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;