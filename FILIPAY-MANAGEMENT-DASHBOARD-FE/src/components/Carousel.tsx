import {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel () : JSX.Element {

    const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = {
    customPaging: function (i: number) : JSX.Element {
      return (
    
        <div className={`${  
        i === currentSlide && currentSlide !== 2 ? 'w-12 h-4' : 'w-4 h-4'
        } m-10 rounded-full bg-white hover:bg-white focus:outline-none focus:bg-gray-600`}
        style={{marginTop: '-50px'}}></div>
        
      ) 
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
          slidesToShow: 2,
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
          <img src="https://cdn.oneesports.gg/cdn-data/2023/08/LeagueofLegends_Briar_Leaks_SplashArt2-1024x576.jpg" alt="Image 1" className= "rounded-lg" />
        </div>
        <div>
          <img src="https://cdn.oneesports.gg/cdn-data/2023/08/LeagueofLegends_Briar_Leaks_SplashArt2-1024x576.jpg" alt="Image 2" className= "rounded-lg"/>
        </div>
        <div>
          <img src="https://cdn.oneesports.gg/cdn-data/2023/08/LeagueofLegends_Briar_Leaks_SplashArt2-1024x576.jpg" alt="Image 3" className= "rounded-lg"/>
        </div>
        {/* Add more slides as needed */}
      </Slider>

      {/* PAGINATION */}

      

    </div>
  );


  
}

