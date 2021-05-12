import React, {useContext , useEffect, useState} from 'react'
import OpportunityContext from '../../context/opportunities/opportunityContext'
import OpportunityItem from './OpportunityItem'


const ViewOpportunities = () => {
    // const [loading , setLoading] = useState(true)
    const opportunityContext = useContext(OpportunityContext)
    const {getOpportunities , opportunities , clearMessage , loading} = opportunityContext

    useEffect(() => {
        if(opportunities){
            clearMessage();
        }
        getOpportunities()
    }, [])

    return (
        <div>
            {
                (opportunities !== null && !loading) ? opportunities.map(opportunity => (
                    <OpportunityItem key={opportunity._id} opportunity = {opportunity}/>
                )): <h3>Loading</h3> 
            }
        </div>
    )
}

export default ViewOpportunities
