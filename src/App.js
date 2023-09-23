import React,{useState , useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phonebook,setphonebook] = useState([]);
  const [newNumber, setNewNumber]= useState('');
  const [newName,setNewName]=useState('');

  const addNewNumber = () => {
    Axios.post('http://localhost:8080/add-phone',{name :name,phone :phoneNumber})
    .then (()=>{
      console.log("working");
    })
    .catch((error)=>{
      console.log(error);
    })
  };

  const getphonenumber = () => {
    Axios.get('http://localhost:8080/get-phone')
    .then((res)=>{
      setphonebook(res.data.data.phonelist)
    })
    .catch((error)=>{
      console.log(error);
    })
  } 
  useEffect(()=>{
    getphonenumber()
  },[])
  
  const updatefunc = (id) => {
    Axios.put(`http://localhost:8080/update-phone/${id}`,{ phone:newNumber })
    .then(()=>{
        getphonenumber();
    })
    .catch((error)=>{
        console.log(error);
    })
  }
  const deletefunc = (id) => {
    console.log(id);
    Axios.delete(`http://localhost:8080/delete-phone/${id}`)
      .then(() => {
        getphonenumber(); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='app-container'>
      <div className='phone-book-container'>
      <h1>Phone Book</h1>
      <div className='form-container'>
      <form >
        <table border="0">
          <tr>
            <td>
              <lable htmlfor=''>Name :</lable>
            </td>
            <td>
            <input type="text" placeholder=" name.." onChange={(e) => setName(e.target.value)} />
            </td>
          </tr>
          <br/>
          <tr>
            <td>
              <lable htmlfor=''>Phone Number :</lable>
            </td>
            <td>
            <input type="text" placeholder="Phone num.." onChange={(e) => setPhoneNumber(e.target.value)} />
            </td>
          </tr>
        </table>
        <button className='addnewbtn' onClick={addNewNumber}>Add new Number</button>
        </form>
        </div>
      </div>
      <div className='phone-list-container'>
      <h2>Phone List</h2>
      <div className='list'>
        {phonebook.map((entry,index) =>(
           <form>
          <div key={index}>
          name : {entry.name}
          <br/>
          phone number : {entry.phone}
          <br/>
          <input className='listintput' type="text" onChange={(e)=> setNewNumber(e.target.value)} />
          <input className='listintput' type="text" onChange={(e)=> setNewName(e.target.value)} />
          <br></br>
          <button className='Ubutton' onClick={()=>updatefunc(entry._id)}> Update </button>
          <button className='Dbutton' onClick={()=>deletefunc(entry._id)}> Delete </button>
         
          
          </div>
          </form>
        ))}

      </div>
      </div>
      
    </div>
  );
}

export default App;
