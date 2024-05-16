import { useState } from "react";

const ModalNewChat = () => {
    const [Microphone, setMicrophone] = useState(false);
  return (
        <>
            <div className="w-full md:w-[650px] h-full md:h-[500px] bg-white/20 rounded-3xl flex-col justify-between space-y-6 md:space-y-0 p-4 m-2 md:m-0">

              <div className="w-full h-[100px] flex justify-center items-center">
                <span className="px-3 py-2.5 hover:animate-spin bg-white/30 rounded-full">
                  <i class="ri-wechat-channels-line text-blue-700 text-4xl"></i> {/* this is the icon for the new chat */}
                </span>
              </div>

              <div className="w-full h-[50px] flex justify-center items-center text-center text-white text-4xl font-medium">
                Hola! How can I help you?
              </div>

              {/* this is the disclaimer about the model */}
              <div className="w-full h-[50px] flex justify-center items-center">
                <p className="text-sm text-white w-[80%] text-center">
                  AlphaTrion can make mistakes sometimes. Please do consider checking the information before believing it.
                </p>
              </div>

              {/* this contains the suggestion tiles for the new chat */}
              <div className="w-full h-[150px] md:h-[180px] flex space-x-5 justify-center items-center md:p-2 overflow-x-auto">
                <div className="w-[100px] md:w-1/3 h-full bg-white/30 rounded-2xl"></div>
                <div className="w-[100px] md:w-1/3 h-full bg-white/30 rounded-2xl"></div>
                <div className="w-[100px] md:w-1/3 h-full bg-white/30 rounded-2xl"></div>
              </div>

              {/* this contains the chatbox input for the new Chat */}
              <div className="w-full h-[100px] px-2 flex justify-center items-center">
                <div className="w-full h-[60px] bg-white rounded-2xl flex justify-center items-center">
                  <span className="px-2">
                    <i class="ri-wechat-channels-line text-black text-4xl"></i>
                  </span>
                  <input type="text" placeholder="Enter chat name" className="w-full h-full px-2 py-1 rounded-xl font-medium focus:outline-none border-transparent"
                  // onChange={(e) => {setChatName(e.target.value)}} 
                  />

                  {/* this is the microphone button toggle */}
                  <span className="text-2xl px-2 mx-2 py-1 hover:bg-blue-600 hover:text-white duration-100 hover:duration-100 rounded-full cursor-pointer" onClick={() => {setMicrophone(!Microphone)}}>
                    {Microphone? (<i class="ri-mic-fill text-red-600"></i>) : (<i class="ri-mic-line"></i>)}
                  </span>

                  {/* this is the send button for the message that is to be sent */}
                  <div className="px-4 h-full flex justify-center items-center bg-blue-600 text-white rounded-xl" onClick={() => {console.log("send button clicked")}}>
                    <i class="ri-arrow-right-line text-3xl"></i>
                  </div>
                </div>
              </div>
            </div>
        </>
  )
}

export default ModalNewChat;