import React, { useState, useEffect } from "react"
import { useAuthContext } from '../hooks/useAuthContext'

import TAMSLOGO from "./img/TAMSLOGO.png"

import { AiOutlineCheck } from "react-icons/ai"


function PaymentCheckout() {
    const { user } = useAuthContext()

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

    }

    useEffect(() => {
        if (user) {
            if (user.data) {
                if (user.data.username) {
                    setUsername(user.data.username)
                }
                if (user.data.firstname) {
                    setFirstName(user.data.firstname)
                }
                if (user.data.lastname) {
                    setLastName(user.data.lastname)
                }
                if (user.data.email) {
                    setEmail(user.data.email)
                }
            }
        }
    })

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
            <div className="flex justify-center">
                <div className="flex flex-col">
                    <div className="flex mt-4">
                        <h1 className="text-5xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
                            Welcome Back 
                        </h1>
                        <h1 className="text-5xl font-semibold ml-3 text-[#FF1493]">
                            {firstName}
                        </h1>
                        <h1 className="text-5xl font-semibold ml-3 text-[#FF1493]">
                            {lastName}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-16">   
                <div className="flex justify-between w-4/6">
                    <div className="flex flex-col p-4 bg-[#F7F7F7] rounded-xl border-2 border-[#FF1493] w-1/4">
                        <div className="flex justify-center bg-[#3939FF] p-1 text-white font-semibold rounded-md">
                            1 Instagram Account
                        </div>

                        <div className="font-bold text-2xl mt-2">
                            Basic
                        </div>

                        <div className="">
                            Nutzbar mit einem Instagram Account. 19,99$ / Monat
                        </div>

                        <div className="h-[2px] mt-2  bg-[#000000]"></div>

                        <div className="flex justify-between p-2 mt-2 mb-2">
                            <AiOutlineCheck className="text-4xl mt-1 mr-4"/>
                            <span>AI Chating mit 5 Leuten am Tag</span>
                        </div>

                        <div className="flex justify-between p-2 mt-2 mb-2">
                            <AiOutlineCheck className="text-2xl mt-1 mr-4"/>
                            <span>2 Bilder am Tag posten.</span>
                        </div>

                        <div className="flex justify-between p-2 mt-2 mb-2">
                            <AiOutlineCheck className="text-xl mt-1"/>
                            <span className="mr-8">1 Story am Tag</span>
                        </div>

                        <div className="">
                            <button className="bg-[#000000] w-full rounded-md text-white p-1 font-semibold">
                                Los geht's
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col p-4 bg-[#F7F7F7] rounded-xl border-2 border-[#FF1493] w-1/4">
                        <div className="flex justify-center bg-[#3939FF] p-1 text-white font-semibold rounded-md">
                            2 Instagram Account
                        </div>

                        <div className="font-bold text-2xl mt-2">
                            Entrepreneur
                        </div>

                        <div className="">
                            Nutzbar mit zwei Instagram Account. 49,99$ / Monat
                        </div>

                        <div className="h-[2px] mt-2  bg-[#000000]"></div>

                        <div className="flex justify-between p-2 mt-2 mb-2">
                            <AiOutlineCheck className="text-4xl mt-1 mr-4"/>
                            <span>AI Chating mit 10 Leuten am Tag</span>
                        </div>

                        <div className="flex justify-between p-2 mt-2 mb-2">
                            <AiOutlineCheck className="text-2xl mt-1 mr-4"/>
                            <span>4 Bilder am Tag posten.</span>
                        </div>

                        <div className="flex justify-between p-2 mt-2 mb-2">
                            <AiOutlineCheck className="text-xl mt-1"/>
                            <span className="mr-6">2 Storys am Tag</span>
                        </div>

                        <div className="">
                            <button className="bg-[#000000] w-full rounded-md text-white p-1 font-semibold">
                                Los geht's
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col p-4 bg-[#F7F7F7] rounded-xl border-2 border-[#FF1493] w-1/4">
                        <div className="flex justify-center bg-[#3939FF] p-1 text-white font-semibold rounded-md">
                            3 Instagram Account
                        </div>

                        <div className="font-bold text-2xl mt-2">
                            Premium
                        </div>

                        <div className="">
                            Nutzbar mit drei Instagram Account. 99,99$ / Monat
                        </div>

                        <div className="h-[2px] mt-2  bg-[#000000]"></div>

                        <div className="flex justify-between p-2 mt-2 mb-2">
                            <AiOutlineCheck className="text-4xl mt-1 mr-4"/>
                            <span>AI Chating mit 15 Leuten am Tag</span>
                        </div>

                        <div className="flex justify-between p-2 mt-2 mb-2">
                            <AiOutlineCheck className="text-2xl mt-1 mr-4"/>
                            <span>6 Bilder am Tag posten.</span>
                        </div>

                        <div className="flex justify-between p-2 mt-2 mb-2">
                            <AiOutlineCheck className="text-xl mt-1"/>
                            <span className="mr-6">3 Storys am Tag</span>
                        </div>

                        <div className="">
                            <button className="bg-[#000000] w-full rounded-md text-white p-1 font-semibold">
                                Los geht's
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </form>
    )
}

export default PaymentCheckout