import { ADD_MICROSERVICIO } from "./microserviciosAction"


const initialState = {
    microservices: []

}

const microserviciosReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MICROSERVICIO:
            return{
                ...state,
                microservices: action.payload.microservices,
            }
        default:
            return state
    }
}

export default microserviciosReducer