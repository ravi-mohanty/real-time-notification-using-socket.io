import { useState } from 'react'
import Loggin from './Loggin';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';
import {posts} from './data.js'


function App() {
 const [username, setUsername] = useState("");
 const [user, setUser] = useState('');
  
 console.log(user, "inside user");
  
  return (
    <div className='container'>
      {
        user ? (
                <>
                 <Navbar/>
                 {posts.map((i) => 

                 <Card key={i.id} post={i}/>)}
                 <span className="usernames">{username}</span>
                </>
        ) : (     
           <Loggin setUsername={setUsername} username={username} setUser={setUser}/>
)
      }
    </div>
  )
}

export default App
