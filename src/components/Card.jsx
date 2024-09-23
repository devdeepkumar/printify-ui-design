import React from 'react'

const Card = ({image,title,paragraph}) => {
  return (
    <div data-aos='fade-up' className="space-y-10 max-sm:space-y-7 p-10 max-sm:p-2 max-sm:flex justify-center items-center flex-col max-sm:text-center">
      <img
        src={image}
        alt=""
        className="rounded-full object-cover h-52 w-52"
      />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>
       {paragraph}
      </p>
    </div>
  );
}

export default Card