import React ,{Component} from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import TableList from './components/Cart/cart';
import Navbar from './components/Navbar/Bar';
import All1 from './components/allcart';
import All2 from './components/allorder';
import test from './Test';
import login from './components/Login/login'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={login} />
          <Route path="/allcart" component={All1} />
          <Route path="/allorder" component={All2} />
          <Route path="/4" component={TableList} />
          <Route path="/test" component={test} />
          
        </Switch>
      </div>
    </Router>
  );
}


export default App;
