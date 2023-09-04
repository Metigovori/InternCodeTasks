import React, { useState, useEffect } from 'react';
import '../styles/footer.css';
import { useLocation } from 'react-router-dom';


function Footer() {
  const [arrowVisible, setArrowVisible] = useState(true);

  const location = useLocation();

  const isResultPage = location.pathname === '/result';
  console.log('Current pathname:', location.pathname);
console.log('Is Result Page?', isResultPage);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setArrowVisible(false);
    } else {
      setArrowVisible(true);
    }
  };

  return (
    <footer className="fixed-footer bg-white text-center py-3">
      Powered by <img src="https://pabau.com/wp-content/uploads/elementor/thumbs/download-pq3fsnaitgyylurbfryzighm46y9be58loymts4eok.png" alt="Logo" className="logo" /> Pabau
      {(arrowVisible && !isResultPage) && <div className="scroll-arrow">↓</div>}
    </footer>
  );
}

export default Footer;
