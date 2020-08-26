import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart,faAddressCard,faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Mainpart.css'


const Mainpart = (props) => {
    const {name,email,phone,salary,picture} = props.user;
    const handleAddRequest = props.handleAddRequest;
    return (
        <div className="user-container">
            <div>
                <img src={picture.large} alt=""/> <br/> <br/>
                <button onClick={() => handleAddRequest(props.user)}> <FontAwesomeIcon icon={faUserPlus} />Add friend</button>
            </div>
            <div className="details">
            <h4>Name: {name.first}</h4>
            <h5>Email: {email}</h5>
            <h5>phone Number: {phone}</h5>
            <h3>Monthly salary: {salary}</h3>
            </div>
        </div>
    );
};

export default Mainpart;