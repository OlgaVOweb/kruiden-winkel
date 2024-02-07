
import React, { useState } from 'react';
import local from '..//..//image/local.png'

const MapAddress= () => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleAddressClick = (address) => {
    setSelectedAddress(address);
  };

  return (
    <div className='both-blocks' >
      <ul>
        <li className='btn-map' onClick={() => handleAddressClick('52.50954, 4.94411')}><img src={local} alt="local" className='local' width={16} height={18}/>
        Dinsdag Purmerend Westerstraat (8.00-14.00)
        </li>
        <li className='btn-map' onClick={() => handleAddressClick('52.65626, 4.75762')}><img src={local} alt="local" className='local' width={16} height={18}/>
        Woensdag Alkmaar De Mare (10.00-17.00)
        </li>
        <li className='btn-map' onClick={() => handleAddressClick('52.30429, 4.69437')}><img src={local} alt="local" className='local' width={16} height={18}/>
        Donderdag Zaandam Rozengracht (8.00-16.30)          
        </li>
        <li className='btn-map' onClick={() => handleAddressClick('52.30171, 4.69252')}><img src={local} alt="local" className='local' width={16} height={18}/>
        Vrijdag Hoofddorp Stamplein (8.00-16.30)
        </li>
        <li className='btn-map' onClick={() => handleAddressClick('52.63337, 4.74559')}><img src={local} alt="local" className='local' width={16} height={18}/>
        Zaterdag Alkmaar Center (8.00-17.00)
        </li>

      </ul>
      {selectedAddress && (
        <div>
          <iframe className='map-img'
            title="Google Maps"
            width="600"
            height="450"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              selectedAddress
            )}&output=embed`}
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      )}
    </div>
  );
};

export default MapAddress;








