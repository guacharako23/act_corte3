import React from 'react';

const Formulario = () => {
    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [lista, setLista] = React.useState([])
    const registrarDatos=(e)=>{
        nombre.split('').join('')
        e.preventDefault();
        if (!nombre.trim()) {
            alert('Ingrese nombre')
            return
        }
        if (!apellido.trim()) {
            alert('Ingrese apellido')
            return
        }
        setLista([
            ...lista,
            {nombre:nombre, apellido:apellido}
        ])
        e.target.reset()
        setNombre('')
        setApellido('')
    }
    
    const eliminado = (indice) => {
        var validar = window.confirm(`Se eliminara el registro ${indice.nombre}, ¿Desea continuar?`)
        if (validar) {
          const nuevoArray = lista.slice()
          const index = nuevoArray.indexOf(indice)
          if (index > -1) {
            nuevoArray.splice(index, 1)
            setLista(nuevoArray)
          }
        }
      }

    
    
  return (
    <div className='container'>
        <h2>Formulario</h2>
        <form onSubmit={registrarDatos}>
            <input type="text" 
            placeholder='Ingrese su nombre'
            className='form-control mb-3'
            onChange={(e)=>setNombre(e.target.value)}/>
            <input type="text" 
            placeholder='Ingrese su Apellido'
            className='form-control mb-3'
            onChange={(e)=>setApellido(e.target.value)}/>
            <div className='d-grip gap-2'>
                <button className='btn btn-outline-primary'
                type='submit'>Registrar</button>
            </div>
        </form>
        <hr />
        <h2>Listado de usuarios</h2>
        
        <hr />
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col' className='text-center'>Nombre</th>
                    <th scope='col' className='text-center'>Apellido</th>
                    <th scope='col' className='text-center'>Acciones</th>
                </tr>
            </thead>
            <tbody id='Body'>
                {
                    lista.map((elemento, index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td className='text-center'>{elemento.nombre}</td>
                            <td className='text-center'>{elemento.apellido}</td>
                            <td className='text-center'>
                                
                                <button type='button' className='btn btn-danger ms-1 me-3' onClick={()=>eliminado(elemento, index)}>Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
       
    </div>
  )
}

export default Formulario