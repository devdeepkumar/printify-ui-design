import { useState } from "react";
import Button from "./Button";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = ()=>{
    setToggle(!toggle)
  }
  return (
    <nav className="flex justify-between items-center py-4 px-20 max-sm:p-2  bg-white border-b shadow-md fixed top-0 right-0 w-full z-[100]">
      <div className="flex gap-2 justify-center">
        <button
          className="lg:hidden font-bold text-3xl text-green-500"
          onClick={handleToggle}
        >
          <FiAlignJustify onClick={handleToggle} />
        </button>
        <img
          src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?t=st=1726935844~exp=1726936444~hmac=94b7aa5d94c6d7bfd7354e12942bbb206587071706a43b400ce204efae8b3767"
          alt=""
          className="text-green-500 w-10"
        />
        <div className="hidden md:block text-4xl font-bold text-green-500">
          Printify
        </div>
      </div>
      <ul className="hidden lg:flex space-x-8 font-semibold ">
        <li className="text-gray-600 hover:text-green-500 ">Catalog</li>
        <li className="text-gray-600 hover:text-green-500 ">How it works</li>
        <li className="text-gray-600 hover:text-green-500 ">Pricing</li>
        <li className="text-gray-600 hover:text-green-500 ">Blog</li>
        <li className="text-gray-600 hover:text-green-500 ">Services</li>
        <li className="text-gray-600 hover:text-green-500 ">Use-cases</li>
        <li className="text-gray-600 hover:text-green-500 ">Need help?</li>
      </ul>

      {/* Mobile Responsive  */}

      <ul
        className={`lg:hidden sm:w-[50%] fixed translate-x-[-300px] font-semibold  w-[70%] left-0 top-0  h-full flex-col bg-white duration-1000 ${
          toggle ? "translate-x-[-500px]  " : "translate-x-[0] "
        }`}
      >
        <div className="flex items-center justify-between min-w-full  border-b-2 p-5 ">
          <li className="text-black ml-20 ">Menu</li>
          <li>
            <FiX onClick={handleToggle} />
          </li>
        </div>

        <div className="pl-5 space-y-10 my-5">
          <li className="text-gray-600 hover:text-green-500 ">Catalog</li>
          <li className="text-gray-600 hover:text-green-500 ">How it works</li>
          <li className="text-gray-600 hover:text-green-500 ">Pricing</li>
          <li className="text-gray-600 hover:text-green-500 ">Blog</li>
          <li className="text-gray-600 hover:text-green-500 ">Services</li>
          <li className="text-gray-600 hover:text-green-500 ">Use-cases</li>
          <li className="text-gray-600 hover:text-green-500 ">Need help?</li>
        </div>
      </ul>
      <div className="flex gap-5">
        <Button bg={"hover:text-green-500"} text={"Sign in"} />
        <Button bg={"bg-green-500 text-white"} text={"Sign up"} />
      </div>
    </nav>
  );
};
export default Navbar;
