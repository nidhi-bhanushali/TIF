import {
    ADD_OPPORTUNITY,
    OPPORTUNITY_ERROR,
    GET_OPPORTUNITY,
    ADD_USER,
    USER_ERROR,
    CLEAR_MESSAGE 
} from '../types';

export default (state , action) => {
    switch(action.type) {
        case GET_OPPORTUNITY:
            return{
                ...state,
                opportunities: action.payload,
                loading: false
            }
        case ADD_OPPORTUNITY:
        return{
            ...state,
            opportunity: action.payload,
            loading: false
        };
        case OPPORTUNITY_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case ADD_USER:
            return{
                ...state,
                user:action.payload,
                loading: false
            }
        case USER_ERROR:{
            return{
                ...state,
                error: action.payload
            }
        }
        case CLEAR_MESSAGE:
            return{
                loading : true,
                error: null , 
                opportunity:'', 
                opportunities:[]
            }
        default:
            return state;
    }
}