import Cards from "./Cards"
import React, { children, useEffect, useState } from 'react'
//import usuarios from '../../helpers/usuarios'

    const ListCards = () => {
        const [usuarios, setUsuarios] = useState([])
        const [error, setError] = useState(false)
        //console.log(usuarios[0].name.last)
         useEffect(() => {
             const getUsuario = async() => {
                 try {
                    const res = await fetch ("https://randomuser.me/api/?results=500")
                    const data = await res.json()
                    //console.log(data.results)
                    setUsuarios(data.results)
                    setError(false)

                 } catch (err) {
                     console.log(err)
                     setError(true)
                 }
             }
             getUsuario()
         }, [])
    if (error){
        return <h1 class="alert alert-success" role="alert">
                  Error al ingresar al api <a href="https://randomuser.me" class="alert-link">Verifique el link</a>
               </h1>
    }
    return (
        <div className="container">
         <div className="row">
         { usuarios.map(user => (
             <div className="col-md-4" key={user.login.uuid}>
                  <Cards user={user}/>
            </div>
         ))}
                 
             </div>
         </div>

    )
}
export default ListCards