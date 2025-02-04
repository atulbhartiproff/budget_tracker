"use client";

import Particles from "../components/Particles";
import { Input } from "../components/input";
import "./sumbit.css";

const Login: React.FC = () => {
  const handlelogin = () => {
    event?.preventDefault();
    window.location.href = "./tracker";
  };

  return (
    <>
      <div>
        <div className="fixed inset-0 bg-black bg-center pointer-events-none -z-10">
          <Particles />
        </div>
        <div className="flex flex-col  p-10 items-center justify-center h-screen space-y-2">
          <h1 className="text-[40px] font-bold">
            <span className="text-white font-overpass">Register</span>
            <span className="text-blue-500">.</span>
          </h1>
          <div>
            <form className="space-y-2">
              <Input type="name" placeholder="Username" />
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" content="white" />
              <Input
                type="submit"
                value="Login"
                id="submit"
                onClick={handlelogin}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
