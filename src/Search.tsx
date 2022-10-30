import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

interface Props {
  name: string;
  url: string;
}
function Search() {
  const [addShortCut, setAddShortcut] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [url, setURL] = useState<string>("");
  const [shortCuts, setShortcut] = useState<Props[]>([]);
  console.log(shortCuts);

  const handleShortCut = () => {
    setAddShortcut(!addShortCut);
  };

  const cancelModal = () => {
    setAddShortcut(false);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { name, url };
    setShortcut([...shortCuts, payload]);

    setAddShortcut(false);
  };

  return (
    <div className="flex flex-col items-center justify-center md:py-20 md:px-32  py-10">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="800"
          width="1200"
          viewBox="-40.446 -22.19 350.532 133.14"
          className="object-contain w-40 md:w-60 h-40"
        >
          <path
            d="M115.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
            fill="#ffffff"
          />
          <path
            d="M163.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
            fill="#ffffff"
          />
          <path
            d="M209.39 25.87v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
            fill="#ffffff"
          />
          <path d="M224.64 2.53v65h-9.5v-65z" fill="#ffffff" />
          <path
            d="M261.66 54.01l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
            fill="#ffffff"
          />
          <path
            d="M34.93 40.94v-9.41h31.71c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C15.96 68.88 0 53.42 0 34.44 0 15.46 15.96 0 34.94 0c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="flex items-center gap-3 bg-white p-3 rounded-full md:w-2/4  w-3/4 px-6">
        <AiOutlineSearch className="text-neutral-500 text-3xl " />
        <input
          placeholder="Search Google or type a URL"
          className="flex-auto outline-none text-neutral-500 w-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#4285F4"
            d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"
          />
          <path fill="#34A853" d="M11 18.92h2V22h-2z" />
          <path
            fill="#F4B400"
            d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z"
          />
          <path
            fill="#EA4335"
            d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41A6.99 6.99 0 0 0 12.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z"
          />
        </svg>
      </div>

      {addShortCut && (
        <form className="bg-neutral-700 p-5 md:w-2/6  w-full  absolute md:top-64 top-56 shadow-2xl">
          <div>
            <h2 className="text-xl font-medium">Add shortcut</h2>
            <div className="mt-5 flex flex-col gap-2">
              <p>Name</p>
              <input
                type={"text"}
                onChange={(e) => setName(e.target.value)}
                className="bg-neutral-800 p-2 rounded outline-none border-b-blue-700 focus:border-b-2"
              />
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <p>URL</p>
              <input
                type={"text"}
                onChange={(e) => setURL(e.target.value)}
                className="bg-neutral-800 p-2 rounded outline-none border-b-blue-700 focus:border-b-2"
              />
            </div>
            <div className="mt-10 flex items-center justify-end gap-4">
              <button
                onClick={cancelModal}
                className="bg-neutral-800 b text-blue-400  py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-neutral-600 py-2 px-4 rounded"
              >
                Done
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="flex items-center mt-8">
        <div className="flex items-center gap-5 flex-wrap ">
          {shortCuts.map((item, id) => (
            <div
              key={id}
              className="hover:bg-neutral-500 cursor-pointer p-4 rounded items-center"
            >
              <span className="flex flex-col gap-6">
                <img
                  src={`${item.url}/favicon.ico`}
                  alt=""
                  className="object-contain h-14"
                />
                <p>{item.name}</p>
              </span>
            </div>
          ))}
        </div>
        <div
          onClick={handleShortCut}
          className=" flex flex-col items-center gap-5 hover:bg-neutral-500 cursor-pointer p-4 rounded"
        >
          <span className="p-3 bg-neutral-600 rounded-full w-16 h-16 flex items-center justify-center ">
            <AiOutlinePlus className="text-xl " />
          </span>
          <div>
            <p>Add shortcut</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
