import React from "react";
interface Props {
  imageLink: string;
  imageDescription: string;
}
const myData: Props[] = [
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
    <div className=" absolute  top-12  ">
      <div className="flex items-center gap-x-10  gap-y-5 flex-wrap justify-center -ml-56 bg-neutral-700 rounded-lg p-6 scroll-m-0 ">
        {myData.map((item) => (
          <div className="w-10">
            <img
              src={item.imageLink}
              alt=""
              className="object-contain h-10 rounded-full"
            />
            <p className="text-center text-xs">{item.imageDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
