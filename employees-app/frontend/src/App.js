import React from 'react'
import ListEmployee from './components/ListEmployee'
import Footer from './components/Footer'
import Header from './components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateEmployee from './components/CreateEmployee'
import ViewEmployee from './components/ViewEmployee'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
            <div className="container">
              <Switch>
                <Route path="/" exact component={ListEmployee}/>
                <Route path="/login" exact component={LoginForm}/>
                <Route path="/signup" exact component={LoginForm}/>
                <Route path="/employees" component={ListEmployee}/>
                <Route path="/add-employee/:id" component={CreateEmployee}/>
                <Route path="/view-employee/:id" component={ViewEmployee}/>
              </Switch>
            </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
