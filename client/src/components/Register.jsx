import { useRef, useState } from "react";
import axios from "axios";
import Input from "./Input";
import UseRegister from "../hooks/UseRegister";

export default function Register() {
  const fullNameref = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const { onSubmit,response } = UseRegister();
  console.log(response);
  
  return (
    <div className="bg-pink p-4 grid gap-5 w-1/3">
      {response}
      <Input typeInput="text" label="Full name" ref={fullNameref} />
      <Input typeInput="text" spaceBar label="Username" ref={usernameRef} />
      <Input typeInput="email" spaceBar label="Email" ref={emailRef} />
      <Input typeInput="password" spaceBar label="password" ref={passwordRef} />
      <button
        className="bg-darkWhite"
        onClick={() =>
          onSubmit({
            fullNameref: fullNameref.current.value(),
            usernameRef: usernameRef.current.value(),
            emailRef: emailRef.current.value(),
            passwordRef: passwordRef.current.value(),
          })
        }
      >
        Register
      </button>
    </div>
  );
}
