import React from 'react';

function Header({ step }) {
  return (
    <header className="bg-white text-black text-center">
      <div className="container">
      <h3 className="">Choose Service</h3>
        <p className="fs-4">Step: {step}</p>
      </div>
    </header>
  );
}

export default Header;
