import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage(){
    const [name,setName]= useState('');
    const[email, setEmail]= useState('');
    const[password,setPassword]= useState('');
    function registerUser(ev){
        ev.preventDefault();
        axios.get('http://localhost:4000/test');
    }
    return (
        <div className="mt-4 grow flex items-center justify-around" >
            <div className="mb-32">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form action="" className="max-w-md mx-auto">
                <input type="text" name="myname" id="mname" placeholder="John Doe"
                    value={name} 
                    onChange={ev => setName(ev.target.value)} />
                <input type="email" name="myemail" id="memail" placeholder="your@email.com" 
                    value={email} 
                    onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" name="mypassword" id="mpassword" placeholder="password" 
                    value={password} 
                    onChange={ev => setPassword(ev.target.value)}/>
                <button className="primary">Register</button>
                <div className="text-center py-2 text-gray-500">
                    Already a member? 
                    <Link className="underline text-red-300" to={"/login"}>Go to login
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg> */}
                    </Link>
                </div>
            </form>
            </div>
           
        </div>
    )
}