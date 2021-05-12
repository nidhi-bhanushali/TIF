import React, {useContext , useEffect, useState} from 'react'
import OpportunityContext from '../../context/opportunities/opportunityContext'


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
                    <h4 key = {opportunity._id}>{opportunity.title}</h4>
                )): <h3>Loading</h3> 
            }
        </div>
    )
}

export default ViewOpportunities
