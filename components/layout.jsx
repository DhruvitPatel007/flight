
import Footer from "@/components/Footer"
import "../styles/globals.css"
import Nav from "@/components/Nav"
import Navfoot from "@/components/NavFooter"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Nav />
      {children}
      <Footer/>
      <Navfoot />
      </body>
    </html>
  )
}
