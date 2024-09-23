import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserCard from "./UserCard";

const Sliders = () => {
  const userData = [
    {
      name: "Robert a Velore",
      title: "Store link",
      star: "*****",
      img: "https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-War-Machine-icon.png",
    },
    {
      name: "Robert a Devdeeep",
      title: "Estma merchent",
      star: "*****",
      img: "https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-Captain-America-icon.png",
    },
    {
      name: "Roshni",
      title: "Store link",
      star: "*****",
      img: "https://icons.iconarchive.com/icons/iconarchive/incognito-animals/128/Gorilla-Avatar-icon.png",
    },
    {
      name: "Devdeeep",
      title: "My link",
      star: "*****",
      img: "https://icons.iconarchive.com/icons/iconarchive/incognito-animals/128/Monkey-Avatar-icon.png",
    },
    {
      name: "Harish ",
      title: "No one",
      star: "*****",
      img: "https://icons.iconarchive.com/icons/toma4025/rumax/128/camera-icon.png",
    },
  ];

  
   var settings = {
     dots: true,
     infinite: false,
     speed: 500,
     slidesToShow: 2,
     slidesToScroll: 2,
     initialSlide: 0,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           infinite: true,
           dots: true,
         },
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           initialSlide: 1,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };

  
   return (
     <section className="bg-gray-100">
       <div className="grid grid-cols-2 gap-5 w-[70%]   max-sm:grid-cols-1 max-sm:w-full">
         <h1 className="text-4xl font-bold leading-[3.5rem] text-gray-800 pr-[3rem] max-sm:p-0 max-sm:text-2xl">
           Trusted by over 8M sellers around the world
         </h1>

         <p
           className=" flex justify-center items-center "
           data-aos="fade-right"
           data-aos-duration="1000"
         >
           Whether you are just getting started or run an enterprise-level
           e-commerce business, we do everything we can to ensure a positive
           merchant experience.
         </p>
       </div>

       <Slider {...settings} className="mb-10 max-sm:m-6">
         {userData.map((data, i) => {
           return (
             <UserCard
               key={i}
               name={data.name}
               title={data.title}
               image={data.img}
             />
           );
         })}
       </Slider>
     </section>
   );
};

export default Sliders;
