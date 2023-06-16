import React, { useState, useEffect } from "react"
import { useAuthContext } from '../hooks/useAuthContext'
import { Link, useNavigate } from "react-router-dom"

import TAMSLOGO from "./img/TAMSLOGO.png"
import CircleLoader from "react-spinners/CircleLoader"

import { AiOutlineCheck } from "react-icons/ai"
import { BiError } from "react-icons/bi"


function PaymentCheckout() {
    const navigate = useNavigate();
    const { user } = useAuthContext()

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")

    const [key, setKey] = useState("")
    const [errorresponse, setResponse] = useState({ ok: false, data: "", error: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        
        const response = await fetch("http://localhost:80/validateKey", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({key})
        })
        const json = await response.json()  
        
        if (response.ok) {
            navigate("/AccountManager")
        }

        if (!response.ok) {
            setIsLoading(false)
            setResponse({ ok: false, data: "", error: json.error })
        }
    }

    useEffect(() => {
        if (user) {
            setEmail(user.email)
            setFirstName(user.firstname)
            setLastName(user.lastname)
            setUsername(user.username)
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center h-screen bg-gradient-to-b from-[#F9B4F6] to-[#CDC2F5]">
                <div className="flex flex-col p-12 w-5/6 mt-16 mb-16 bg-[#F1FFF6]/50 rounded-xl border-2 border-[#F7F7F7]">
                    <div className="flex justify-center">
                        <img src={TAMSLOGO} alt="" className="rounded-2xl w-[90px]"></img>
                    </div>
                <div className="flex justify-center mt-4 gradient from-purple-400 to-pink-600">
                <h1 className="text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                  TAMS
                </h1>
                <h1 className="text-3xl font-bold text-[#3939FF]">
                    .ai
                </h1>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col">
                    <div className="flex mt-4">
                        <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
                            Welcome
                        </h1>
                        <h1 className="text-2xl font-semibold ml-3 text-[#FF1493]">
                            {firstName}
                        </h1>
                        <h1 className="text-2xl font-semibold ml-3 text-[#FF1493]">
                            {lastName}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-16">   
                <div className="flex flex-col">
                    <div className="flex justify-center mb-2">
                        <h1 className="text-3xl font-semibold text-[#3939FF] mb-2">
                            Pre Launch Key
                        </h1>
                    </div>
                    <div className="flex justify-center">
                        <input type="text" onChange={(e) => setKey(e.target.value)}  placeholder="Pre Launch Key" className="p-4 rounded-xl">

                        </input>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[#FF1493] p-2 w-full mt-4 rounded-xl font-bold text-[#F7F7F7]">Activate</button>
                    </div>
                    <div className="flex justify-center mt-4">
                        {
                            isLoading ?
                                <CircleLoader
                                    size={50}
                                    color={"#123abc"}
                                    loading={isLoading}
                                />
                            :
                                <div></div>
                            }
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
      </form>
    )
}

export default PaymentCheckout