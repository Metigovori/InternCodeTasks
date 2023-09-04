import React from 'react';
import { Link } from 'react-router-dom';

function Result({ selectedOption, setStep }) {
  
  const handleBackButtonClick = () => {
    setStep('1/2');
  };

  return (
    <div className="container-fluid bg-light-gray">
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Selected Option:</h3>
              <p className="card-text py-3">{selectedOption}</p>
              <Link to="/" onClick={handleBackButtonClick} className="btn btn-primary">
                Back to Selection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Result;
