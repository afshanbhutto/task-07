import React, { useEffect, useState } from 'react';
import Card from './Card';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const images = [
    { img : "/pic-1.jpg"},
    { img : "/pic-2.png"},
    { img : "/pic3.png"},
    { img : "/pic-4.png"},
    { img : "/pic-6.png"},
    { img : "/pic-7.png"},
    { img : "/pic-8.jpg"},
]

const MySlider = () => {

    // for responsiveness
    const [slidesToShow, setSlidesToShow] =useState(4);

    const setSlides = () =>{
        if(window.innerWidth <= 1200 && window.innerWidth > 1000){
            setSlidesToShow(3)
        }else if(window.innerWidth <= 1000 && window.innerWidth > 650){
            setSlidesToShow(2)
        }else if(window.innerWidth <= 650){
            setSlidesToShow(1)
        }
    } 

    useEffect(()=>{
        setSlides();
        window.addEventListener("resize", ()=>{setSlides()})
    },[])
    const settings = {
        arrows:true,
        infinite:false,
        speed:500,
        slidesToShow:4,
        slidesToScroll:1,
        nextArrow: <NextArrow />,
        prevArrow:<PrevArrow/>,
        responsive:[
            {
                breakpoint:1280,
                settings:{
                    slidesToShow:3,
                }

            },
            {
                breakpoint:1000,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:650,
                settings:{
                    slidesToShow:1,
                }
            },
        ],


    }
  return (
      <div className='container mx-auto relative top-[5%] mb-20 uppercase'>
          <div className=''>
            <div className="grid lg:inline-grid grid-cols-3 lg:gap-x-60 justify-items-strech items-center mt-8 mb-8">
                <div className='justify-self-auto'>
                <h1 className='text-xl lg:text-3xl lg:font-normal text-[30px]  tracking-wider '>Featured</h1>
                </div>
                <div className='justify-self-center'>
                <h1 className='text-xs lg:text-3xl lg:font-normal text-[30px]  tracking-wider'>View All homes</h1>
                </div>
            </div>
             
              <div className='relative'>

                  <Slider {...settings}>
                      {images.map((imgData, index) => <Card key={index} img={imgData.img} />)}
                  </Slider>
            </div>
            
        </div>
    </div>
    
  )
}

export default MySlider 