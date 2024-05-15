import { useState } from "react";

function App() {
  const [chatName, setChatName] = useState("New chat");
  const [bookMarked, setBookMarked] = useState(false);
  const [Microphone, setMicrophone] = useState(false);

  return (
    <div className="w-full h-screen bg-black flex justify-start font-['Poppins'] duration-300">
      {/* this is the content for the SideBar */}
      <div className="hidden md:block w-[400px] h-full p-4 flex-col space-y-4">
        {/* this is the upper rounded rectangle of th sidebar */}
        <div className="w-full h-[60px] bg-white/20 rounded-3xl flex justify-between p-4 items-center text-2xl text-white font-medium">
          {/* this is the back button */}
          <span className="px-2 py-1 rounded-full hover:bg-white/20 duration-100 hover:duration-100">
            <i class="ri-wechat-channels-line "></i>
          </span>
          <span>My Chat</span>
          <i class="ri-equalizer-line hover:bg-white/20 duration-100 hover:duration-100 rounded-full px-2 py-1 cursor-pointer"></i>
        </div>

        {/* this is the lower section of the sidebar where all the chats are listed down */}
        <div className="w-full h-[90%] bg-white/20 rounded-3xl"></div>
      </div>

      {/* this is the main content container of the page */}
      <div className="w-full md:w-[calc(100%-400px)] h-full flex-col justify-between">

        {/* this is the navbar of the page */}
        <div id="navbar" className="w-full h-[60px] mt-4 text-white rounded-full flex items-center justify-between px-4">
          {/* this is the left side of the navbar, containing the chat name and the back button to the home page. */}
          <div className="flex space-x-2 items-center">
            <i class="ri-arrow-left-s-line text-3xl"></i>
            <span className="text-2xl font-medium">{ chatName }</span>
            <span className="bg-blue-600 text-blue-100 font-medium rounded-xl px-2 py-1">Mistral 7.B</span>
          </div>

          {/* this is the right side of the navbar containing the share and the bookmark options */}
          <div className="flex space-x-2 items-center px-2">
            {/* this is the bookmark toggle */}
            <span className="text-2xl px-2 py-1 hover:bg-white/20 duration-100 hover:duration-100 rounded-full cursor-pointer" onClick={() => {setBookMarked(!bookMarked)}}>
              {bookMarked? (<i class="ri-bookmark-fill"></i>) : (<i class="ri-bookmark-line"></i>)}
            </span>

            {/* this is the icon for sharing the webpage */}
            <span className="text-2xl px-2 py-1 hover:bg-white/20 duration-100 hover:duration-100 rounded-full cursor-pointer">
              <i class="ri-share-2-line"></i>
            </span>
          </div>
        </div>

        {/* this is the container of the page where in new chat the new chatbox appears */}
        <div className="w-full h-[90%] flex justify-center items-center">

          {/* this is the modal for the newchat content page */}
          <div className="w-full md:w-[650px] h-[80%] md:h-[500px] bg-white/20 rounded-3xl flex-col justify-between space-y-6 md:space-y-0 p-4 m-2 md:m-0">

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
                <input type="text" placeholder="Enter chat name" className="w-full h-full px-2 py-1 rounded-xl font-medium focus:outline-none"
                // onChange={(e) => {setChatName(e.target.value)}} 
                />

                {/* this is the microphone button toggle */}
                <span className="text-2xl px-4 py-1 hover:bg-white/20 duration-100 hover:duration-100 rounded-full cursor-pointer" onClick={() => {setMicrophone(!Microphone)}}>
                  {Microphone? (<i class="ri-mic-fill text-blue-600"></i>) : (<i class="ri-mic-line"></i>)}
                </span>

                {/* this is the send button for the message that is to be sent */}
                <div className="px-4 h-full flex justify-center items-center bg-blue-600 text-white rounded-xl" onClick={() => {console.log("send button clicked")}}>
                  <i class="ri-arrow-right-line text-3xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;