import "./Delivery.css"
import React, { useState } from "react";
import axios from "axios";


const Address = () => {
  const addresses = ["Dinsdag Purmerend Westerstraat (8.00-14.00)",
   "Woensdag Alkmaar De Mare (10.00-17.00)",
   "Donderdag Zaandam Rozengracht (8.00-16.30)" ,
  "Vrijdag Hoofdorp Stamplein (8.00-16.30)" ,
"Zaterd Agalkmaar Center (8.00-17.00)"]; 

  const [selectedAddress, setSelectedAddress] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("https://formspree.....Оль тут ссылка на formspree", {
      selectedAddress,
      name,
      phoneNumber,
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
    
    setSelectedAddress("");
    setPhoneNumber("");
    setPhoneNumber("");

    
  };

  return (
    <div>
      <p className="destr" onClick={() => console.log("Кнопка нажата")}>
        Self-destruction
      </p>
      {addresses && (
        <select className="choose-address" value={selectedAddress} onChange={handleAddressChange}>
          <option  value="">Choose address</option>
          {addresses.map((address) => (
            <option  key={address} value={address}>
              {address}
            </option>
          ))}
        </select>
      )}

      {selectedAddress && (
        <form className="form-del" onSubmit={handleSubmit}> 
          <input className="input2"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <input className="input3"
            type="tel"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <button type="submit" className="btn-sent">Send</button>
        </form>
      )}
    </div>
  );
};

export default Address;

