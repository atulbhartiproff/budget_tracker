import Particles from "@/app/components/Particles";
import { Wallet } from "./components/icons";
// import Button from "./components/buttons"; Issue: Button cant be called for some reason i dont understand for now
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="fixed inset-0 bg-cover bg-center pointer-events-none -z-10">
        <Particles />
      </div>
      <div className="flex items-center justify-center h-screen">
        {/* <Wallet className="w-8 h-8" /> I dont know but there is some error in this. the icon has some weird  bloack line over it */}
        <div className="p-10 rounded">
          <h1 className="text-[40px] font-bold">
            <span className="text-black-500 font-overpass">
              Welcome To Budget Tracker
            </span>
            <span className="text-blue-500">.</span>
          </h1>
          <h3 className="text-[15px] font-bold">
            <span className="text-black-500 font-overpass">
              Making sure all the budgets are always on track
            </span>
            <span className="text-blue-500">.</span>
          </h3>
          <div className="flex justify-center items-center gap-x-4 mt-20">
            <Link
              href="/login"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-blue-500 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-blue-500 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
