import React , { useReducer } from 'react';
import OpportunityContext from './opportunityContext';
import opportunityReducer from './opportunityReducer';
import axios from 'axios';
import {
    ADD_OPPORTUNITY,
    GET_OPPORTUNITY,
    OPPORTUNITY_ERROR,
    CLEAR_MESSAGE,
    ADD_USER,
    USER_ERROR
} from '../types'


const OpportunityState = props => {
    const initialState = {
        opportunity:'',
        opportunities : [],
        newUser:'',
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
            // console.log(res)
            dispatch({ type: ADD_OPPORTUNITY , payload: res.data.msg.opportunity });
        } catch (err) {
            // console.log(err)
            dispatch({ type: OPPORTUNITY_ERROR, payload: err.message })
        }
    }

    const getOpportunities = async() => {
        try {
            const res = await axios.get('/api/opportunities');
            // console.log(res)
            dispatch({ type: GET_OPPORTUNITY , payload: res.data });
        } catch (err) {
            // console.log(err)
            dispatch({ type: OPPORTUNITY_ERROR, payload: err.message })
        }
    }

    const addUser = async user =>{
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/users' , user, config);
            // console.log(res)
            dispatch({ type: ADD_USER , payload: res.data.msg });
        } catch (err) {
            // console.log(err)
            dispatch({ type: USER_ERROR, payload: err.message })
        }
    }


    const clearMessage = () => {
        dispatch({type: CLEAR_MESSAGE})
    }

    return (
        <OpportunityContext.Provider
        value= {{
            opportunities: state.opportunities,
            error:state.error,
            loading:state.loading,
            newUser:state.newUser,
            addOpportunity ,
            getOpportunities,
            clearMessage,
            addUser  
        }}
        >
           {props.children}
        </OpportunityContext.Provider>
    )
};

export default OpportunityState
