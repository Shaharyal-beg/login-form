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
    <div className='Login'>
      <div className='form-section'>
        <div className='logo'>
        Crypto Card
        </div><br/>
        <div className='form'>
          <div className='form-head'>
          <h1>Welcome back, USER</h1>
          <p style={{marginTop:'-4vh '}}>Please enter your details</p>
          </div>
          <br/>
          <form action='' onSubmit={submitForm}  className='form-body'>
          <label htmlFor='email'>Name</label><br/>
          <input 
           placeholder='Enter Your Name' 
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
          <span><CheckBoxIcon/></span>
          <span> Remember me </span> 
          <span style={{marginLeft:'13vw'}}>Forgot Password</span> 

          </div>
          
          <button className='log-btn' type='submit'> <b> Login </b></button>
          
          </form>
        </div> 
      </div>
      <div className='image-section'>
       
      </div>
      </div>
  )
}

export default Login