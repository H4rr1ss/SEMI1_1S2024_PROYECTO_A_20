'use client'
import { useState } from 'react'
import { newClientLogin, handleFileChange } from '@/utils/functions/login-register.funcs';
import Link from 'next/link';
import './login.css'

const Login = () =>{
  const [isActive, setIsActive] = useState<boolean>(false);

  // inputs Login
  const [l_email, setL_email] = useState<string>('');
  const [l_password, setL_password] = useState<string>('');

  // inputs Register
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [nationality, setNationality] = useState<string>('');
  const [passport, setPassport] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [imageBase64, setImageBase64] = useState<string>('');

  const handleClickRegister = () => {
    const client = newClientLogin(name, lastName, phone, nationality, email, passport, password, imageBase64)
    setName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setNationality('');
    setPassport('');
    setPassword('');
    setImageBase64('');

    console.log(client);
  }

  const handleClickLogin = () => {
    if (!(l_email === "admin" && l_password === "admin")) {
      const newLogin = { email: l_email, password: l_password }
      setL_email('');
      setL_password('');
      console.log(newLogin)
    }
  }

  return (
    <div className='flex flex-col h-screen items-center justify-center text-black'>
      <div className={`container max-w-full relative overflow-hidden ${isActive ? 'active' : ''}`}>
        <div className="form-container sign-up absolute top-0 h-full left-0 w-1/2">
          <div className='lr-form'>
            <h1>Crear Cuenta</h1>
            <div className="flex justify-between w-full">
              <input
                className='w-40'
                type="text"
                placeholder='Nombre'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className='w-40'
                type="text"
                placeholder='Apellido'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex justify-between w-full">
              <input
                className='w-40'
                type="number"
                placeholder='Número de teléfono'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                className='w-40'
                type="text"
                placeholder='Nacionalidad'
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>
            <input
              className='w-full'
              type="email"
              placeholder='Correo Electronico'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='w-full'
              type="number"
              placeholder='No. Pasaporte'
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
            />
            <input
              className='w-full'
              type="password"
              placeholder='Contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="fileInput" className="custom-file relative inline-block cursor-pointer w-4/5">
              <span>Clic para seleccionar foto de perfil</span>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileChange(e, setImageBase64)}
              />
            </label>
            <button onClick={handleClickRegister}>Registrarse</button>
          </div>
        </div>

        <div className="form-container sign-in absolute top-0 h-full left-0 w-1/2">
          <div className='lr-form'>
            <h1>Inicio de sesión</h1>
            <input
              className='w-full'
              type="email"
              placeholder='Correo Electronico'
              value={l_email}
              onChange={(e) => setL_email(e.target.value)}
            />
            <input
              className='w-full'
              type="password"
              placeholder='Contraseña'
              value={l_password}
              onChange={(e) => setL_password(e.target.value)}
            />
            <Link href={l_email === 'admin' && l_password === 'admin' ? '/admin' : ''} className="Link" onClick={handleClickLogin}>Ingresar</Link>
          </div>
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
              <button className="btn-hidden" onClick={() => setIsActive(!isActive)}>
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