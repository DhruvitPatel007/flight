import "../styles/globals.css"
import Nav from "@/components/Nav"
import Navfoot from "@/components/NavFooter"

export const metadata = {
  title: 'FlightBook',
  description: 'Task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container">
      <Nav />
      {children}
      <Navfoot />
      </body>
    </html>
  )
}
