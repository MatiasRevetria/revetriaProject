import React, {useState, useContext} from 'react'
import {CartContext} from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const {setIsAuthenticated} = useContext(CartContext);

  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event)=>{
    event.preventDefault();
    let validationErrors = {};
    if(!email) validationErrors.email = 'Email es requerido';
    if(!password) validationErrors.password = 'La contraseña es requerida';

    if(Object.keys(validationErrors).length > 0){
      setError(validationErrors)
      return;
    }
    try{
    const res = await fetch('users.json')
    const users = await res.json()

    const foundUser = users.find( user => user.email == email && user.password == password)

    if(!foundUser){
      setError({email: 'Credenciales invalidas'})
    }else {if(foundUser.role === 'admin'){
      setIsAuthenticated(true);
      navigate('/admin')
    }else{
      navigate('/')
    }
  }
  }catch(error){
      console.error('Error fetching users:', error);
    setError({email: 'Algo salio mal... intenalo mas tarde'});
  }
  }

  return (
    <form onSubmit={handleSubmit} style={{
      position: 'relative',
      top: '35vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{display : 'flex', flexDirection: 'column'}}>
      <label htmlFor="email">EMAIL</label>
      <input type="email"value={email} id="email"  placeholder='Enter email' onChange={(evento)=> setEmail(evento.target.value)} style={{border:`1px solid ${error.email ? 'red' : 'grey'}`}}/>
      {error.email && (<div style={{color: 'red', fontSize:'0.875rem', marginTop: '0.25rem'}}> {error.email} </div>)}
      <label htmlFor="password">PASSWORD</label>
      <input type="password" value={password} id="password" placeholder='Enter your Password' onChange={(evento)=>setPassword(evento.target.value)} style={{border:`1px solid ${error.password ? 'red' : 'grey'}`}}/>
      {error.password && (<div style={{color: 'red', fontSize:'0.875rem', marginTop: '0.25rem'}}> {error.password} </div>)}
      <button type="submit">Login</button>
      </div>
    </form>
  )
}

export default Login;