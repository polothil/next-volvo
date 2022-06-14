import React from 'react';
import Slider from 'react-slick';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from 'vcc-ui';

import CarousalStyles from '../styles/Carousel.module.css';
import Link from 'next/link';

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
    <section className={CarousalStyles.container}>
      <Slider {...settings} ref={slider}>
        {cars.map((car: carProps) => (
          <div key={car.id}>
            <div className={CarousalStyles.type}>{car.bodyType}</div>
            <div className={CarousalStyles.title}>
              {car.modelName} <span>{car.modelType}</span>
            </div>
            <div className={CarousalStyles.card}>
              <Card>
                <img src={car.imageUrl} alt='' />
              </Card>
            </div>

            <div className={CarousalStyles.links}>
              <Link href={`learn/${car.id}`}>
                <div className={CarousalStyles.linkItem}>
                  LEARN <img width={15} src='./icons/chevron-small.svg' alt='' />
                </div>
              </Link>

              <Link href={`shop/${car.id}`}>
                <div className={CarousalStyles.linkItem}>
                  SHOP <img width={15} src='./icons/chevron-small.svg' alt='' />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      <div className={CarousalStyles.buttonLeft}>
        <img
          width={40}
          src='./icons/chevron-circled.svg'
          alt=''
          style={{ transform: 'rotate(180deg)' }}
          onClick={showPrevious}
        />
      </div>
      <div className={CarousalStyles.buttonRight}>
        <img width={40} src='./icons/chevron-circled.svg' alt='' onClick={showNext} />
      </div>
    </section>
  );
};

export default Carousel;
