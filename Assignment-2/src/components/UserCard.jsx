import React from 'react'

function UserCard({user}){
    return(
      <div  className='user-card'>
        {user.name}
       
      </div>
    )
    
  }
  export default UserCard