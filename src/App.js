import React,{useState, useEffect} from 'react';
import './App.css';
import Mainpart from './components/Mainpart/Mainpart';
import salaries from './fakeData/Salary.js';
import Request from './components/Request/Request';
import { counter } from '@fortawesome/fontawesome-svg-core';
function App() {

  const [users, setUsers] = useState([]);
  const [request, setRequest] = useState([]);
  
     
  useEffect(() =>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data =>{ console.log(data);
      // setUsers(data['results']);
      let salary = data['results'].map((user,i)=>{
        user.salary=salaries[i].salary
        return user;
      })
      setUsers(salary);
    })
     
}, [])
const handleAddRequest = (user) => {
  const newRequest = [...request, user];
  setRequest(newRequest);
}

  return (
    
    <div className="user">
      
      <div>
          {
            users.map(user => <Mainpart user={user} handleAddRequest={handleAddRequest}></Mainpart>)
          }
          </div>
          <div>
            <Request request={request}></Request>
          </div>
      </div>

   
  );
}

export default App;
