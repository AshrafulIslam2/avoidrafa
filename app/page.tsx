import Image from 'next/image'
import avoid from '../public/avoidrafa.png'

export default function Home() {
  return (
    <main>
        <Image src={avoid} alt='avoid-rafa' className='object-cover w-screen h-screen' ></Image>
    </main>
  )
}
