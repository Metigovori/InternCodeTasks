import React, { useState } from 'react';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Result from './components/Result';
import Footer from './components/Footer';

function App() {
  const [step, setStep] = useState('1/2'); 
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <BrowserRouter>
      <div className="App">
        <Header step={step} />
        <Routes>
          <Route exact path="/" element={<Body setStep={setStep} setSelectedOption={setSelectedOption} />} />
          <Route path="/result" element={<Result selectedOption={selectedOption} setStep={setStep} />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
