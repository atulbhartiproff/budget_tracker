import { Input } from "../components/input";

const Login: React.FC = () => {
  return (
    <>
      <div className="flex flex-col p-10 items-center justify-center h-screen">
        <h1 className="text-[20px] font-bold">
          <span className="text-black-500 font-overpass">Login</span>
          <span className="text-blue-500">.</span>
        </h1>
        <div className="space-y-2">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>
      </div>
    </>
  );
};

export default Login;
