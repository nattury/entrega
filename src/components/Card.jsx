import React from 'react'

const Banner = (props) => {
  return (
    <div 
    style={{
        color: "black",
        backgroundColor: "pink",
        width: "50%",
        border: "3px solid crimson",
        borderRadius: "5px",
        margin: "10px",
        padding: "5px"
    }}>
        <p>CONFIRMACIÓN</p>
        <p>Nombre: {props.cliente.name}</p>
        <p>Película: {props.cliente.movieToRent}</p>
        <p>Director: {props.cliente.movieDirector}</p>
    </div>
  )
}

export default Banner