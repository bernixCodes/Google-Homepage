import React from "react";
import { Props } from "./dat";
import google from "../images/google.png";
import maps from "../images/map.png";
import yt from "../images/yt.png";
import play from "../images/play.png";
import news from "../images/news.png";
import mail from "../images/mail.png";
import meet from "../images/meet.png";
import chat from "../images/chat.png";
import contacts from "../images/contacts.png";
import drive from "../images/drive.png";
import calender from "../images/calender.png";
const myData: Props[] = [
  {
    imageLink:
      "https://www.todaysparent.com/wp-content/uploads/2017/06/Black-girls-face-discrimination-as-young-as-five-years-old-says-new-study.jpg",
    imageDescription: "Account",
  },
  {
    imageLink: google,
    imageDescription: "Search",
  },
  {
    imageLink: maps,
    imageDescription: "Maps",
  },
  {
    imageLink: yt,
    imageDescription: "YouTube",
  },
  {
    imageLink: play,
    imageDescription: "Play",
  },
  {
    imageLink: news,
    imageDescription: "News",
  },
  {
    imageLink: mail,
    imageDescription: "Email",
  },
  {
    imageLink: meet,
    imageDescription: "Meet",
  },
  {
    imageLink: chat,
    imageDescription: "Chat",
  },
  {
    imageLink: contacts,
    imageDescription: "Contacts",
  },
  {
    imageLink: drive,
    imageDescription: "Drive",
  },
  {
    imageLink: calender,
    imageDescription: "Calender",
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
              className="object-contain h-12 w-15 rounded-full"
            />
            <p className="text-center text-xs mt-1 hover:scale-75">
              {item.imageDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
