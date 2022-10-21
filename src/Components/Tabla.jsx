import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApi } from '../redux/Actions/ActionUser'
import './Tabla.css'

export default function Tabla() {
    const api = useSelector(state => state.User)

    console.log(api);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getApi())
    }, [dispatch])


    return (
        <div className='table'>
            <h1>nuestros clientes</h1>
        
            <div className='container-table'>
                <table className='encabezado'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Especie</th>
                            <th>Genero</th>
                        </tr>
                    </thead>
                    { api.data?.slice(0,6).map((el, i) => {
                        return (
                            <tr key={i}>
                                <td>{el.name}</td>
                                <td>{el.status}</td>
                                <td>{el.species}</td>
                                <td>{el.gender}</td>
                            </tr>
                            
                        )
                        
                    })}
                </table>
            </div>
        </div>
    )
}
