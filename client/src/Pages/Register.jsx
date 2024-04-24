import React, { useState } from 'react'
import {NavLink, Navigate, useNavigate} from "react-router-dom"
import "../styles/mix.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {registerfunction} from "../services/Apis.js";

const Register = () => {

    const [passShow, setPassShow] = useState(false);

    const [inputData, setInputData] = useState({
      name:"",
      email:"",
      password:"",
      address:"",
      phone:"",

    });
    
const navigate = useNavigate();

    //set Input Value
    const handleChange = (e)=>{
      const{name, value} = e.target;
      setInputData({...inputData,[name] :value})
    }

    //register data

    const handleSubmit = async(e)=>{
      e.preventDefault();

      const{name, email, password } = inputData;

      if(name ==="")
      {
        toast.error("Name can't be empty! ")
      }
      else if(email ==="")
      {
        toast.error("Email can't be empty!")
      }
      // else if( !email.includes("@gmail.com") && !email.includes("@yahoo.com"))
      else if( !email.includes("@"))
      {
        toast.error("Please enter a correct mail")
        
      }
      else if( password ==="" )
      {
        toast.warning("Password Should not be Empty");
      }
      else{
       const response = await registerfunction(inputData);
       console.log(response);
        // console.log(response);
        if(response.status ===200){
          setInputData({...inputData,name:"",email:"",password:"",address:"",phone:""});
          toast.success("User Registered Successfully! Redirecting to Login Page.");
          setTimeout(()=>{
            navigate("/login")
            
          },5000)
      
        }else{
          toast.error("Something went wrong");
        }
      }
    }

  return (
    <section>
    <div className="form_data">
      <div className="form_heading">
        <h1>Welcome, SignUp here </h1>
        <p style={{textAlign:"center"}}>Hi, We are glad you are becoming our member!
         We hope you will like it.</p>
      </div>
      <form>
      <div className="form_input">
          <label htmlFor="name">Name </label>
          <input type="text" name="name" onChange={handleChange} placeholder="Enter Your Name"></input>
        </div>
        <div className="form_input">
          <label htmlFor="email">Email </label>
          <input type="email" name="email" onChange={handleChange} placeholder="Enter Your Mail "></input>
        </div>
        <div className="form_input">
          <label htmlFor="password">Password </label>
          <div className='two'>

          <input type={!passShow ? "password" : "text"}  name="password" onChange={handleChange} placeholder="Enter Your Password"></input>

            <div className='showpass' onClick={()=>setPassShow(!passShow)}>
            {!passShow ? "show" : "hide" }
            </div>
          </div>
          
        </div>
        <div className="form_input">
          <label htmlFor="address">Address </label>
          <input type="text" name="address" required onChange={handleChange} placeholder="Enter Your Address "></input>
        </div>
        <div className="form_input">
          <label htmlFor="">Phone No. </label>
          <input type="text" name="phone" required onChange={handleChange} placeholder="Enter Your Phone No. "></input>
        </div>
        <button className="btn" onClick={handleSubmit} >Register</button>
        <p> Already have an account? <NavLink to="/login">Login Here.</NavLink></p>
      </form>
    </div>
    <ToastContainer />
  </section>
  )
}

export default Register