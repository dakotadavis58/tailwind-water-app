import React, { useState } from "react";
import { BsCupStraw } from "react-icons/bs";

function SigninScreen() {
  const [color, setColor] = useState("purple");
  return (
    <div
      className={`h-screen w-screen bg-${color}-600 flex flex-col justify-center items-center `}
    >
      <div className="h-[90%] w-[80%] bg-slate-100 rounded-lg flex flex-col justify-center items-center max-w-2xl">
        <div>
          <BsCupStraw className="text-7xl" />
        </div>
        <h1 className="p-4 text-3xl font-bold">Signup</h1>
        <div className="flex justify-start p-4 w-[80%]">
          <form>
            <label>Name</label>
            <input
              className={`border-2 border-${color}-600 focus:border-${color}-600 focus:border-2 rounded-xl`}
              type="text"
            ></input>
            <label>Email</label>
            <input
              className={`border-2 border-${color}-600 active:border-${color}-900 rounded-xl`}
              type="email"
            ></input>
            <label>Password</label>
            <input
              className={`border-2 border-${color}-600 active:border-${color}-900 rounded-xl`}
              type="password"
            ></input>
            <label>Confirm Password</label>
            <input
              className={`border-2 border-${color}-600 active:border-${color}-900 rounded-xl`}
              type="password"
            ></input>
            <div className="flex flex-col justify-center items-center">
              <button className=" min-w-[167px] bg-slate-800 text-white text-sm p-4 m-2 mx-auto rounded-xl shadow-lg mt-8">
                Sign Up
              </button>
              <div className="mx-auto w-min mb-2">Or</div>
              <button className="bg-slate-800 text-white text-sm p-4 m-2 rounded-xl shadow-lg">
                Sign Up With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigninScreen;
