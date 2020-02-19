import React, {useState} from "react"

type TiposdeProps = {
  nombre: string,
  edad: number
}

const StatesAndProps:React.FunctionComponent<TiposdeProps> = (props) => {
  const [edad_inicial] = useState(props.edad)
  const [age_variable, set_age_variable] = useState(props.edad)

  const QuePaseUnAnio = () => {
    set_age_variable(age_variable + 1)
  }

  const resetAge = () => {
    set_age_variable(edad_inicial);
  }
  return (
    <>
      <h1>Buenos días {props.nombre}</h1>
      <br/>
      <p>Tu edad el día de hoy es {age_variable}</p>
      <button onClick={()=> QuePaseUnAnio()}>Que pase un año</button>
      <button onClick={()=> resetAge()}>resetear año</button>
    </>
  )
}

export default StatesAndProps