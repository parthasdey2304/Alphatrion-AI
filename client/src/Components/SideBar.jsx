import { useState } from "react";
import SettingsModal from "./SettingsModal";

const SideBar = () => {
  const [newChat, setNewChat] = useState(false);
  const [settings, setSettings] = useState(false);

  return (
    <div className="hidden md:block w-[400px] h-full p-4 flex-col space-y-4">
        {/* this is the upper rounded rectangle of th sidebar */}
        <div className="w-full h-[60px] bg-white/20 rounded-3xl flex justify-between p-4 items-center text-2xl text-white font-medium">
          {/* this is the back button */}
          <span className="px-2 py-1 rounded-full hover:bg-white/20 duration-100 hover:duration-100">
            <i class="ri-wechat-channels-line "></i>
          </span>
          <span>My Chat</span>
          <span className="relative" onClick={() => {setSettings(!settings)}}>
            <i class="ri-equalizer-line hover:bg-white/20 duration-100 hover:duration-100 px-2 py-2 rounded-full cursor-pointer"></i>
            {/* <SettingsModal visibility={settings} /> */}
          </span>
        </div>

        {/* this is the lower section of the sidebar where all the chats are listed down */}
        <div className="w-full h-[90%] bg-white/20 rounded-3xl flex-col p-2 space-y-2">
          <div className="w-full h-[90%] rounded-xl bg-white/30"></div>
          <div className="w-full h-[8%] rounded-xl flex justify-center items-center">
            {/* this is the button for new chat */}
            <div className="w-full h-[65px] bg-blue-600 rounded-xl p-4 flex justify-between items-center" onClick={() => {setNewChat(true)}}>
              <span className="text-xl text-white font-medium">New Chat</span>
              <i class="ri-add-line text-2xl px-2 py-1 rounded bg-white"></i>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SideBar;