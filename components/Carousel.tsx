import React from 'react';
import Slider from 'react-slick';
import { useRef } from 'react';
import { Card, Link } from 'vcc-ui';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CarousalStyles from '../styles/Carousel.module.css';

type CarouselProps = {
  cars: {
    id: string;
    modelName: string;
    bodyType: string;
    modelType: string;
    imageUrl: string;
  }[];
};

type carProps = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

const Carousel: React.FC<CarouselProps> = ({ cars }) => {
  const slider = useRef<Slider>(null);

  const showPrevious = () => {
    if (slider.current !== null) slider.current.slickPrev();
  };

  const showNext = () => {
    if (slider.current !== null) slider.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <main className={CarousalStyles.container}>
      <Slider {...settings} ref={slider}>
        {cars.map((car: carProps) => (
          <div className={CarousalStyles.sliderCard} key={car.id}>
            <div className={CarousalStyles.type}>{car.bodyType}</div>
            <div className={CarousalStyles.title}>
              {car.modelName} <span>{car.modelType}</span>
            </div>
            {/* <Card> */}
            <img src={car.imageUrl} alt='' />
            {/* </Card> */}
            <div className={CarousalStyles.links}>
              {/* <Link href={`learn/${car.id}`} arrow='right'>
                LEARN
              </Link>
              <Link href={`shop/${car.id}`} arrow='right'>
                SHOP
              </Link> */}
            </div>
          </div>
        ))}
      </Slider>
      {/* <div className={CarousalStyles.buttonsLeft}>
        <img
          width={40}
          src={bigChevron}
          alt=''
          style={{ transform: 'rotate(180deg)' }}
          onClick={showPrevious}
        />
      </div>
      <div className={CarousalStyles.buttonsRight}>
        <img width={40} src={bigChevron} alt='' onClick={showNext} />
      </div> */}
    </main>
  );
};

export default Carousel;
