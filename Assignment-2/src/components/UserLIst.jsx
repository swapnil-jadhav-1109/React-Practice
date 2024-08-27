import React from 'react'
import UserCard from './UserCard'

function UserLIst({users}){
  return(
    <div className='text-center mt-[5px]'>

      
        <ul>
            {
        users.map((user,index)=>(
         <li className='border-black border-2 m-2 p-2 w-[250px] ml-[650px] rounded-md'> <UserCard  key={index} user={user}/></li>
        ) )
    }
        </ul>
      
      
    </div>
  )
}
export default UserLIst;
