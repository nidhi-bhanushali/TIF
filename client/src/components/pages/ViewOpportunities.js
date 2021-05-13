import React, {useContext , useEffect} from 'react'
import OpportunityContext from '../../context/opportunities/opportunityContext'
import OpportunityItem from './OpportunityItem'


const ViewOpportunities = () => {
    const opportunityContext = useContext(OpportunityContext)
    const {getOpportunities , opportunities , clearMessage , loading} = opportunityContext

    useEffect(() => {
        if(opportunities){
            clearMessage();
        }
        getOpportunities()
         // eslint-disable-next-line
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
