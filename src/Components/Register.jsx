import { useState } from "react"
import "./Register.modules.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

let obj = {
    username : "",
    email : "",
    psw : "",
    phone : ""
}

const Register = ()=>{

    const [state,setState] = useState(obj)
    const [arr,setArr] = useState([]);
    const [useField,setuseField] = useState(true);
    const [mailField,setmailField] = useState(true);
    const [passwordCheck,setpasswordCheck] = useState(false)
    const [passwordField,setpasswordField] = useState(true)
    const [number,setNumber] = useState(true);

    const getValueByInput = (e)=>{
        let {name,value} = e.target;
        setState({...state,[name]:value})
    }

    const formSubmit = (e)=>{
        e.preventDefault()
        setArr([...arr,state]);
        setState(obj)
    }

    const usernameBlur = ()=>{
        if(state.username.length > 5)
        {
            setuseField(true)
        }
        else{
            setuseField(false)
        }
    }
    const mailBlur = ()=>{
        if(state.email.includes('@gmail.com') || state.email.includes('@yahoo.com') || state.email.includes('@email.com'))
        {
            setmailField(true)
        }
        else{
            setmailField(false)
        }
        
    }

    const passwordVisibility = ()=>{
        setpasswordCheck(!passwordCheck)
    }
    const passwordBlur = ()=>{
        if(state.psw.length > 8)
        {
            setpasswordField(true)
        }
        else{
            setpasswordField(false)
        }
    }
    const numberBlur = ()=>{
        if(state.phone.length >= 10)
        {
            setNumber(true)
        }
        else{
            setNumber(false)
        }
    }

    return(
        <>
            <form onSubmit={formSubmit}>
    <div class="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>

      <label for="email"><b>Username</b></label>
      <input type="text" name="username" placeholder="Enter Username" required onChange={getValueByInput} value={state.username} onBlur={usernameBlur} id={useField ? "userunchange" : "userchange"}/>
      {useField ? "" : <p style={{position:"absolute",top:"225px",color:"red",fontWeight:"bold"}}>Please Enter Character And Digit Both</p>}
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required onChange={getValueByInput} value={state.email}  onBlur={mailBlur} id={mailField ? "mailunchange" : "mailchange"}/>
      {mailField ? "" : <p style={{position:"absolute",top:"345px",color:"blue",fontWeight:"bold"}}>Please Enter Email Correctly</p>}

      <label for="psw"><b>Password</b></label>
      <div style={{width : "100%",height:"60px",display:"flex",justifyContent:"space-evenly"}}>
      <input type={passwordCheck ? 'text' : 'password'} placeholder="Enter Password" name="psw" required onChange={getValueByInput} value={state.psw} style={{width:"80%",height:"80%"}} onBlur={passwordBlur} id={passwordField ? "passwordunchange" : "passwordchange"}/>


      <button type="button" onClick={passwordVisibility} className="password-toggle-btn" style={{width:"60px",height:"50px"}}>
            <FontAwesomeIcon icon={passwordCheck ? faEyeSlash : faEye} />
        </button>
        {passwordField ? "" : <p style={{position:"absolute",top:"470px",color:"rgb(190, 39, 190)",fontWeight:"bold"}}>PASSWORD MUST BE ATLEAST 10 CHARACTER</p>}
      </div><br /><br /><br />
      

      <label for="email"><b>Phone Number</b></label>
      <input type="phone" name="phone" placeholder="000000000" required onChange={getValueByInput} value={state.phone} onBlur={numberBlur} id={number ? "numberunchange" : "numberchange"}/>
      {number ? "" : <p style={{position:"absolute",top:"597px",color:"rgb(66, 207, 15)",fontWeight:"bold"}}>PHONE NUMBER MUST BE ATLEAST 10 CHARACTER</p>}
      
      <p>By creating an account you agree to our <a href="#" style={{color : "dodgerblue"}}>Terms & Privacy</a>.</p>

      <div class="clearfix">

        <button type="submit" class="btn">Sign Up</button>
      </div>
    </div>
  </form>

  
        </>
    )
}

export default Register