import React, { useState }  from 'react'

import { AiFillBell, AiFillInstagram } from "react-icons/ai"
import { BsFillChatDotsFill } from "react-icons/bs"
import { BiFilter } from "react-icons/bi"

import { Link } from "react-router-dom"

function Beiträge() {
    const [isOpen, setIsOpen] = useState(false);
    const [steps, setSteps] = useState(false)

    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    const toggleStep = () => {
        if (imagePreview && selectedImage) {
            setSteps(!steps)
        } else {    
            console.log("Select img")
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setSelectedImage(file)
        setImagePreview(URL.createObjectURL(file));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log("Hello, World")
      }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col h-screen">
                <div className="flex bg-[#F9B4F6]/30 p-5">
                    <div className="flex flex-col w-full">
                        <div className="">
                            <h1 className="font-bold text-2xl">
                                Post's
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
                <div className="flex justify-between bg-[#F9B4F6]/40 p-2">
                        <div className="ml-8">
                            <span className="font-bold">Schritt 1</span>
                        </div>
                        <div className="">
                            <span className="font-bold">Schritt 2</span>
                        </div>
                        <div className="mr-8">
                            <span className="font-bold">Schritt 3</span>
                        </div>
                </div>
                <div className="flex flex-col h-full">
                    {steps ? (
                        <div className="flex flex-col h-full">
                            <div className="flex flex-col py-4">
                                <div className="flex justify-center">
                                    <h1 className="font-semibold text-xl">
                                        Write an Image caption
                                    </h1>   
                                </div>
                                <div className="flex justify-center mt-6">
                                    <input type="text" placeholder="Your Caption" className="bg-[#F9B4F6]/40 
                                    p-4 w-full ml-4 mr-4 rounded-xl font-bold text-[#000000]">
                                        
                                    </input>
                                </div>
                            </div>
                            <div className="flex justify-center mt-2 mt-auto py-4">
                                <button className="p-2 bg-pink-500 w-3/4 rounded-xl text-white font-semibold">Post it</button>
                            </div>
                        </div>
                        ) : (
                            <div className="flex flex-col h-full">
                            <div className="flex justify-center py-4">
                                <h1 className="">
                                <span className="font-semibold text-xl">Select PNG Image</span>
                                </h1>
                            </div>

                            <div className="flex justify-center p-8">
                                <input
                                type="file"
                                onChange={handleImageChange}
                                className=""
                                accept="image/*"
                                />
                                {imagePreview && <img src={imagePreview} alt="Selected" className="rounded-xl" />}
                            </div>

                            <div className="flex justify-center mt-2 mt-auto py-4">
                                <button onClick={toggleStep} className="p-2 bg-pink-500 w-3/4 rounded-xl text-white font-semibold">Weiter</button>
                            </div>
                        </div>
                    )}
                    
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
                    <BsFillChatDotsFill className="text-xl" />
                  </div>
                  <Link to="/Chat" className="font-bold">Chat</Link>
              </div>
  
              <div className="flex flex-col">
                  <div className="flex justify-center mb-1">
                    <AiFillInstagram  className="text-xl text-pink-500" />
                  </div>
                  <Link to="/Posts" className="font-bold text-pink-500">Beiträge</Link>
              </div>
          </div>
        </div>
        </form>
      )
}

export default Beiträge