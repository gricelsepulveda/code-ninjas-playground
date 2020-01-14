import React from "react"

const Home = (props: any) => {

  function greeter(person: string) {
    return "Hello, " + person;
  }

  let user = "Gricel";

  return (
    <>
      {
        greeter(user)
      }
    </>
  )
}


export default Home