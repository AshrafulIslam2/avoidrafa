import './globals.css'
import { Bebas_Neue } from 'next/font/google'
import Navigation from '@/Components/shared/Navigation'
import Footer from '@/Components/shared/Footer'


const Bebas_Neues = Bebas_Neue({ weight: "400", preload: false })


export const metadata = {
  title: 'Avoid Rafa',
  description: 'Discover talented Bangladeshi singer showcasing captivating melodies and soulful performances, offering a delightful musical journey. Explore the vibrant world of Bangladeshi music, immersed in rich cultural heritage and diverse genres. Indulge in a captivating musical experience while exploring the talents of this remarkable artist, whose unique voice and enchanting performances will leave you captivated.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body cz-shortcut-listen="true" className={Bebas_Neues.className} >
        <Navigation />
          {children}
         
        <Footer/>
      </body>
    </html>
  )
}
