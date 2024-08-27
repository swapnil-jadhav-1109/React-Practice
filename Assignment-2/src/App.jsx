import './index.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import UserLIst from './components/UserLIst'
import UserInput from './components/UserInput'

 function App() {
  const [users,setUsers]=useState([]);
  const [newUserName,setNewUserName]=useState('');
  const[currentId,setCurentId]=useState(11);



  useEffect(()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      setUsers(response.data)
    })
    .catch(error=>{
      console.log(error)
    }) 
  },[])

  const handleAddUser=()=>{
    const newUser={id:currentId,name:newUserName};
    axios
      .post("https://jsonplaceholder.typicode.com/users",newUser)
       .then((response)=>{
         alert("User Added Successfully"
              )
         setUsers([...users,response.data])
       })
       .catch((error)=>{
         console.log(error)
       })
    console.log(`new user Input ${newUserName},ID:${currentId}`);
    setNewUserName('');
    setCurentId(currentId+1);
  };



  return (
    <div className='container'>
      <h2 className='text-center bg-blue-900 text-white p-10 text-[25px] font-bold' >Digikull Students</h2>
      <h3 className='text-center m-5'>Hello User</h3>
      <UserInput
        newUserName={newUserName}
        setNewUserName={setNewUserName}
        handleAddUser={handleAddUser}
        
        />
      <UserLIst users={users} />
      
    
    </div>
  )
}
export default App
