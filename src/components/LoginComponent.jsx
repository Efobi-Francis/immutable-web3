
import { useEffect, useState } from "react";
import { Login, getUserInfo } from "../auth/ImmutableAuth.ts";
import { useAuth } from "./AuthContext.jsx";

export default function LoginComponent() {
  const { loginUser } = useAuth()

  const handleLogin = async () => {
    
    const user = getUserInfo()
    console.log(user)
    loginUser(user)

    const accounts = Login()
    
    accounts.then(accounts => {
      console.log("User logged in:", accounts);
    }).catch(error => {
      console.error("Error:", error);
    })

  };

  return <button onClick={handleLogin} className=" font-medium bg-[hsl(230,89%,65%)] py-4 px-10 border-2 border-white rounded-lg tracking-widest text-lg uppercase">Login to play</button>;
}
