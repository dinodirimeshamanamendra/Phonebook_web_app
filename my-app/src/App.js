//import logo from './logo.svg';

import React,{useState , useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const addNewNumber =() =>{
    Axios.post('http://localhost:8080/add-phone',{name,phoneNumber})
    .then(()=>{

    })
    .catch((error)=>{
      console.log(error); 
    })
  };
  return (
    <div className='inputs'>
      <h1>Hello World!</h1>
      
      <div className='form-container'>
        <form>
          <table border="0">
            <tr>
              <td>
                <lable htmlFor=''>Name :</lable>
              </td>
              <td>
                <input type='text' onChange={(e)=> setName(e.target.value)}/>
              </td>
            </tr>
            <br/>
            <tr>
              <td>
              <lable htmlFor=''>Phone Number :</lable>
              </td>
              <td>
              <input type='text' onChange={(e)=> setPhoneNumber(e.target.value)}/>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}


export default App;
