import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import { useAuthContext } from '../hooks/useAuthContext'

import TAMSLOGO from "./img/TAMSLOGO.png"

function NewSignup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [lastname, setLastName] = useState("")
    const [firstname, setFirstName] = useState("")
    const [username, setUsername] = useState("")

    const { dispatch } = useAuthContext()

    const [setting, setSetting] = useState(false)

    const handleSettings = () => {
      setSetting(!setting);
    };

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const response = await fetch("http://localhost:4000/tamssignup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ firstname, lastname, username, email, password })
        })
        const json = await response.json()  
        
        if (response.ok) {
          console.log("success")
        }
        if (!response.ok) {
          console.log(json.error)
        }
    }

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

            {setting ? (
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
                          Sign up
                        </h1>
                      </div>

                      <div className="flex justify-center">
                        <h1 className="text-[#6666FF] text-2xl font-semibold">
                          & Get 1 Month Free
                        </h1>
                      </div>

                      <div className="flex justify-center">
                        <h1 className="text-[#6666FF]  font-bold">
                          Do you have an account?
                        </h1>
                        <Link to="/Login" className="text-orange-600 ml-2 font-semibold">
                          Login
                        </Link>
                      </div>

                      <div className="flex justify-center mt-8">
                        <input onChange={(e) => {setFirstName(e.target.value)}} type="text" placeholder="First name" className="w-full p-4 rounded-2xl hover:border-2 hover:border-fuchsia-600">

                        </input>

                        <input onChange={(e) => {setLastName(e.target.value)}} type="text" placeholder="Last name" className="w-full p-4 rounded-2xl hover:border-2 hover:border-fuchsia-600 ml-6">

                        </input>
                      </div>

                      <div className="flex justify-center mt-8">
                        <input onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" className="w-full p-4 rounded-2xl hover:border-2 hover:border-fuchsia-600">

                        </input>
                      </div>

                      <div className="flex justify-center mt-8">
                        <input onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="Username" className="w-full p-4 rounded-2xl hover:border-2 hover:border-fuchsia-600">

                        </input>
                      </div>

                      <div className="flex justify-center mt-8">
                        <input onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" className="w-full p-4 rounded-2xl hover:border-2 hover:border-fuchsia-600">

                        </input>
                      </div>

                      <div className="flex justify-center mt-8">
                        <input onChange={(e) => {setNewPassword(e.target.value)}} type="password" placeholder="Confirm Password" className="w-full p-4 rounded-2xl hover:border-2 hover:border-fuchsia-600">

                        </input>
                      </div>

                      <div className="flex justify-center mt-8">
                        <button className="bg-[#FF1493] p-3 w-full rounded-2xl text-[#F7F7F7] font-bold">
                          Sign up, & get 1 Month free
                        </button>
                      </div>
                    </div>
                </div>  
            ) : (
                <div>
                    <div className="flex justify-center mt-6">
              <h1 className="text-[#3939FF] text-4xl font-semibold">
                Künstliche Intelligenz unterstützt
              </h1>
            </div>
            <div className="flex justify-center mt-4">
              <h1 className="text-6xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                  Insta Prozesse automatisieren für Affiliate 
              </h1>
            </div>
            <div className="flex flex-col mt-2">
              <div className="flex justify-center">
                <h1 className="text-6xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                  marketer
                </h1>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center mt-4">
                  <h1 className="text-[#000000] font-semibold text-xl">
                    Skaliere bis zu 8 Instagram Accounts mit hilfe von
                  </h1>
                  <h1 className="text-[#000000] font-bold text-xl ml-2">
                    Chat GPT
                  </h1>
              </div>
              <div className="flex justify-center mt-1">
                <h1 className="text-[#000000] font-semibold text-xl">
                    und Automatiesiere Kunden Chats, sowie Instagram Storys & Beiträge
                </h1>
              </div>
            </div>
            <div className="flex justify-center mt-6">
                <button onClick={handleSettings} className="bg-pink-500 p-3 w-1/4 rounded-2xl font-bold text-[#F7F7F7]">
                  Starte jetzt gleich
                </button>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-center mt-16">
                <h1 className="text-[#3939FF] text-4xl font-semibold">
                  Nutze bis zu 8 Insta Accounts voll Automatisiert durch Chatp-GPT
                </h1>
              </div>

              <div className="flex justify-center mt-4">
                <h1 className="text-6xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                    Artificial AI nutzen
                </h1>
              </div>

              <div className="flex justify-center mt-2">
                <h1 className="flex flex-col items-center text-[#000000] font-semibold w-2/4">
                    <span>Im Jahr 2023 ist es einfacher denje Geld durch Network Marketing zu verdienen,</span>
                    <span className="w-6/6">deswegen solltest du deine Zeit nicht mit dem schreiben von Kunden, und den</span>
                    <spann>Aufbau von Instagram Accounts verschwenden.</spann>
                </h1>
              </div>
              <div className="flex justify-center mt-6">
                <div className="flex justify-between w-2/4">
                  <div className="flex flex-col mr-20 p-4 rounded-2xl bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 w-3/6 pb-8">
                    <div className="flex flex-col">
                        <h1 className="text-[#F7F7F7] font-extrabold text-3xl">
                          Bis zu 8x
                        </h1>
                        <h1 className="text-[#F7F7F7] font-bold text-xl">
                          Höhrere Konversionsraten
                        </h1>
                        <h1 className="text-[#F7F7F7] font-semibold mt-8">
                          Lass Chat-GPT die Kunden Konversationen übernehmen
                        </h1>
                        <div className="border-2 border-b-[#F7F7F7] mt-4"></div>
                    </div>
                  </div>

                  <div className="flex flex-col p-6 rounded-2xl w-3/6 bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500">
                      <div className="flex flex-col">
                        <div> 
                          <h1 className="text-[#F7F7F7] font-extrabold text-3xl">
                              Über 80%
                          </h1>
                          <h1 className="text-[#F7F7F7] font-bold text-xl">
                              Der Nutzer verbessern ihre CTR
                          </h1>
                          <h1 className="text-[#F7F7F7] font-semibold mt-8">
                              In den ersten 2 Monaten, in dem sie unsere Platform einsetzen.
                          </h1>
                          <div className="border-2 border-b-[#F7F7F7] mt-4"></div>
                      </div>
                    </div>
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

export default NewSignup