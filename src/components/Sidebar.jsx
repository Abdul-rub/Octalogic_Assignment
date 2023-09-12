import React from 'react';
import logo from "../assets/logo.png"
import { BsPeopleFill,BsMusicNoteList } from "react-icons/bs";
import {AiFillHome} from "react-icons/ai"

const Sidebar = ({ onFrameContainerClick, onFrameContainer1Click }) => {
  return (
    <div className="bg-colours-background-panel box-border  h-[1024px] flex flex-col py-2.5 items-center justify-start gap-[48px] border-r-[1px] border-solid border-colours-gray-300">
      <img
        className="relative w-12 h-12 object-cover"
        alt=""
        src={logo}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
        <div
          className="self-stretch rounded-md bg-colours-secondary-100 flex flex-col py-[5px] px-0 items-center justify-start cursor-pointer"
          // onClick={onFrameContainerClick}
        >
          <p><AiFillHome size={20}/></p>
          <div className="relative">Home</div>
        </div>
        <div
          className="self-stretch rounded-md bg-colours-gray-200 flex flex-col py-[5px] px-1 items-center justify-start cursor-pointer text-colours-text-light-secondary"
          // onClick={onFrameContainer1Click}
        >
          <p><BsMusicNoteList size={20}/></p>
          <div className="relative">Courses</div>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-center justify-end text-colours-text-light-secondary">
        <div className="self-stretch rounded-md flex flex-col py-[5px] px-0 items-center justify-start">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/undefined1.png"
          />
          <div className="relative">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
