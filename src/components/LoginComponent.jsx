
import { login } from "../auth/ImmutableAuth.ts";

export default function LoginComponent() {

  const handleLogin = async () => {
    try {
      const accounts = await login();
      console.log("User logged in:", accounts);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return <button onClick={handleLogin} className=" font-medium bg-[hsl(230,89%,65%)] py-4 px-10 border-2 border-white rounded-lg tracking-widest text-lg uppercase">Login to play</button>;
}
