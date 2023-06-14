import React, { useState }  from 'react'

import { AiFillBell, AiFillInstagram } from "react-icons/ai"
import { BsFillChatDotsFill } from "react-icons/bs"
import { BiFilter } from "react-icons/bi"

import { Link } from "react-router-dom"

function Chat() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col h-screen">
          <div className="flex bg-[#F9B4F6]/30 p-5">
              <div className="flex flex-col w-full">
                  <div className="">
                    <h1 className="font-bold text-2xl">
                      Chat
                    </h1>
                  </div>
  
                  <div className="">
                    <input type="text" placeholder="Suche" className="w-full p-2 mt-3 rounded-xl border border-pink-500">
  
                    </input>
                  </div>
  
                  <div className="flex justify-between mt-4">
  
                    {isOpen ? (
                      <div className="bg-purple-500/50 w-20 rounded-full">
                      <button
                          onClick={toggle}
                          className={`p-2 w-10 bg-pink-500 text-white rounded-full focus:outline-none ${
                            isOpen ? 'translate-x-full ' : 'translate-x-0'
                          } transition-transform duration-300 ease-in-out`}
                        >
                          {isOpen ? 
                          <span className="text-xs font-bold">on</span> 
                          : 
                          <span className="text-xs font-bold">off</span>
                          }
                      </button>
                    </div>
                    ) : (
                      <div className="bg-[#F7F7F7] w-20 rounded-full">
                        <button
                          onClick={toggle}
                          className={`p-2 w-10 bg-pink-500 text-white rounded-full focus:outline-none ${
                            isOpen ? 'translate-x-full ' : 'translate-x-0'
                          } transition-transform duration-300 ease-in-out`}
                        >
                          {isOpen ? 
                          <span className="text-xs font-bold">on</span> 
                          : 
                          <span className="text-xs font-bold">off</span>
                          }
                      </button>
                      </div>
                    )}
  
  
                    <div className="flex justify-between bg-pink-500 rounded-full">
                      <div className="p-2 ml-2">
                        <BiFilter className="text-3xl text-white" />
                      </div>
                      <div className="p-2 mr-2">
                        <span className="text-xl text-white">Filter</span>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
  
          <div className="flex flex-col h-screen bg-[#F7F7F7]">
              <div className="flex justify-center">
                  <div className="mt-8">
                    <h1 className="font-bold text-3xl">
                        In der Entwicklung..
                    </h1>
                  </div>
              </div>
              <div className="flex justify-center">
                  <div className="mt-2">
                    <h1 className="font-semibold">
                          AI Chat wird noch programmiert.
                    </h1>
                  </div>
              </div>
          </div>
  
          <div className="flex justify-between bg-[#F9B4F6]/30 p-3">
              <div className="flex flex-col">
                  <div className="flex justify-center mb-1">
                    <AiFillBell className="text-xl" />
                  </div>
                  <Link to="/Home" className="font-bold">Aktivität</Link>
              </div>
  
              <div className="flex flex-col">
                  <div className="flex justify-center mb-1">
                    <BsFillChatDotsFill className="text-xl text-pink-500" />
                  </div>
                  <Link to="/Chat" className="font-bold text-pink-500">Chat</Link>
              </div>
  
              <div className="flex flex-col">
                  <div className="flex justify-center mb-1">
                    <AiFillInstagram  className="text-xl" />
                  </div>
                  <Link to="/Posts" className="font-bold">Beiträge</Link>
              </div>
          </div>
        </div>
      )
}

export default Chat