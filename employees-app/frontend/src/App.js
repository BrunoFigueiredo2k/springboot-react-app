import React from 'react'
import ListEmployee from './components/ListEmployee'
import Footer from './components/Footer'
import Header from './components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateEmployee from './components/CreateEmployee'

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
            <div className="container">
              <Switch>
                <Route path="/" exact component={ListEmployee}/>
                <Route path="/employees" component={ListEmployee}/>
                <Route path="/add-employee" component={CreateEmployee}/>
              </Switch>
            </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
