import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PaginationTest from './PaginationTest';


export default function Carousel(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = {
    customPaging: function (i: number): JSX.Element {
      return (
            // <div className={`${i === currentSlide ? 'w-10 h-4 bg-gray-400 mr-10' : 'w-4 h-4 bg-white mr-0'} left-0 rounded-full  hover:bg-white focus:outline-none focus:bg-gray-600`} style ={{marginTop: '-50px'}}></div>

            <>
          
          
            </>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next); // Update the current slide when it changes
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-4">
      <Slider {...settings}>
        <div>
          <img
            src="https://as2.ftcdn.net/v2/jpg/05/32/23/63/1000_F_532236382_GYXU7WpBSnmeqE4CtoZrLDOJQo9arDVq.jpg"
            alt="Image 1"
            className="rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://as2.ftcdn.net/v2/jpg/05/32/23/63/1000_F_532236382_GYXU7WpBSnmeqE4CtoZrLDOJQo9arDVq.jpg"
            alt="Image 2"
            className="rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://as2.ftcdn.net/v2/jpg/05/32/23/63/1000_F_532236382_GYXU7WpBSnmeqE4CtoZrLDOJQo9arDVq.jpg"
            alt="Image 3"
            className="rounded-lg"
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>

      <PaginationTest currentSlide = {currentSlide} />
    </div>
  );
}
