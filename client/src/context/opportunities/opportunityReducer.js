import {
    ADD_OPPORTUNITY,
    OPPORTUNITY_ERROR,
    GET_OPPORTUNITY 
} from '../types';

export default (state , action) => {
    switch(action.type) {
        // case GET_OPPORTUNITY:
        //     return{
        //         ...state,
        //         opportunities: action.payload,
        //         loading: false
        //     }
        case ADD_OPPORTUNITY:
        return{
            ...state,
            opportunities: action.payload,
            loading: false
        };
        case OPPORTUNITY_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}