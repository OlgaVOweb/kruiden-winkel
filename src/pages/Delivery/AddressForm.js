import React, { useState } from "react";
import axios from "axios";

const AddressForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://formspree.....", {
      name,
      phoneNumber,
      address,
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
    
    setName("");
    setPhoneNumber("");
    setAddress("");
  };

  return (
    <div>
      <label className="open-form" >
        <input className="check-box" type="checkbox" onChange={handleCheckboxChange} />
    <p className='del'>Home delivery</p></label>
    {isOpen && (
    <form className="form-del" onSubmit={handleSubmit}>
      <input className="input1"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input className="input2"
        type=""
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone number"
      />

      <textarea className="input3"
        name="message"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      ></textarea>

      <button type="submit" className="btn-sent">Send</button>
    </form>
        )}
    </div>
  );
};

export default AddressForm;
