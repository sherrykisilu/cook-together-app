import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
    const handleLogout = () => {
        onLogout();
    };

  return (
    <>
        <div className="flex-col my-4 border-l-8 p-8 w-1/8">
            <a href="/">
                <div className="flex-col relative justify-center h-1/4">
                    <h1 className="text-8xl text-white font-bold damn hover:cursor-pointer">
                        <span className="hover:font-outline-2 hover:text-black">
                        C
                        </span>
                        <span className="hover:font-outline-2 hover:text-black">
                        O
                        </span>
                        <span className="hover:font-outline-2 hover:text-black">
                        O
                        </span>
                        <span className="hover:font-outline-2 hover:text-black">
                        K
                        </span>
                        <br />
                        <span className="hover:font-outline-2 hover:text-black">
                        T
                        </span>
                        <span className="hover:font-outline-2 hover:text-black">
                        O
                        </span>
                        <span className="hover:font-outline-2 hover:text-black">
                        G
                        </span>
                        <span className="hover:font-outline-2 hover:text-black">
                        E
                        </span>
                        <span className="hover:font-outline-2 hover:text-black">
                        T
                        </span>
                        <span className="hover:font-outline-2 hover:text-black">
                        H
                        </span>
                        <span className="hover:font-outline-2 hover:text-black">
                        E
                        </span>
                        <span className="hover:font-outline-2 hover:text-black">
                        R
                        </span>
                    </h1>
                </div>
            </a>
            <div className="flex flex-col relative justify-end h-3/4">
                <div className="flex-col relative">
                    {/* <Link to="/about">
                        <div className="flex-col relative">
                            <h1 className="flex align-center pl-4 py-1 text-white text-5xl damn hover:bg-white hover:font-bold hover:text-black hover:text:6xl">ABOUT</h1>
                        </div>
                    </Link> */}
                    { user ? (
                        
                        <>
                            <Link to="/recipes">
                                <div className="flex-col relative">
                                    <h1 className="flex align-center pl-4 py-1 text-white text-5xl damn hover:bg-white hover:font-bold hover:text-black hover:text:6xl">RECIPES</h1>
                                </div>
                            </Link>
                            <Link onClick={handleLogout} >
                                <div className="flex-col relative">
                                    <h1 className="flex align-center pl-4 py-1 text-white text-5xl damn hover:bg-white hover:font-bold hover:text-black hover:text:6xl">LOGOUT</h1>
                                </div>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/signup">
                                <div className="flex-col relative">
                                    <h1 className="flex align-center pl-4 py-1 text-white text-5xl damn hover:bg-white hover:font-bold hover:text-black hover:text:6xl">SIGNUP</h1>
                                </div>
                            </Link>
                            <Link to="/login">
                                <div className="flex-col relative">
                                    <h1 className="flex align-center pl-4 py-1 text-white text-5xl damn hover:bg-white hover:font-bold hover:text-black hover:text:6xl">LOGIN</h1>
                                </div>
                            </Link>
                        </>
                    ) }
                    
                </div>
                
            </div>
            
        </div>
    </>
  )
}

export default Navbar
