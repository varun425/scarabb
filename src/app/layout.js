import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Scarab | The Ancient DAO',
  description: 'Scarab DAO is a decentralized autonomous organization (DAO) that plays a pivotal role in the ever-evolving landscape of blockchain and decentralized governance. Established as a robust and professional platform for collective decision-making and governance, Scarab DAO offers a diverse ecosystem where participants can engage in a variety of activities, including investment proposals, voting on proposals, investing funds, and sharing in the profits generated.',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="">{children}</body>
    </html>
  )
}
