import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaUnlockAlt } from 'react-icons/fa';
import signInPic from '../images/login.png'


const Login = () => {

  const history=useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUSer = async (e)=>{
    e.preventDefault();

    const res = await fetch("/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    });

    const data =res.json();

    if(res.status===400 || !data){
      window.alert("Inavlid Login")
    }
    else{
      window.alert("Login succeccsul");
      history.push("/");
    }


  }

  return (
    <>
      <section className="login py-5">
        <div className=" container mx-auto flex justify-center items-center">
          <div className="left max-w-xs w-1/2">

            <form method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

              <div className="mb-4">
                <label className=" text-gray-700 text-sm font-bold mb-2 flex" htmlFor="email">
                  <FaUserAlt /> <span className=" px-3">Email</span>
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" placeholder="Enter your email" />
              </div>


              <div className="mb-6">
                <label className=" text-gray-700 text-sm font-bold mb-2 flex" htmlFor="password">
                  <FaUnlockAlt /> <span className=" px-3">Password</span>
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="**********" />
              </div>


              <div className="flex items-center justify-between">
                <button className=" btn-primary rounded-full text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline" type="button" onClick={loginUSer}>
                  Sign In
                </button>
                <NavLink className="inline-block align-baseline font-bold text-sm " to="/signUp">
                  Don't have account?
                </NavLink>
              </div>


            </form>

            <p className="text-center text-gray-500 text-xs">
              &copy;2021 Foodiez Delivery All rights reserved.
            </p>

          </div>

          <div className="right max-w-xl signInPic w-1/2">
            <figure>
              <img src={signInPic} alt="Login Pic" />
            </figure>
          </div>

        </div>
      </section>
    </>
  )
}

export default Login
