import Particles from "@/app/components/Particles";
// import Button from "./components/buttons"; Issue: Button cant be called for some reason i dont understand for now
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-center pointer-events-none -z-10">
        <Particles />
      </div>
      <div className="flex items-center justify-center h-screen">
        {/* <Wallet className="w-8 h-8" /> I dont know but there is some error in this. the icon has some weird  bloack line over it */}
        <div className="p-10 rounded">
          <h1 className="text-[45px] font-bold">
            <span className="text-white font-overpass">
              Welcome To Budget Tracker
            </span>
            <span className="text-blue-500">.</span>
          </h1>
          <h3 className="text-[15px] font-bold">
            <span className="text-white font-overpass">
            Tracking your expenses is key to managing your money wisely. This expense tracker helps you stay in control effortlessly.
            </span>
            <span className="text-blue-500">.</span>
          </h3>
          <div className="flex justify-center items-center gap-x-4 mt-10">
            <Link
              href="/login"
              className="px-4 py-2 bg-white text-black rounded-md hover:bg-green-300 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-purple-300 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
