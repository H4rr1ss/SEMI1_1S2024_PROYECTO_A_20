'use client'
import { useRouter } from 'next/navigation'

const Destinations = () =>{
  const router = useRouter();

  return (
    <div>
      <h1>Destinos Page</h1>
    </div>
  )
}

export default Destinations;


/*
'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button className='mt-20 text-black' type="button" onClick={() => router.push('/admin')}>
      Dashboard
    </button>
  )
}
*/