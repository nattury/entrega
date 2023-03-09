import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Form = () => {

    const [client, setClient] = useState({
        name: "",
        movieToRent: "",
        movieDirector: ""
    });
    const [mostrar, setShow] = useState(false);
    const [errorForm , setErrorForm] = useState(false);

    const formHandler = (e) => {
        e.preventDefault()
        validations();
    }

    const validations = () => {
        let noLeadingSpaces = true;
        client.name.trimStart().length == client.name.length ? null : noLeadingSpaces = false ;
        let a = client.name.trimStart().length;
        let b = client.name.length;
        console.log(a);
        console.log(b)
            
        
        if(client.name.length >= 3 && client.movieToRent.length >= 6 && client.movieDirector.length >= 6 && noLeadingSpaces) {
            setShow(true);
            setErrorForm(false);
        } else {
            setShow(false);
            setErrorForm(true);
        }
        
    }
    const error = () => "Por favor chequea que la información sea correcta";

  return (
    <>
    <form className='formMovies' onSubmit={formHandler}>
        <label className='labelForm'>¿Cuál es su nombre y apellido? </label>
        <input className='inputForm' type="text" onChange = {(e)=>setClient({...client, name: e.target.value})}/>
        <br />
        <label className='labelForm'>¿Qué pelicula desea alquilar? </label>
        <input className='inputForm'  type="text" onChange = {(e)=>setClient({...client, movieToRent: e.target.value})}/>
        <br />
        <label className='labelForm'>¿Cuál es el director del filme? </label>
        <input className='inputForm'  type="text" onChange = {(e) => setClient({...client, movieDirector: e.target.value})}/>
        <br />
        <button className='SubmitBtn'>Solicitar</button>

        {mostrar ? <Card cliente = {client}/> : null}
        <h3 style={{color: "crimson"}}>{errorForm ? error() : null}</h3>
    </form>
    </>
  )
}

export default Form