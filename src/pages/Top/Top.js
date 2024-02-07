import React, { useState } from 'react';
import '..//Top/Top.css';
import top from '..//..//icons/top.png';

const Top = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='top-form-container'>
    <button 
      className={`top-toggle ${isVisible ? 'visible' : ''}`}
      onClick={scrollTop}
    >
      <img src={top} alt='icon' width={18} height={14}   />
    </button>
    </div>
  );
};

export default Top;


