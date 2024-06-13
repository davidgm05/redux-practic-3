export const GET_MICROSERVICIO = "GET_MICROSERVICIO";
export const ADD_MICROSERVICIO = "ADD_MICROSERVICIO";
export const DELETE_MICROSERVICIO = "DELETE_MICROSERVICIO";
export const UPDATE_MICROSERVICIO = "UPDATE_MICROSERVICIO";



export const getMicroservicio = () => {
    return{
        type: GET_MICROSERVICIO,
    }
}

export const addMicroservicio = (microservices) => {
    return{
        type: ADD_MICROSERVICIO,
        payload:{
            microservices,
        }
    }
}

export const deleteMicroservicio = () => {
    return{
        type: DELETE_MICROSERVICIO,
    }
}

export const updateMicroservicio = () => {
    return{
        type: UPDATE_MICROSERVICIO,
    }
}


