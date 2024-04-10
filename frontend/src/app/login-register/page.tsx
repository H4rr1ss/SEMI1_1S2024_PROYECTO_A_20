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
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <span>o utiliza tu correo electrónico para registrarte</span>
            <input type="text" placeholder='Nombre' />
            <input type="email" placeholder='Correo Electronico' />
            <input type="password" placeholder='Contraseña' />
            <button>Registrarse</button>
          </form>
        </div>

        <div className="form-container sign-in absolute top-0 h-full left-0 w-1/2">
          <form>
            <h1>Inicio de sesión</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <span>o utiliza tu correo electrónico.</span>
            <input type="email" placeholder='Correo Electronico' />
            <input type="password" placeholder='Contraseña' />
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