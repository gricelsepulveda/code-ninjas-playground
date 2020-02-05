import React, {useState} from "react"

const Servicios = () => {

  let mi_lista_de_servicios = [
    "Dibujar", "Planchar", "Hacer clases"
  ]

  const [lista_de_servicios, agregar_nuevo_servicio] = useState(mi_lista_de_servicios)

  const ponleMasServicios = () => {
    let nueva_lista = [...mi_lista_de_servicios]
    nueva_lista.push("armar pitos")
    nueva_lista.push("doblar papeles lustre")
    nueva_lista.push("contar chiste cochinos")
    agregar_nuevo_servicio(nueva_lista)
  }

  const imprimirServicios = () => {
    return lista_de_servicios.map((servicio) => 
      <li>{servicio}</li>
    )
  }
  
  
  return (
    <>
      <ul>
        { imprimirServicios() } 
      </ul>
      <button onClick={() =>  ponleMasServicios()}>añade un nuevo servicio</button>
    </>
  )
}

export default Servicios