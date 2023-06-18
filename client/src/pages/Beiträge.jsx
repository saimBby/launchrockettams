import React, { useState, useEffect } from 'react';
import { RiListSettingsFill } from "react-icons/ri"
import { useAuthContext } from '../hooks/useAuthContext'

import img from "./img/img.jpg"
import imgprv from "./img/imgprv.jpg"
import bg from "./img/background-posts.jpg"

import Axios from "axios"

function Beiträge() {
  const { user } = useAuthContext()

  const [step, setStep] = useState(1);
  const [selectedContent, setSelectedContent] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleStartNow = (content) => {
    setStep(2);
    setSelectedContent(content);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null)

  const [caption, setCaption] = useState("")

  const handleImageChange = (event) => {
      const file = event.target.files[0]
      setSelectedImage(file)
      setImagePreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    // Überprüfen, ob userdata im Local Storage vorhanden ist
    const storedUserData = localStorage.getItem('userdata');

    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  });

  const handleSelectImg = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("image", selectedImage)
    formData.append("caption", caption)
    formData.append("userdata", userData)

    await Axios.post("https://tamsrocketlaunch-6th5.onrender.com/uploadImg", formData)
  }


  const renderContent = () => {
    if (step === 1) {
      return (
        <div className="flex flex-col ">
          <div className="flex flex-col bg-gradient-to-b from-pink-500/20 to-blue-200 p-3 rounded-t-2xl">
            <div className="flex flex-col border-2 border-[#F7F7F7] w-full p-3 rounded-2xl">
              <h1 className="text-2xl bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent font-bold">
                Select Image
              </h1>
              <h1 className="mt-1 font-semibold">
                And post it
              </h1>
              <button
                className="
                  mt-5 bg-gradient-to-r from-pink-500 
                  to-purple-700 text-white font-semibold 
                  py-2 px-4 rounded-xl
                "
                onClick={() => handleStartNow('select')}
              >
                Start now
              </button>
            </div>
          </div>

          <div className="flex flex-col bg-gradient-to-b from-pink-500/20 to-blue-200 p-3 rounded-b-2xl mt-8">
            <div className="flex flex-col border-2 border-[#F7F7F7] w-full p-3 rounded-2xl">
              <h1 className="text-2xl bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent font-bold">
                Generate Post's
              </h1>
              <h1 className="mt-1 font-semibold">
                by using our own AI
              </h1>
              <button
                className="
                  mt-5 bg-gradient-to-r from-pink-500 
                  to-purple-700 text-white font-semibold 
                  py-2 px-4 rounded-xl
                "
                onClick={() => handleStartNow('generate')}
              >
                Start now
              </button>
            </div>
          </div>
        </div>
      );
    } else if (step === 2) {
      if (selectedContent === 'select') {
        return (
          <div className="flex flex-col">
            <label className="mt-3 py-2 px-4 bg-pink-500 text-white font-semibold rounded-xl shadow-sm cursor-pointer">
                Bild auswählen
                <input
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                />
            </label>

            {imagePreview ? (
            <div className="flex flex-col mt-4 p-4 bg-pink-500/20 rounded-xl">
              <h2 className="mt-2 mb-2 text-xl font-semibold">
                Image Preview
              </h2>
              <img src={imagePreview} alt="Bildvorschau" />
            </div>
            ) : (
              <img className="mt-4" src={imgprv} alt="Fixes Bild" />
            )}

            <div className="flex flex-col mt-3">
              <input type="text" placeholder="Bild Beschreibung"
              className="mt-2 p-4 w-full bg-pink-500 rounded-xl
              text-[#F7F7F7] font-bold" onChange={(e) => setCaption(e.target.value)} 
              >
              </input>
            </div>

            <button className="mt-20 w-full p-2
            bg-pink-500 text-white font-semibold">Weiter</button>
          </div>
        );
      } else if (selectedContent === 'generate') {
        return (
          <div className="flex flex-col">
            <span>Generate image</span>
          </div>
        );
      }
    } else if (step === 3) {
      return (
        <div className="flex flex-col">
            {selectedContent === 'select' && 
            <div className="flex flex-col mt-2">
                <h1 className="text-2xl mt-3 font-bold">
                  Post Settings
                </h1>
                <h1 className="text-xl mt-3 font-semibold">
                    Publish from Account: {userData}
                </h1>
                <form onSubmit={handleSelectImg}>
                  <button className="p-2 w-full bg-black mt-4 text-white">Publish</button>
                </form>
            </div>}

            {selectedContent === 'generate' && 
            <p>
                You selected: Generate
            </p>}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gradient-to-t from-white to-blue-300 text-white p-4 py-4">
        <div className="flex justify-between w-4/6">
          <div className="">
            <img src={img} alt="" className="w-[65px] h-[65px] rounded-full"></img>
          </div>
          <div className="">
            <h1 className="text-2xl mt-3 font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Post Images
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-6 mt-6">
        <button
          className={`${
            step === 1 ? 'text-pink-500 font-bold' : 'text-blue-200 font-semibold'
          }`}
          onClick={() => setStep(1)}
        >
          Step 1
        </button>
        <button
          className={`${
            step === 2 ? 'text-pink-500 font-bold' : 'text-blue-200 font-semibold'
          }`}
          onClick={() => setStep(2)}
        >
          Step 2
        </button>
        <button
          className={`${
            step === 3 ? 'text-pink-500 font-bold' : 'text-blue-200 font-semibold'
          }`}
          onClick={() => setStep(3)}
        >
          Step 3
        </button>
      </div>

      <div className="flex flex-col h-screen p-6 mt-6">
        {renderContent()}
      </div>

      <div className="bg-gradient-to-b from-white to-blue-300 text-white p-4 py-4 text-white py-4">
        asd
      </div>
    </div>
  );
}

export default Beiträge;
