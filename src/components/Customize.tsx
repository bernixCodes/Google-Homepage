import React from "react";
import { MdEdit } from "react-icons/md";

function Customize() {
  return (
    <>
      <div className="flex gap-3 p-3 md:px-5 items-center bg-slate-900 hover:bg-opacity-20 text-blue-400 rounded-full w-fit font-light">
        <MdEdit />
        <p className="hidden md:block">Customize Chrome</p>
      </div>
    </>
  );
}

export default Customize;
