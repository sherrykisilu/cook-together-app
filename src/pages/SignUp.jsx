import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = ({ onSignUp }) => {
    // const [user, setUser] = useState(null);
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
         fetch("https://localhost:3000/s", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({ username, email, password }),
         }).then((r) => {
           if (r.ok) {
             r.json().then((user) => setUser(user));
           }
         });
        setUserName("");
        setEmail("");
        setPassword("");
        onSignUp();
    }
  return (
    <>
        <div className="flex flex-col justify-center my-4 p-8 w-3/4">
            <div className="flex flex-col mt-40  justify-center align-center mx-auto w-3/4">
                <div className="border-b w-3/4 m-8 p-4">
                    <h4 className="text-center text-white font-semibold text-4xl damn">
                        SIGN UP HERE...
                    </h4>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col w-3/4 m-10 ">
                    <div className="relative border-0 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className="peer bg-black text-2xl text-white border w-full p-4 placeholder-transparent transition duration-200"
                            placeholder="Username"
                            value={username}
                            onChange = { (e) => setUserName(e.target.value) }
                        />
                        <label htmlFor="username" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-black text-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Username</label>
                    </div>
                    <div className="relative border-0 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            className="peer bg-black text-2xl text-white border w-full p-4 placeholder-transparent transition duration-200"
                            placeholder="Email"
                            value={email}
                            onChange = { (e) => setEmail(e.target.value) }
                        />
                        <label htmlFor="email" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-black text-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Email</label>
                    </div>
                    <div className="relative border-0 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="peer bg-black text-2xl text-white border w-full p-4 placeholder-transparent transition duration-200"
                            placeholder="Password"
                            value={password}
                            onChange = { (e) => setPassword(e.target.value) }
                        />
                        <label htmlFor="password" className="absolute text-2xl font-semibold text-opacity-80 left-0.5 -top-2 bg-black text-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text">Password</label>
                    </div>
                    
                    <button
                        className="p-3 px-2 pt-2 text-white font-semibold md:bg-blue-800 md:w-full md:hover:bg-blue-700 sm:bg-blue-700"
                        type="submit"
                    >
                        SIGN UP
                    </button>

                    <div className="container mx-auto w-full m-5 p-3 border-spacing-4 bg-sky-500/5">
                        <p className="text-xl text-white text-center damn">
                        {" "}
                        By clicking on Sign Up, you accept our{" "}
                        <u>Subscriptions Agreement</u> and <u>Privacy Policy</u><br/>
                        <span className="pt-2">Already have an account? <Link to="/login"><u>Login</u></Link></span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signup