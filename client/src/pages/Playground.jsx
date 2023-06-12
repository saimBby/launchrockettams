import TAMSLOGO from "./img/TAMSLOGO.png"

import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

function Playground() {
    const [setting, setSetting] = useState(false)

    const handleSettings = () => {
      setSetting(!setting);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center h-screen bg-gradient-to-b from-[#F9B4F6] to-[#CDC2F5]">
                <div className="flex flex-col p-4 w-5/6 mt-16 mb-16 bg-[#F1FFF6]/50 rounded-xl border-2 border-[#F7F7F7]">
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

                    {setting ? (
                        <div className="flex flex-col">
                            <div className="flex justify-center mt-2">
                                <div className="flex flex-col">
                                    <h1 className="flex justify-center mt-2 text-3xl font-bold text-pink-500">
                                        Sign in
                                    </h1>

                                    <div className="flex justify-center mt-1">
                                        <h1 className="text-[#6666FF] font-bold">
                                            You dont have an account?
                                        </h1>
                                        <Link to="/" className="text-orange-600 ml-2 font-semibold">
                                            Signup
                                        </Link>
                                    </div>

                                    <div className="flex justify-center mt-4 ">
                                        <input type="email" className="w-full p-2 rounded-xl border border-pink-500" placeholder="Email">

                                        </input>
                                    </div>
                                    <div className="flex justify-center mt-4 ">
                                        <input type="password" className="w-full p-2 rounded-xl border border-pink-500" placeholder="Password">

                                        </input>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <button className="bg-pink-500 w-full p-2 rounded-xl font-bold text-white">
                                            Sign in
                                        </button>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <span className="font-extrabold text-red-500">Error</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="flex justify-center mt-2 w-full">
                                <h1 className="font-semibold text-[#3939FF]">
                                    Künstliche Intelligenz unterstützt
                                </h1>
                            </div>
                            <div className="flex justify-center mt-2 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                                <h1 className="text-2xl font-bold">
                                    Automatischen Vertrieb
                                </h1>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button onClick={handleSettings} className="bg-pink-500 p-3 rounded-2xl font-bold text-[#F7F7F7]">
                                    Starte jetzt gleich
                                </button>
                            </div>
                            <div className="flex justify-center mt-4">
                                <div className="flex justify-between w-full">
                                    <div className="flex flex-col p-4 mr-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 w-1/2 rounded-md">
                                        <h1 className="font-extrabold text-[#F7F7F7]">
                                            Bis zu 14x
                                        </h1>
                                        <h1 className="text-[#F7F7F7] text-xs font-bold">
                                            Höhere Konversationsraten
                                        </h1>
                                        <h1 className="text-[#F7F7F7] text-xs font-bold mt-6">
                                            Im vergleich zum Manuellen Vetrieb
                                        </h1>
                                        <div className="border-2 border-b-[#F7F7F7] mt-4"></div>
                                    </div>

                                    <div className="flex flex-col p-4 ml-1 bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500 w-1/2">
                                        <h1 className="font-extrabold text-[#F7F7F7]">
                                            Bis zu 14x
                                        </h1>
                                        <h1 className="text-[#F7F7F7] text-xs font-bold">
                                            Höhere Konversationsraten
                                        </h1>
                                        <h1 className="text-[#F7F7F7] text-xs font-bold mt-6">
                                            Im vergleich zum Manuellen Vetrieb
                                        </h1>
                                        <div className="border-2 border-b-[#F7F7F7] mt-4"></div>
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

export default Playground