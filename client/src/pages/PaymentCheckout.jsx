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
                
            </div>
          </div>
        </div>
      </form>
    )
}

export default PaymentCheckout