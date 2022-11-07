import { useSession, signIn, signOut } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import { BsCupStraw } from "react-icons/bs";

function SigninScreen() {
  const [color, setColor] = useState("purple");
  const { data: session } = useSession();
  console.log(session);

  const ref = useRef(null);
  // focuses on first form element
  useEffect(() => {
    ref?.current?.focus?.();
  }, [ref]);

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  const mySignIn = (e) => {
    signIn("google", { callbackUrl: "/" });
  };
  return (
    <div
      className={`h-screen w-screen bg-${color}-600 flex flex-col justify-center items-center `}
    >
      <div className="h-[90%] w-[80%] bg-slate-100 rounded-lg flex flex-col justify-center items-center max-w-2xl">
        <div>
          <BsCupStraw className="text-7xl" />
        </div>
        <h1 className="p-4 text-3xl font-bold">Signup</h1>
        <div className="flex justify-start items-center p-4 w-[80%]">
          <form className="flex flex-col" onSubmit={(e) => mySignIn(e)}>
            <label>Name</label>
            <input
              ref={ref}
              className={`field`}
              type="text"
              autoComplete="name"
              onFocus={(e) => e.currentTarget.select()}
            ></input>
            <label>Email</label>
            <input className={`field`} type="email"></input>
            <label>Password</label>
            <input className={`field`} type="password"></input>
            <label>Confirm Password</label>
            <input className={`field`} type="password"></input>
            <div className="m-2 flex flex-col justify-center items-center">
              <button className="btn min-w-[167px] mx-auto mt-8">
                Sign Up
              </button>
              <div className="mx-auto w-min mb-2">Or</div>
              <a
                target="_blank"
                className="btn cursor-pointer"
                onClick={(e) => mySignIn(e)}
              >
                Sign Up With Google
              </a>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="chkbox border-purple-600" />
                <p className="text-xs">
                  Terms and conditions,{" "}
                  <span className="text-purple-600 underline">
                    <a href="#">click here</a>
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigninScreen;
