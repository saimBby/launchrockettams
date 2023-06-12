import React, { useState, useEffect } from "react"
import { useAuthContext } from '../hooks/useAuthContext'
import { Link, useNavigate } from "react-router-dom"

import TAMSLOGO from "./img/TAMSLOGO.png"

import { BiError } from "react-icons/bi"

function Login () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [setting, setSetting] = useState(false)

    const { user } = useAuthContext()
    const { dispatch } = useAuthContext()
    
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [errorresponse, setResponse] = useState({ ok: false, data: "", error: "" });
   
    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("https://tamsrocketlaunch.onrender.com/loginUser", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()  
        
        if (response.ok) {
          localStorage.setItem('user', JSON.stringify(json))

          // update the auth context
          dispatch({type: 'LOGIN', payload: json})
          navigate("/Paymentcheckout")
        }

        if (!response.ok) {
            setResponse({ ok: false, data: "", error: json.error })
        }
    }

    
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/PaymentCheckout');
    } else {
      console.log("fail")
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    console.log(errorresponse.error);
  }, [errorresponse]);


    return (
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center h-screen bg-gradient-to-b from-[#F9B4F6] to-[#CDC2F5]">
            <div className="flex flex-col p-12 w-5/6 mt-16 mb-16 bg-[#F1FFF6]/50 rounded-xl border-2 border-[#F7F7F7]">
              <div className="flex justify-center">
                <img src={TAMSLOGO} alt="" className="w-[90px] rounded-2xl"></img>
              </div>
              <div className="flex justify-center mt-2">
                <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                  TAMS
                </h1>
                <h1 className="text-2xl font-semibold text-[#3939FF]">
                  .ai
                </h1>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-center mt-2">
                  <div className="flex flex-col">
                    <h1 className="flex justify-center mt-2 text-3xl font-bold text-pink-500">
                      Sign in
                    </h1>
                    <div className="flex justify-center mt-1">
                      <div className="flex flex-col">
                        <div className="flex justify-center">
                          <h1 className="text-[#6666FF] font-bold">
                            You dont have an account?
                          </h1>
                        </div>
                        <div className="flex justify-center">
                          <Link to="/" className="text-orange-600 ml-2 font-bold text-xl">
                            Sign up
                          </Link>
                        </div>
                      </div>
                    </div>

                            <div className="flex justify-center mt-4 ">
                              <input type="email" onChange={(e) => setEmail(e.target.value)}  className="w-full p-2 rounded-xl border border-pink-500" placeholder="Email">

                              </input>
                            </div>
                            <div className="flex justify-center mt-4 ">
                              <input type="password" onChange={(e) => setPassword(e.target.value)} className="w-full p-2 rounded-xl border border-pink-500" placeholder="Password">

                              </input>
                            </div>
                            <div className="flex justify-center mt-4">
                              <button className="bg-pink-500 w-full p-2 rounded-xl font-bold text-white">
                                Sign in
                            </button>
                          </div>
                      </div>
                  </div>
              </div>
              
              {errorresponse.error && (
                <div className="flex justify-end">
                  <div className="static">
                    <div className="absolute bottom-20 right-2 bg-[#FF1493] p-2 rounded-2xl text-white font-bold">
                      <div className="flex justify-between">
                        <div className="flex justify-center">
                          <BiError className="text-2xl mt-1"></BiError>
                        </div>
                        <div className="flex justify-center">
                          <span className="mr-2 ml-4 mt-0.5">{errorresponse.error}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </form>
    )
}

export default Login