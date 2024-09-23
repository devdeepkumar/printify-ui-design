import React from 'react'
import Button from './Button';

const Banner = () => {
  return (
   
      <div className="h-[100px] w-[80%] max-sm:w-full rounded-xl  justify-around items-center flex max-sm:grid max-sm:grid-cols-2 bg-green-400 my-[10rem] max-sm:my-[5rem]  mx-auto p-2">
        <p>Are you a large business looking for custom solutions?</p>
        <Button bg={"bg-white text-sm"} text={"Talk to sale"}></Button>
      </div>
   
  );
}

export default Banner