import React from "react";
import { Props } from "./dat";
const myData: Props[] = [
  {
    imageLink:
      "https://www.todaysparent.com/wp-content/uploads/2017/06/Black-girls-face-discrimination-as-young-as-five-years-old-says-new-study.jpg",
    imageDescription: "Account",
  },
  {
    imageLink:
      "https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png",
    imageDescription: "Search",
  },
  {
    imageLink:
      "https://www.todaysparent.com/wp-content/uploads/2017/06/Black-girls-face-discrimination-as-young-as-five-years-old-says-new-study.jpg",
    imageDescription: "Account",
  },
  {
    imageLink:
      "https://www.todaysparent.com/wp-content/uploads/2017/06/Black-girls-face-discrimination-as-young-as-five-years-old-says-new-study.jpg",
    imageDescription: "Account",
  },
  {
    imageLink:
      "https://www.todaysparent.com/wp-content/uploads/2017/06/Black-girls-face-discrimination-as-young-as-five-years-old-says-new-study.jpg",
    imageDescription: "Account",
  },
  {
    imageLink:
      "https://www.todaysparent.com/wp-content/uploads/2017/06/Black-girls-face-discrimination-as-young-as-five-years-old-says-new-study.jpg",
    imageDescription: "Account",
  },
  {
    imageLink:
      "https://www.todaysparent.com/wp-content/uploads/2017/06/Black-girls-face-discrimination-as-young-as-five-years-old-says-new-study.jpg",
    imageDescription: "Account",
  },
  {
    imageLink:
      "https://www.todaysparent.com/wp-content/uploads/2017/06/Black-girls-face-discrimination-as-young-as-five-years-old-says-new-study.jpg",
    imageDescription: "Account",
  },
  {
    imageLink:
      "https://www.todaysparent.com/wp-content/uploads/2017/06/Black-girls-face-discrimination-as-young-as-five-years-old-says-new-study.jpg",
    imageDescription: "Account",
  },
];

const Logos = () => {
  return (
    <div className=" top-12  ">
      <div className="flex items-center gap-10  flex-wrap justify-center mr-4 bg-neutral-700 rounded-lg p-6 cursor-pointer">
        {myData.map((item) => (
          <div className="w-12 ">
            <img
              src={item.imageLink}
              alt=""
              className="object-contain h-10 w-10 rounded-full"
            />
            <p className="text-center text-xs">{item.imageDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
