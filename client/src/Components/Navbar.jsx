import { useState } from "react";
import Toast from "./Toast";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ chat="New Chat", bookmark=false }) => {
    const [chatName, setChatName] = useState(chat);
    const [bookMarked, setBookMarked] = useState(bookmark);
    const [loggedIn, setLoggedIn] = useState(false);
    const { loginWithRedirect } = useAuth0();

    const handleLogin = () => {
        
    }
    
    return (
            <div id="navbar" className="w-full h-[60px] mt-4 text-white rounded-full flex items-center justify-between px-4">
                {/* this is the left side of the navbar, containing the chat name and the back button to the home page. */}
                <div className="flex space-x-2 items-center">
                <i class="ri-arrow-left-s-line text-3xl"></i>
                <span className="text-2xl font-medium">{ chatName }</span>
                <span className="bg-blue-600 text-blue-100 font-medium rounded-xl px-2 py-1 hidden md:block">Mistral 7.B</span>
                </div>

                {/* this is the right side of the navbar containing the share and the bookmark options */}
                <div className="flex space-x-2 items-center px-2">
                {/* this is the bookmark toggle */}
                <span className="text-2xl px-2 py-1 hover:bg-white/20 duration-100 hover:duration-100 rounded-full cursor-pointer" onClick={() => {setBookMarked(!bookMarked)}}>
                    {bookMarked? (<i class="ri-bookmark-fill"></i>) : (<i class="ri-bookmark-line"></i>)}
                </span>
                <span>
                    {bookMarked? (<Toast message="Chat Bookmarked" />) : (<></>)}
                </span>

                {/* this is the icon for sharing the webpage */}
                <span className="text-2xl px-2 py-1 hover:bg-white/20 duration-100 hover:duration-100 rounded-full cursor-pointer">
                    <i class="ri-share-2-line"></i>
                </span>

                {/* this is the toggle for the login/logout button */}
                <span onClick={() => {setLoggedIn(!loggedIn)}} className="px-4 py-2 duration-300 rounded bg-blue-600">
                    {loggedIn? (<Profile />) : (<button onClick={() => loginWithRedirect()}>Login</button>)}
                </span>
                </div>

            </div>
    )
}

export default Navbar;