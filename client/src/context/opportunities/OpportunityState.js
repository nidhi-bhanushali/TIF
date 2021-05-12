import React , { useReducer } from 'react';
import OpportunityContext from './opportunityContext';
import opportunityReducer from './opportunityReducer';
import axios from 'axios';
import {
    ADD_OPPORTUNITY,
    GET_OPPORTUNITY,
    OPPORTUNITY_ERROR
} from '../types'


const OpportunityState = props => {
    const initialState = {
        opportunities : [],
        error: null,
        loading : true
    };

    
    const [state, dispatch] = useReducer(opportunityReducer , initialState);

    const addOpportunity = async opportunity =>{
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/opportunities' , opportunity, config);
            console.log(res)
            dispatch({ type: ADD_OPPORTUNITY , payload: res.data.msg.opportunity });
        } catch (err) {
            console.log(err)
            dispatch({ type: OPPORTUNITY_ERROR, payload: err.message })
        }
    }

    return (
        <OpportunityContext.Provider
        value= {{
            opportunities: state.opportunities,
            error:state.error,
            loading:state.loading,
            addOpportunity ,
            // filterNews,
            // clearFilter,
            // getNews  
        }}
        >
           {props.children}
        </OpportunityContext.Provider>
    )
};

export default OpportunityState
