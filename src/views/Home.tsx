import React from "react"

const Home = () => {

  const listaSupermercado = [
    "2kg de naranja",
    "1kg de limones",
    "2 litros de leche",
    "1 corrector"
  ]


  const imprimirLista = () => {
    return listaSupermercado.map((hola) => 
      (
        <li>{hola}</li>
      )
    )
  }

  return (
    <>
      No te olvides de comprar:
      <ul>
      {imprimirLista()}
      </ul>
    </>
  )
}

export default Home