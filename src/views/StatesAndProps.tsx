import React, {useState} from "react"

type TiposdeProps = {
  nombre: string,
  edad: number
}

const StatesAndProps:React.FunctionComponent<TiposdeProps> = (props) => {
  const [edad_inicial] = useState(props.edad)
  const [age_variable, set_age_variable] = useState(props.edad)
  const [color, setColor] = useState("blue")

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
      <p className="parrafo_edad">Tu edad el día de hoy es <span className="edad">{age_variable}</span></p>
      <button style={{backgroundColor: `${color}`}}className="commonBtn highlightBtn" onClick={()=> QuePaseUnAnio()}>Que pase un año</button>
      <button className="commonBtn" onClick={()=> resetAge()}>resetear año</button>
      <button className="commonBtn" onClick={()=> setColor("pink")}>cambiar color</button>
      <p>Tu edad es <span className="edad">{age_variable}</span></p>
    </>
  )
}

export default StatesAndProps