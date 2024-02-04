import React, { useState } from 'react';
import local from '..//..//image/local.png'

const AddressThird = () => {
  const [showMap, setShowMap] = useState(false);

  const handleButtonClick = () => {
    setShowMap(true);
  }

  return (
    <div>
      <button className='btn-map' onClick={handleButtonClick}><img src={local} alt="local" className='local' width={16} height={18}/>Vrijdag Hoofdorp Stamplein (8.00-16.30)</button>

      {showMap && (
                <div>
        <iframe
          width="600"
          height="450"
          frameBorder="0" style={{ border: 0 }}
          src={'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2439.7816148353004!2d4.6906479!3d52.3018181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e72c2fd2cf5f%3A0x30938430ec3badcd!2sFriday&#39;s%20market!5e0!3m2!1sru!2sby!4v1706794243932!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'}
          allowFullScreen
          title="Google Map"
        ></iframe>
      </div>

      )}
    </div>
  );
}

export default AddressThird;
