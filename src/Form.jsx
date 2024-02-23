import { useState } from 'react'

const Form = () => {
    // const [name, setName] = useState('')
    // const [address, setAddress] = useState('')
    const [usuario, setUsuario] = useState({
        name: '',
        edad: '',
        pokemon: ''
    })
    // console.log(usuario)
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const numRegex = /[0-9]/
        if(usuario.name.length >= 3 && numRegex.test(usuario.edad)){
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }usuario
    }

  return (
    <>
    <div>{usuario.edad} no son nada! Gracias por compartir tu preferencias</div>
    <div>
        {show ? null : 
            <form onSubmit={handleSubmit}>
                <label >Nombre: </label>
                <input type="text" onChange={(event) => setUsuario({...usuario, name: event.target.value})}/>
                <label >Edad</label>
                <input type="number" onChange={(event) => setUsuario({...usuario, edad: event.target.value})}/>
                <label >Pokemon</label>
                <input type="text" onChange={(event) => setUsuario({...usuario, pokemon: event.target.value})}/>
                <button>Enviar</button>
            </form>
        }
        {show ? 
            <>
                <h4>Gracias, {usuario.name}!</h4>
                <h4>Tu pokemon favorito es {usuario.pokemon}.</h4>
            </>
        : <p>Coloque sus datos para que le enviemos una miniatura con su pokemon.</p>}
        {err ? <p style={{color: 'red'}}>Debe colocar la información correctamente</p> : null}
    </div>
    </>
  )
}

export default Form