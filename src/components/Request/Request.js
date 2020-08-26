import React from 'react';
import './Request.css'

const Request = (props) => {
   const request = props.request;
   let totalSalary = 0;
   for (let i = 0; i < request.length; i++) {
       const user = request[i].salary;
       const userNum = parseFloat(user);
       totalSalary = totalSalary + userNum;
       
   }
    return (
        <div className="request">
            <h2>Friend Request</h2>
            <h3>Total Request:{request.length}</h3>
            <h4>total salary:{totalSalary}</h4>
        </div>
    );
};

export default Request;