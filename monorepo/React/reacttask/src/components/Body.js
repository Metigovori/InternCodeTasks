import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/body.css'
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image1.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image1.jpg';
import image9 from '../assets/image1.jpg';
import image10 from '../assets/image1.jpg';
import image11 from '../assets/image1.jpg';
import image12 from '../assets/image1.jpg';


function Body({ setStep, setSelectedOption }) {
  const options = ['Anti Wrinkle Treatment', 'Dermal Fillers', 'Secret RF', 'HArmonyCA','Profhilo','Facials','Sclerotherapy','LED','Fat Dissolve','Growth Factors','Special Package for Time clinic','Consultation'];

  const images = [image1, image2, image3, image4,image5, image6, image7, image8,image7,image6,image5,image4];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setStep('2/2');
  };

  return (
    <div className="container-fluid bg-light-gray">
    <div className="body container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Select an Option:</h2>
              <ul className="list-group gap-3 p-5">
                {options.map((option, index) => (
                  <li key={index} className="list-group-item d-flex align-items-center border">
                    <img src={images[index]} alt={`Image ${index + 1}`} width="50" height="50" />
                        <Link
                            to="/result"
                            onClick={() => handleOptionSelect(option)}
                            className="custom-button btn btn-block d-flex justify-content-between align-items-center"
                            >
                            {option}
                            <i className="bi bi-chevron-right"></i>
                      </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="body container mt-1 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <p className='text-secondary'>Not sure about consultation type? Please, call <span className='text-primary'>0203 7959063</span></p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Body;
