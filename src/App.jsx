import { useEffect, useState } from 'react';
import './App.css'

function App() {
const [profile, setProfile] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setProfile(data)
    } )
  },[])

  const handleNewUser = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = {name, email}
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data=> {console.log('inside post response', data)})
    const newUser = [...user, data]
    setProfile(newUser)
    form.reset()
  }


  return (
    <>
      <h1 className='text-red-400'>User Management</h1>
      {
      profile.map(profile => <li>{profile.name}:{profile.email}:{profile.id}</li>)
     }
     <form onSubmit={handleNewUser}>
     <div>
       <input type="name" name='name' placeholder="name" className="input input-bordered" required />
      </div>
     <div>
       <input type="email" name='email' placeholder="email" className="input input-bordered" required />
      </div>
      <button type="submit" className='border'>Submit</button>
     </form>
   
    
    
    </>
  )
}

export default App
