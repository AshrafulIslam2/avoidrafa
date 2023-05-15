import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
