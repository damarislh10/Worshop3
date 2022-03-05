import { types } from '../types/types'

const loginReducers = (state={}, action) => {
    switch(action.type) {
        case types.login:
            return{
                ...state
            }
        case types.logout:
            return{}
            
        default:
            return state;
    }
}

export default loginReducers
