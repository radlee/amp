import React , { useState } from 'react';

import {
        Carousel,
        CarouselItem,
        CarouselControl,
        CarouselIndicators,
        CarouselCaption

} from 'reactstrap';

import one from '../../media/slider/1.jpg';
import two from '../../media/slider/2.jpg';
import three from '../../media/slider/3.jpg';
import six from '../../media/slider/6.JPG';
import five from '../../media/slider/5.JPG';
import nine from '../../media/slider/9.jpg';
import seven from '../../media/slider/7.jpg';
import eight from '../../media/slider/8.jpg';
import eleven from '../../media/slider/11.jpg';
import twelve from '../../media/slider/12.jpg';
import ten from '../../media/slider/10.JPG';

const items = [
    {
      src: two,
    },
    {
      src: one,
    },
    {
      src: three,
    },
    {
      src: five,
    },
    {
      src: twelve,
    },
    {
      src: six,
    },
    {
      src: seven,
    },
    {
      src: eight,
    },
    {
      src: nine,
    },
    {
      src: ten,
    },
    {
      src: eleven,
    }
    
  ];

const Notice = (props) => { 
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }

      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }

      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }

      const slides = items.map((item) => {
        return (
          
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img className="slider" src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      return (
        <div data-aos="fade-in" data-aos-duration="4000">

          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>

        </div>
      );
   
    
}


export default Notice;