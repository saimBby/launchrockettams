import React, { useState, useEffect } from "react"
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from "react-router-dom"

import TAMSLOGO from "./img/TAMSLOGO.png"

import { useNavigate } from "react-router-dom"

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

        const response = await fetch("http://localhost:4000/loginUser", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()  
        
        if (response.ok) {
            setResponse({ ok: true, data: json.status, error: "" })

            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})
            setIsLoggedIn(true)
        }

        if (!response.ok) {
            setResponse({ ok: false, data: "", error: json.status })
            
        }
    }

    
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/PaymentCheckout');
    } else {
      console.log("fail")
    }
  }, [isLoggedIn, navigate]);


    return (
        <form onSubmit={handleSubmit}>
        <div className="flex justify-center h-screen bg-gradient-to-b from-[#F9B4F6] to-[#CDC2F5]">
          <div className="flex flex-col p-12 w-5/6 mt-16 mb-16 bg-[#F1FFF6]/50 rounded-xl border-2 border-[#F7F7F7]">
            <div className="flex justify-center">
              <img src={TAMSLOGO} alt="" className="rounded-2xl"></img>
            </div>
            <div className="flex justify-center mt-4 gradient from-purple-400 to-pink-600">
              <h1 className="text-5xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                  TAMS
              </h1>
              <h1 className="text-5xl font-bold text-[#3939FF]">
                  .ai
              </h1>
            </div>

                <div className="flex justify-between w-full h-full p-16">
                    <div className="flex flex-col p-10 w-3/6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] rounded-2xl from-gray-300 via-fuchsia-600 to-orange-600">
                        <div className="flex justify-center">
                          <img src={TAMSLOGO} alt="" className="rounded-2xl w-[75px] h-[75px]"></img>
                        </div>
                        <div className="flex justify-center">
                          <h1 className="text-4xl font-semibold text-[#F7F7F7]">
                            Tams
                          </h1>
                          <h1 className="text-4xl font-bold text-[#3939FF]">
                            .ai
                          </h1>
                        </div>

                        <div className="flex justify-center">
                          <div className="flex flex-col mt-6">
                            <h1 className="text-4xl text-[#F7F7F7]">
                              Use Tams as an autopilot with
                            </h1>
                            <div className="flex justify-center">
                              <h1 className="text-3xl mt-1 font-bold text-[#F7F7F7]">
                                Artificial Intelligence
                              </h1>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col mt-64">
                          <div className="flex justify-center">
                            <h1 className="text-[#F7F7F7] text-3xl">
                              Zdravko. J
                            </h1>
                          </div>

                          <div className="flex justify-center">
                            <h1 className="text-[#F7F7F7] font-bold">
                              Founed & CEO of TAMS.ai
                            </h1>
                          </div>

                          <div className="flex justify-center">
                            <h1 className="text-[#F7F7F7]">
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi eveniet iste, dolore ducimus ullam pariatur dolorem nihil quasi.
                            </h1>
                          </div>
                        </div>
                    </div>
                    <div className="flex flex-col p-10 w-3/6 bg-[#89CFF0]/10 border-2 border-[#F7F7F7] rounded-2xl ml-20">
                      <div className="flex justify-center">
                        <h1 className="text-fuchsia-600 text-3xl font-bold">
                          Sign in
                        </h1>
                      </div>

                      <div className="flex justify-center mt-2">
                        <h1 className="text-[#6666FF]  font-bold">
                          Do you have an account?
                        </h1>
                        <Link to="/" className="text-orange-600 ml-2 font-semibold">
                          Sign up
                        </Link>
                      </div>

                      <div className="flex justify-center mt-8">
                        <input onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" className="w-full p-4 rounded-2xl hover:border-2 hover:border-fuchsia-600">

                        </input>
                      </div>

                      <div className="flex justify-center mt-8">
                        <input onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" className="w-full p-4 rounded-2xl hover:border-2 hover:border-fuchsia-600">

                        </input>
                      </div>

                      <div className="flex justify-center mt-8">
                        <button className="bg-[#FF1493] p-3 w-full rounded-2xl text-[#F7F7F7] font-bold">
                          Sign in
                        </button>
                      </div>
                  </div>
              </div> 
              
              {errorresponse.ok && errorresponse.data && (
                <div className="flex justify-end">
                  <div className="static">
                    <div className="absolute bottom-20 right-24 bg-[#FF1493] p-6 rounded-2xl text-white font-bold">
                      <div className="flex justify-between">
                        <BiError className="text-5xl"></BiError>
                        <span className="text-xl mt-3 ml-4">{errorresponse.data}</span>
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