import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMicroservicio } from './microserviciosAction'

const MicroserviciosComponent = () => {
    const microservicioFromReducer = useSelector((state) => state.microserviciosReducer.microservices)
    const [microservicios, setMicroservicios] = useState([])
    const [newMicroService, setNewMicroService] = useState({})
    const dispatch = useDispatch()


    const addObjMicroservicioHandler = (e) => {
        setNewMicroService({
            ...newMicroService,
            [e.target.name]: e.target.value,
        })
    }

    const addNewMicroservice = () => {
        console.log(microservicios)
        microservicios.push(newMicroService);
        console.log(microservicios)
        dispatch(addMicroservicio(microservicios))
    }

    useEffect(() => {
        setMicroservicios([
            ...microservicioFromReducer,
        ])
    },[microservicioFromReducer])

    return (
        
        <div>
            <input type="text" name='name' onChange={(e) => addObjMicroservicioHandler(e)} />
            <input type="text" name='status' onChange={(e) => addObjMicroservicioHandler(e)} />
            <button onClick={addNewMicroservice}>enviar</button>
            <div>
            {microservicios.map ((m,i) => (
                <div key={i}>
                    <h2 >{m.name}</h2>
                    <h2 >{m.status}</h2>
                    <button>borrar</button>
                </div>
            ))}
            </div>
        </div>

    )
}

export default MicroserviciosComponent
