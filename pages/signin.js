import React from "react";

function SigninScreen() {
  return (
    <div className="h-screen w-screen bg-purple-600 flex flex-col justify-center items-center">
      <div className="h-[50%] w-[80%] bg-slate-100 rounded-lg flex flex-col justify-center items-center">
        <h1 className="p-4 text-3xl font-bold">Signup</h1>
        <div className="flex justify-start p-4 w-[80%]">
          <form>
            <label>Name</label>
            <input
              className="rounded-xl w-full bg-gray-400"
              type="text"
            ></input>
            <label>Email</label>
            <input
              className="rounded-xl w-full bg-gray-400"
              type="text"
            ></input>
            <label>Password</label>
            <input
              className="rounded-xl w-full bg-gray-400"
              type="text"
            ></input>
            <label>Confirm Password</label>
            <input
              className="rounded-xl w-full bg-gray-400"
              type="text"
            ></input>
          </form>
        </div>
        <div className="mx-auto w-min">or</div>
        <button className="bg-slate-600 text-white p-4 mx-auto rounded-axl">
          sign in with google
        </button>
      </div>
    </div>
  );
}

export default SigninScreen;
