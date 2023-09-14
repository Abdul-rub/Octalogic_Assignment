import React from "react";
import user from "../assets/user.png";

const InfoCard = ({ name, description }) => {
  return (
    <div className='rounded-md bg-white h-full w-[250px] flex justify-center items-center'>
      <div className='h-[70px] w-[200px] flex flex-col justify-between'>
        <div className='h-[46px] flex gap-3'>
          <div className='flex items-center h-[32px] w-[32px] rounded-full'>
            <img className='h-full w-full' src={user} alt='' />
          </div>
          <div className='h-[46px]  flex flex-col'>
            <h1 className='font-bold text-lg'>{name}</h1>
            <p className='text-sm text-light from-stone-400'>
              {description}
            </p>
          </div>
        </div>
        <div className='flex text-[12px] justify-end text-secondary'>
          view
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
