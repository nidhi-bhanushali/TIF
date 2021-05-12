import React , {useState} from 'react'

const Home = () => {
    const [opportunity , setOpportunity] = useState({
        title:'',
        description:'',
        location:'',
        email:'',
        startDate:'',
        endDate:'',
        noOfHours:'',
    });

    const {title, description, location, email, startDate, endDate, noOfHours} = opportunity;

    const onChange = e => setOpportunity({...opportunity , [e.target.name] : e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        console.log(opportunity)
        if(title === '' || email === '' || location === '' ||
           description === '' || startDate === '' || endDate === '' || noOfHours ==='') {
            alert('Please enter all fields');
        }
    }

    return (
        <div className="form-container">
            <h1>
                Add New <span className="text-primary">Opportunity</span>
            </h1>
            <form onSubmit = {onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={onChange} value={email}/>
                </div> 
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" onChange={onChange} value={title}/>
                </div>   
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" onChange={onChange} value={location}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" onChange={onChange} value={description}/>
                </div>
                <div className='grid-3'>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" name="startDate" onChange={onChange} value={startDate}/>
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" name="endDate" onChange={onChange} value={endDate}/>
                </div>
                <div className="form-group">
                    <label htmlFor="noOfHours">Time Commitment</label>
                    <input type="number" name="noOfHours" onChange={onChange} value={noOfHours}/>
                </div>
                </div>
                <input type="submit" value="Add" className="btn btn-primary btn-block"/>
            </form>            
        </div>
    )
}

export default Home
