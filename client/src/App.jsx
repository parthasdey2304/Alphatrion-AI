import { useState } from "react";
import SideBar from "./Components/SideBar";
import ModalNewChat from "./ModalNewChat";
import Navbar from "./Components/Navbar";

function App() {
  const [chatName, setChatName] = useState("New chat");
  const [bookMarked, setBookMarked] = useState(false);
  const [newChat, setNewChat] = useState(true);

  return (
    <div className="w-full h-screen bg-black flex justify-start font-['Poppins'] duration-300">
      {/* this is the content for the SideBar */}
      <SideBar />

      {/* this is the main content container of the page */}
      <div className="w-full md:w-[calc(100%-400px)] h-full flex-col justify-between">

        {/* this is the navbar of the page */}
        <Navbar chat={chatName} bookmark={bookMarked} />

        {/* this is the container of the page where in new chat the new chatbox appears */}
        <div className="w-full h-[90%] flex justify-center items-center">

          {/* this is the modal for the newchat content page */}
          <ModalNewChat />

        </div>
      </div>
    </div>
  )
}

export default App;