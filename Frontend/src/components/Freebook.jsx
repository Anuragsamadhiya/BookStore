import React from 'react'
import list from "../../public/list.json";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
const Freebook = () => {
    const freebook = list.filter((data) => data.category === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px:4 '>
      <div className=' ml-4 space-y-6'>
      <h1 className='font-semibold text-xl'>Free Available books</h1>
      <p>Explore our collection of free books! These titles are available at no cost and cover a variety of genres and topics. Whether you're interested in fiction, non-fiction, or educational material, you're sure to find something that piques your interest. Enjoy reading!
      </p>
      </div>
    <div >
    <Slider {...settings}>
        {freebook.map((item)=>(
            <Cards item={item}/>
        ))}
         
      </Slider>
    </div>
    </div>

    </>
  )
}

export default Freebook
