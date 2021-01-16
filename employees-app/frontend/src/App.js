import React from 'react'
import ListEmployee from './components/ListEmployee'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <ListEmployee />
      </div>

      <Footer />
    </div>
  );
}

export default App;
