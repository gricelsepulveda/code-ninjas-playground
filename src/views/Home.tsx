import React  from "react"
import StateAndProps from "./StatesAndProps"
import "../styles/general.scss"


const Home = () => {


  return (
    <>
      <StateAndProps nombre="eduardo" edad={24}/>
      <StateAndProps nombre="javi" edad={26}/>
    </>
  )
}

export default Home