import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import OpportunityState from './context/opportunities/OpportunityState'
import ViewOpportunities from './components/pages/ViewOpportunities'
import {Route , BrowserRouter as Router , Switch} from 'react-router-dom'

function App() {
  return (
    <OpportunityState>
    <Router>
    <>
      <Navbar/>
      <div className = "container">
        <Switch>
          <Route exact path='/' component = {Home} />
          <Route exact path = '/view' component={ViewOpportunities}/>
        </Switch>
      </div>
    </>
    </Router>
    </OpportunityState>
  );
}

export default App;
