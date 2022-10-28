import React from "react";
import { BsCupStraw } from "react-icons/bs";

function SigninScreen() {
  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-purple-600 via-purple-600 to-purple-400 flex flex-col justify-center items-center ">
      <div className="h-[80%] w-[80%] bg-slate-100 rounded-lg flex flex-col justify-center items-center max-w-2xl">
        <div>
          <BsCupStraw className="text-7xl" />
        </div>
        <h1 className="p-4 text-3xl font-bold">Signup</h1>
        <div className="flex justify-start p-4 w-[80%]">
          <form>
            <label>Name</label>
            <input className="" type="text"></input>
            <label>Email</label>
            <input className="" type="email"></input>
            <label>Password</label>
            <input className="" type="password"></input>
            <label>Confirm Password</label>
            <input className="" type="password"></input>
            <div className="flex flex-col justify-center items-center">
              <button className=" min-w-[167px] bg-slate-800 text-white text-sm p-4 m-2 mx-auto rounded-xl shadow-lg">
                Sign Up
              </button>
              <div className="mx-auto w-min mb-2">OR</div>
              <button className="bg-slate-800 text-white text-sm p-4 m-2 rounded-xl shadow-lg">
                Sign In With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigninScreen;
