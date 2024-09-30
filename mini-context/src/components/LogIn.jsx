import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext';

function LogIn() {
    const [userName, setuserName] =useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({userName, password});
    }
  return (
    <div>
      <h2>LogIn</h2>
      <input type="text" 
      onChange={(e) => setuserName(e.target.value)}
      placeholder='UserName' />
      {    "    "}
      <input type="text" 
       onChange={(e) => setPassword(e.target.value)}
       placeholder='Password' />
      <button onClick={handleSubmit}>Submit</button>
       
    </div>
  )
}

export default LogIn
