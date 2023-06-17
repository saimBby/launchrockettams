import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { redirect, useNavigate } from "react-router-dom"

import { BsInstagram } from "react-icons/bs"

function AccountManager() {
    const { user } = useAuthContext()
    const [email, setEmail] = useState("")

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [showDiv, setShowDiv] = useState(false);
    const [error, setError] = useState("");
    const [accountName, setAccountName] = useState("")

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("https://tamsrocketlaunch.onrender.com/instagramLogin", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ username, password, email })
        })

        const json = await response.json()  
        console.log(json.accessData.email)
        console.log(json.accessData.password)
        if (response.ok) { 
            
            const message = "Account added, you can go further :)"
            setAccountName(message);
            setShowDiv(true);
            setError("");
            setUsername("")
            setPassword("")
            
            localStorage.setItem('userdata', JSON.stringify(json.accessData.username))


        }

        if (!response.ok) {
            setError(json.error);
            setShowDiv(false);
            setUsername("")
            setPassword("")
        }
    }

    useEffect(() => {
        if (user) {
            setEmail(user.email)
        }
    })

    useEffect(() => {
        const user = localStorage.getItem('userdata');
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
    })

    const redirectUser = () => {
        if (isLoggedIn) {
            navigate("/Home")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center h-screen bg-gradient-to-b from-[#F9B4F6] to-[#CDC2F5]">
                <div className="flex flex-col p-12 w-5/6 mt-16 mb-16 bg-[#F1FFF6]/50 rounded-xl border-2 border-[#F7F7F7]">
                    <div className="flex justify-center">
                        <BsInstagram className="text-2xl mt-1.5 mr-2 text-pink-500" />
                        <h1 className="text-2xl text-[#3939FF] font-semibold">Manager</h1>
                    </div>

                    <div className="flex flex-col mt-10 mb-10">
                        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="mb-6 p-3 rounded-md border border-pink-500">
 
                        </input>

                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="mb-6 p-3 rounded-md border border-pink-500">
                            
                        </input>
                        <button className="bg-pink-500/80 p-1 rounded-2xl text-white font-bold">Sign in</button>
                    </div>

                    {showDiv && (
                        <div className="flex flex-col bg-green-500/40 p-4 rounded-md">
                        <div className="flex">
                            <span className="ml-2">{accountName}</span>
                            <span className="font-bold">Hinzugefügt: </span>
                        </div>
                        </div>
                    )}
                    {error && (
                        <div className="flex flex-col bg-red-500/40 p-4 rounded-md">
                        <div className="flex">
                            <span className="ml-2">{error}</span>
                        </div>
                        </div>
                    )}

                    <div className="flex justify-center mt-60">
                        <button onClick={redirectUser} className="p-2 bg-pink-500 w-full text-white font-semibold">Weiter</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AccountManager