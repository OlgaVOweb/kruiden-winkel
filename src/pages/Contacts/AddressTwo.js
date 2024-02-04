import React, { useState } from 'react';
import local from '..//..//image/local.png'

const AddressTwo = () => {
  const [showMap, setShowMap] = useState(false);

  const handleButtonClick = () => {
    setShowMap(true);
  }

  return (
    <div>
      <button className='btn-map' onClick={handleButtonClick}><img src={local} alt="local" className='local' width={16} height={18}/>Woensdag Alkmaar De Mare (10.00-17.00)</button>

      {showMap && (
                <div>
        <iframe
          width="600"
          height="450"
          frameBorder="0" style={{ border: 0 }}
          src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.3889947789335!2d4.754055962064588!3d52.65474047930961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47cf5704c818c8b1%3A0xb6440ec523253578!2sWoensdagmarkt%20De%20Mare%20Alkmaar!5e0!3m2!1sru!2sby!4v1706793028729!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'}
          allowFullScreen
          title="Google Map"
        ></iframe>
      </div>

      )}
    </div>
  );
}

export default AddressTwo;
