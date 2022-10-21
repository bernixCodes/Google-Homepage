import { useState } from "react";
import logo from "./images/girl.jpg";
import Logos from "./components/Apps";
import UserInfo from "./components/UserInfo";

function Home() {
  const [menuHovered, setMenuHovered] = useState<boolean>(false);
  const [accountInfo, setAccountInfo] = useState<boolean>(false);
  const [showLogos, setShowLogos] = useState<boolean>(false);
  const [showUserInfo, setShowUserInfo] = useState<boolean>(false);

  const handleShowLogos = () => {
    setMenuHovered(!menuHovered);
    setShowLogos(!showLogos);
  };

  const handleAccountDetails = () => {
    setShowUserInfo(!showUserInfo);
  };
  return (
    <>
      <div className=" flex ">
        <div className="flex-auto "></div>
        <div className="relative">
          <div className=" flex items-center gap-6 p-4 text-lg ">
            <a href="mailto:bernyx.owusu@gmail.com" className="hover:underline">
              <p>Gmail</p>
            </a>

            <a href="#" className="hover:underline">
              <p>Images</p>
            </a>
            <div className="relative">
              <span
                className=" w-11 h-11 hover:bg-neutral-500 rounded-full items-center flex justify-center cursor-pointer "
                onMouseEnter={() => setMenuHovered(true)}
                onMouseLeave={() => setMenuHovered(false)}
                onClick={handleShowLogos}
              >
                <svg
                  className="fill-white object-contain w-6 "
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                </svg>
              </span>
              {menuHovered && (
                <div className=" absolute top-12 -mx-10 mt-2 p-1.5 px-4 bg-neutral-600 rounded-lg z-10">
                  <p className="w-max text-center ">Google apps</p>
                </div>
              )}
            </div>

            <div className="relative cursor-pointer">
              <div
                className=" "
                onMouseEnter={() => setAccountInfo(true)}
                onMouseLeave={() => setAccountInfo(false)}
                onClick={handleAccountDetails}
              >
                <img
                  src={logo}
                  alt=""
                  className="object-cover w-10 h-10 rounded-full hover:border-neutral-500 hover:border-4 "
                />
              </div>
              {accountInfo && (
                <div className="absolute top-12 right-0 bg-neutral-600 z-10 rounded-lg p-4  ">
                  <h5 className=" font-semibold text-lg tracking-wide">
                    Google Account
                  </h5>
                  <p className=" font-thin text-sm tracking-wider">
                    bernice owusu
                  </p>
                  <p className="font-thin text-sm tracking-wider">
                    owusubernice.adjoa@gmail.com
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="absolute ">{showLogos && <Logos />}</div>
          <div className="absolute right-4 ">
            {showUserInfo && <UserInfo />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
