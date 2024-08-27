import React from 'react'

function UserInput({ newUserName, setNewUserName, handleAddUser }) {
    return (
      <div>
        <input
        className=' ml-[650px] p-1 border-2 border-black rounded-md'
          type="text"
          placeholder="Enter Name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button className='ml-1 border-2 p-1 rounded-md border-black' onClick={handleAddUser}>Add User</button>
      </div>
    );
  }
  export default UserInput;
