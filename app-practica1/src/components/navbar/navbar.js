import { useState } from "react"

const Navbar = () => {
    const [user, setUser] = useState(null)


    const login = () => {
      setUser({id:1,Nombre:"Diegop24"})
    }
    const logout = () => {
      setUser(null)
    }
    return (
        <nav className="navbar navbar-light bg-success">
         <div className="container-fluid">
           <span className="navbar-brand mb-0 fs-4 text-white">User:{user ? user.Nombre : "No identificado"} </span>
           { user
              ? (<button
                type="button"
                className="btn btn-outline-light"
                onClick = {logout}
                >Cerrar Seción
                </button>)
              : (<button
                type="button"
                className="btn btn-outline-light"
                onClick = {login}
                >Iniciar Seción
                </button>)  

           }
           
        </div>
      </nav>
    )
}

export default Navbar 