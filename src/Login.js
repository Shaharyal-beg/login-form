import React, { useState , useEffect} from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Login = () => {
   
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) =>{
        e.preventDefault();
        const newEntry = {email:email,password:password}; 
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);   
        setEmail("");
        setPassword("");    
     }
  return (
    <div className='container'>
       <div className='Login'>
      <div className='form-section'>
        <div className='logo'>
        
        </div><br/>
        <div className='form'>
          <div className='form-head'>
          <h1>Welcome, Shaharyal</h1>
          </div>
          <br/>
          <form action='' onSubmit={submitForm}  className='form-body'>
          <label htmlFor='email'>Email</label><br/>
          <input 
           placeholder='Email' 
           value={email}
            onChange={(e)=> setEmail(e.target.value)} 
            type='text' 
            name='email' 
            id='email' 
            autoComplete='off'/>
            <br/><br/>
          <label htmlFor='password'>Password</label><br/>
          <input 
          type='password' 
          value={password} 
          placeholder='Password'
          onChange={(e)=> setPassword(e.target.value)} 
          name='password' 
          id='password' 
          autoComplete='off'/>
          <br/>
          <div className='rem-for'>
          <span><CheckBoxIcon  sx={{ mb: -0.8 }}  /></span>&nbsp;
          <span> Remember me </span> 
          <span style={{marginLeft:'7.8vw',textDecoration:'underline'}}>Forgot Password/Username</span> 

          </div>
          
          <button className='log-btn' type='submit'> <b> Login </b></button>
          
          </form>
        </div> 
      </div>
      <div className='image-section'>
       
      </div>
      </div>
   
      </div>
  )
}

export default Login