import React, { useEffect } from 'react'

const Loggin = ({setUsername, username, setUser}) => {
    const handleCLick = (e) => {setUser(username);
        console.log(username, "inside user");
           
    }
  return (
    <div className='loggin'>
       <input type ='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
       <button onClick={() => handleCLick()}>Login</button>
    </div>
  )
}

export default Loggin
