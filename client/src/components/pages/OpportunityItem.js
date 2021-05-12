import React from 'react'
import {useHistory} from 'react-router-dom'

const OpportunityItem = ({opportunity}) => {
    let history = useHistory();
    const onClickHandler = () => {
        history.push({
            pathname: '/signUp',
            state: {
                id: opportunity._id,
                title:opportunity.title
            }
        });
    }

    return (
        <div className='card'>
            <h3>Title: {opportunity.title}</h3>
            <div className='grid-3'>
                <h4>Description: {opportunity.description}</h4>
                <h4>Location: {opportunity.location}</h4>
            </div>
            <div className='grid-3'>
                <h4>Start Date : {opportunity.startDate}</h4>
                <h4>End Date : {opportunity.endDate}</h4>
                <h4>Time commitment: {opportunity.noOfHours} hours</h4>
            </div>
            <input type='submit' className='btn btn-primary' value='Sign up'
                onClick={onClickHandler}
            />
        </div>
    )
}

export default OpportunityItem
