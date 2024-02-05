import React, { useState } from 'react';
import local from '..//..//image/local.png'

const AddressFive = () => {
  const [showMap, setIsMapOpen] = useState(false);

const toggleMap = () => {
setIsMapOpen(!showMap);
};


return (
  <div>

<button className='btn-map' onClick={toggleMap}>{showMap ? "" : ""}<img src={local} alt="local" className='local' width={16} height={18}/>Dinsdag Purmerend Westerstraat (8.00-14.00)</button>
{showMap && (
<iframe
title="Google Map"
width="600"
height="450"
style={{ border: 0 }}
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d619327.5423229834!2d4.2516403086801065!3d52.67355542994427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47cf57b68ded193d%3A0x1de145fab7a8b10a!2sAlkmaarse%20Markt!5e0!3m2!1sru!2sby!4v1706794484000!5m2!1sru!2sby" 
allowFullScreen
></iframe>
)}
</div>
);
};


export default AddressFive;
