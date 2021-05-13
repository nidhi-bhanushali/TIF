import React , {useState , useContext, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import OpportunityContext from '../../context/opportunities/opportunityContext'


const SignUp = () => {
    const location = useLocation()
    // console.log(location.state)

    const opportunityContext = useContext(OpportunityContext)
    const {addUser , clearMessage, opportunities, error, newUser} = opportunityContext


    useEffect(() => {
        if(opportunities || newUser){
            clearMessage()
        }
        if(error){
            alert('Use another email')
        }
        if(newUser){
            // console.log(newUser)
            alert('User Added')
        }
         // eslint-disable-next-line
    }, [error, newUser])


    const [user , setUser] = useState({
        title:location.state.title,
        email:'',
        phone:'',
        noOfHours:'',
        note:''
    });

   
    const {email , phone , noOfHours , note} = user

    const onChange = e => setUser({...user , [e.target.name] : e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        // console.log(user)
        if(email === '' || phone === '' ||
           note === ''  || noOfHours ==='') {
            alert('Please enter all fields');
        }else{
            addUser({
                email,
                phone,
                note,
                timeCommitment : noOfHours,
                opportunity : location.state.id
            })
        }
    }
    return (
        <div className="form-container">
            <h1>
                Sign <span className="text-primary">Up</span>
            </h1>
            <form onSubmit = {onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={onChange} value={email}/>
                </div> 
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" onChange={onChange} value={phone}/>
                </div>   
                <div className="form-group">
                    <label htmlFor="noOfHours">Time Commitment</label>
                    <input type="number" name="noOfHours" onChange={onChange} value={noOfHours}/>
                </div>
                <div className="form-group">
                    <label htmlFor="note">Motivation to join</label>
                    <textarea type="textarea" name="note" onChange={onChange} value={note}/>
                </div>
                <input type="submit" value="Go ahead" className="btn btn-primary btn-block"/>
            </form>            
        </div>
    )
}

export default SignUp
