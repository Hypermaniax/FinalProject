import { useRef, useState } from "react";
import axios from "axios";
import Input from "./Input";

export default function Register() {
  const fullNameref = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  
  
  function handleClick() {
    
  }

  return (
    <div className="bg-pink p-4 grid gap-5 w-1/3">
      <Input typeInput="text" label="Full name" ref={fullNameref} />
      <Input typeInput="text" label="Username" ref={usernameRef} />
      <Input typeInput="text" label="Email" ref={emailRef} />
      <Input typeInput="text" label="password" ref={passwordRef} />
      <button onClick={handleClick} className="bg-darkWhite  ">Register</button>
    </div>
  );
}
