import React from 'react'

const UserCard = ({image, name,title}) => {
  return (
    <div
      className=" p-10 m-9 max-sm:m-0 max-sm:p-2 bg-white  border rounded-2xl"
      data-aos="fade-up"
      
      
    >
      <div className="">
        <img
          src={image}
          alt=""
          className="rounded-full object-cover w-20 h-20"
        />
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <a href="#" className="text-green-500">
            {title}
          </a>
          <p className="text-yellow-500 text-6xl font-bold">*****</p>
        </div>
      </div>
      <p className="">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        labore aliquid, voluptatibus delectus in ad voluptas nisi, illum facere
        cupiditate omnis totam? Aut facere ullam error. Cupiditate iure itaque
        odio.
      </p>
    </div>
  );
}

export default UserCard