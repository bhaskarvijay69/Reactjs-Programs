import React,{useState} from "react";
const App=()=>{
  const [data,setData]=useState({
    email:"",
    password:""
  })
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault();
    if(data.password.length<5){
      alert("provide password length>5")
    }
    else{
    console.log(data);
    }
  }
  return(
<div> 
  <center>
    <form onSubmit={submitHandler} >
      <label>Email:</label><br/>
      <input type="email" name="email" onChange={changeHandler}/><br/>
      <label>Password:</label><br/>
      <input type="password" name="password" onChange={changeHandler}/><br/>
      <input type="submit" value="Login" /><br/>
    </form>
  </center>
</div>
  )
}
export default App 
