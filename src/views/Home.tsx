import React  from "react"


const Home = () => {

  let lista_bonita:string = "pokemon y slowpokes y postres y rosado"
  
  let nueva_lista_bonita:string[] = lista_bonita.split("y")

  console.log(nueva_lista_bonita)

  const listarDatos = (datos:string[]) => {
    return datos.map((item_del_listado) => (
      <li>{item_del_listado.trim()}</li>
    ))
  }

  return (
    <>
      <ul>
      {listarDatos(nueva_lista_bonita)}
      </ul>
    </>
  )
}

export default Home