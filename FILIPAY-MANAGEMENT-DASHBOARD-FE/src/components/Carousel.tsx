import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PaginationTest from './PaginationTest';

export default function Carousel(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    // Update the screen height when it changes
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    customPaging: function (i: number): JSX.Element {
      return <></>;
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next);
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
    <div className="hidden md:block md:w-3/5 overflow-hidden relative">
      <Slider {...settings}>
        <div>
          <img
            src="http://filipworks.com/fmd/assets/background-image.JPG"
            alt="Image 1"
            className="w-full h-3/5 object-cover object-center rounded-lg"
          />
        </div>
        <div>
          <img
            src="http://filipworks.com/fmd/assets/background-image.JPG"
            alt="Image 2"
            className="w-full h-3/5 object-cover object-center rounded-lg"
          />
        </div>
        <div>
          <img
            src="http://filipworks.com/fmd/assets/background-image.JPG"
            alt="Image 3"
            className="w-full h-3/5 object-cover object-center rounded-lg"
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PaginationTest currentSlide={currentSlide} />
      </div>
    </div>
  );
}
