import React, {useState} from "react"
import Navbar from "../components/Navbar"
import Servicios from "./Servicios"


const Home = () => {
  const [saludo_inicial, set_saludo_inicial] = useState("Bienvenido por primera vez")

  const cambiarSaludo = () => {
    set_saludo_inicial("Bienvenido otra vez")
  }

  return (
    <>
      <Navbar/>
      <br/>
      <h1>{saludo_inicial}</h1>
      <p>Hola gracias por visitar mi página a continuación conoce mis servicios</p>
      <button onClick={() => cambiarSaludo()}>Gracias por el recibimiento</button>
      <br/>
      <br/>
      <Servicios/>
    </>
  )
}

export default Home