import Head from "next/head";
import React from "react";
import WhatsApp from "#compo/SVG/WhatsApp";
import { auth, provider } from "#utils/firebaseConfig";
const login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center">
        <Head>
          <title>Login</title>
        </Head>
        <div className="my-4 border-4 border-[whitesmoke] pb-20 w-1/4 flex flex-col justify-center shadow-xl items-center rounded-xl">
          <div>
            <WhatsApp w={150} h={150} />
          </div>
          <button
            onClick={signIn}
            className="mt-8 py-4 px-12 text-lg rounded-full bg-gray-200 text-gray-900 outline-none focus:outline-none
           hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default login;
