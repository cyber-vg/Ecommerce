import React from 'react'
import { useEffect,useState } from 'react'
import { useAuth } from '../../context/auth'
import { Outlet } from 'react-router';
import axios from 'axios';
import LoadSpinner from '../LoadSpinner';
const BACKEND_URL = "http://localhost:8085";

 
export default function AdminRoute(){ 
const [ok,setOk] = useState(false);
const [auth,setAuth]=useAuth()

useEffect(()=>{

const authCheck = async()=>{
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
const res  =await axios.get(`${BACKEND_URL}/api/v1/auth/adminauth`)
console.log(res,"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
if(res.data.ok){
    setOk(true)
}
else{
    setOk(false)
}
}
console.log("This is auth   ",auth)
if(auth?.token) authCheck();
},[auth?.token])
console.log(ok,"::::::::::::::::::::::::::::::::::::::",auth);
return ok?<Outlet/>:<LoadSpinner path="" />
}