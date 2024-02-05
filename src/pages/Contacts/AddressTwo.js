import React, { useState } from 'react';
import local from '..//..//image/local.png'

  const AddressTwo = () => {
    const [showMap, setIsMapOpen] = useState(false);

const toggleMap = () => {
setIsMapOpen(!showMap);
};


  return (
    <div>

<button className='btn-map' onClick={toggleMap}>{showMap ? "" : ""}<img src={local} alt="local" className='local' width={16} height={18}/>Woensdag Alkmaar De Mare (10.00-17.00)</button>
{showMap && (
<iframe
title="Google Map"
width="600"
height="450"
style={{ border: 0 }}
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2439.7816148353004!2d4.6906479!3d52.3018181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e72c2fd2cf5f%3A0x30938430ec3badcd!2sFriday&#39;s%20market!5e0!3m2!1sru!2sby!4v1706794243932!5m2!1sru!2sby" 
allowFullScreen
></iframe>
)}
</div>
);
};

export default AddressTwo;
