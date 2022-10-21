import React from "react";
import logo from "../images/girl.jpg";
import { AiOutlineCamera } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

function UserInfo() {
  return (
    <>
      <div className="bg-neutral-700 rounded-xl ">
        <div className="p-10 text-center">
          <div className="relative my-2">
            <img
              src={logo}
              alt=""
              className="object-cover h-14 w-14 rounded-full m-auto"
            />
            <span className="absolute bottom-0  bg-neutral-400 hover:bg-neutral-600  p-1 rounded-full ml-2 cursor-pointer">
              <AiOutlineCamera />
            </span>
          </div>
          <div>
            <h4>bernice owusu</h4>
            <p>owusubernice.adjoa@gmail.com</p>
          </div>
          <div className="mt-2 border cursor-pointer hover:bg-neutral-600  rounded-full p-2 w-full">
            <p className="text-sm ">Manage your Google Account</p>
          </div>
        </div>

        <hr></hr>
        <div>
          <div className="flex gap-3 px-6 py-3 cursor-pointer hover:bg-neutral-600 ">
            <div className="p-3 bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
              <p>B</p>
            </div>
            <div>
              <h4 className="font-medium">Adjoa Bernie</h4>
              <p>adjoa.bernie@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3 px-6 py-3 cursor-pointer hover:bg-neutral-600 ">
            <div className="p-3 bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center">
              <p>B</p>
            </div>
            <div>
              <h4 className="font-medium">Bernie Adjoa</h4>
              <p>bernice@microsoft.org</p>
            </div>
          </div>
          <div className="flex gap-3   px-6 py-3 cursor-pointer hover:bg-neutral-600 ">
            <div className="p-3  flex items-center gap-3">
              <BiUserPlus className="text-2xl" />
              <p>Add another account</p>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="py-4 flex items-center justify-center ">
          <button className="p-2 px-5 border hover:bg-neutral-600 font-medium ">
            Sign out of all accounts
          </button>
        </div>
        <hr></hr>
        <div className="py-4 flex items-center justify-center gap-2 cursor-pointer  ">
          <p className="hover:bg-neutral-600 p-1 rounded">Privacy Policy</p>
          <BsDot />
          <p className="hover:bg-neutral-600 p-1 rounded">Terms of service</p>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
