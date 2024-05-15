import SideBar from "./Components/SideBar";
import background from "./assets/background.png";
import { useState } from "react";

function App() {
  const [chatName, setChatName] = useState("New chat");
  const [bookMarked, setBookMarked] = useState(false);

  return (
    <div className="w-full h-screen bg-black flex justify-start font-['Poppins'] duration-300">
      {/* this is the content for the SideBar */}
      <div className="w-[400px] h-full p-4 flex-col space-y-4">
        {/* this is the upper rounded rectangle of th sidebar */}
        <div className="w-full h-[60px] bg-blue-600 rounded-3xl flex justify-between p-4 items-center text-2xl text-white font-medium">
          <i class="ri-wechat-channels-line"></i>
          <span>My Chat</span>
          <i class="ri-equalizer-line"></i>
        </div>

        {/* this is the lower section of the sidebar where all the chats are listed down */}
        <div className="w-full h-[90%] bg-blue-600 rounded-3xl"></div>
      </div>

      {/* this is the main content container of the page */}
      <div className="w-[calc(100%-400px)] h-full bg-green-600 flex-col justify-between">

        {/* this is the navbar of the page */}
        <div id="navbar" className="w-full h-[60px] bg-white flex items-center justify-between px-4">
          {/* this is the left side of the navbar, containing the chat name and the back button to the home page. */}
          <div className="flex space-x-2 items-center">
            <i class="ri-arrow-left-s-line text-3xl"></i>
            <span className="text-2xl font-medium">{chatName}</span>
            <span className="bg-blue-600 text-blue-200 font-medium rounded-xl px-2 py-1">Mistral 7.B</span>
          </div>

          {/* this is the right side of the navbar containing the share and the bookmark options */}
          <div className="flex space-x-2 items-center">
            {/* this is the bookmark toggle */}
            <span className="text-2xl" onClick={() => {setBookMarked(!bookMarked)}}>
              {bookMarked? (<i class="ri-bookmark-fill"></i>) : (<i class="ri-bookmark-line"></i>)}
            </span>

            {/* this is the icon for sharing the webpage */}
            <span className="text-2xl">
              <i class="ri-share-2-line"></i>
            </span>
          </div>
        </div>

        {/* this is the container of the page where in new chat the new chatbox appears */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[700px] h-[600px] bg-white/30 rounded-2xl"></div>
        </div>
      </div>
    </div>
  )
}

export default App;