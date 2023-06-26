import "../styles/globals.css"
import Nav from "@/components/Nav"

export const metadata = {
  title: 'FlightBook',
  description: 'Task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Nav />
      {children}
      </body>
    </html>
  )
}
