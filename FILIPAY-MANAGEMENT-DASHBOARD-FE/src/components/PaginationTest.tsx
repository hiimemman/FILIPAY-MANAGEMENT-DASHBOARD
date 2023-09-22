import React, { useState, useEffect } from 'react';
import '../styles/MorphingPagination.css'; // Import your CSS file

export default function PaginationTest(props : any){
    const [activeButton, setActiveButton] = useState(0);

    const buttons = [0, 1, 2]; // You can adjust the number of buttons as needed
  
    const switchToNext = (index : any) => {
      if (index !== activeButton) {
        setActiveButton(index);
      }
    };

    useEffect(() =>{
        setActiveButton(props.currentSlide)
        return () =>{}
    },[props.currentSlide])
  
    return (
      <div className="container">
        {buttons.map((index) => (
          <div
            key={index}
            className={`button ${activeButton === index ? 'active' : ''}`}
            onClick={() => switchToNext(index)}
          ></div>
        ))}
      </div>
    )  
}