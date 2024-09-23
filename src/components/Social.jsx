import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Social = () => {
  return (
    
      <div className=" mb-24 flex justify-between items-center max-sm:flex-wrap space-y-4">
        <h2 className="text-4xl font-bold text-green-500 ">Printify</h2>
        <div className="flex justify-between items-center gap-5">
          <a href="" className="bg-green-white text-green-500 text-3xl">
            <FaFacebook />
          </a>
          <a href="" className="bg-green-white text-green-500 text-3xl">
            <FaSquareInstagram />
          </a>
          <a href="" className="bg-green-white text-green-500 text-3xl">
            <FaLinkedin />
          </a>
          <a href="" className="bg-green-white text-green-500 text-3xl">
            <FaTwitter />
          </a>
          <a href="" className="bg-green-white text-green-500 text-3xl">
            <FaYoutube />
          </a>
          <a href="" className="bg-green-white text-green-500 text-3xl">
            <FaDiscord />
          </a>
        </div>
      </div>

  );
}

export default Social