import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';
import UserContext from './utilities/UserContext.jsx';

const App = () => {
const [userName , setUserName] = useState();
 
 useEffect(()=>{
 const data = {
  Name : "Swapnil Jadhav "
 }
 setUserName(data.Name);
 },[])

  return (
    <UserContext.Provider value = {{loggedInUser : userName ,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

export default App;
