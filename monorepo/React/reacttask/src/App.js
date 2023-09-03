// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Result from './components/Result';
import Footer from './components/Footer';

function App() {
  const [step, setStep] = useState('1/2'); // Initial step
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <Router>
      <div className="App">
        <Header step={step} />
        <Switch>
          <Route exact path="/" render={() => <Body setStep={setStep} setSelectedOption={setSelectedOption} />} />
          <Route path="/result" render={() => <Result selectedOption={selectedOption} setStep={setStep} />} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
