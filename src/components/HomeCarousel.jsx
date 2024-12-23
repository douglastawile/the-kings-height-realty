import { Card, Carousel } from "flowbite-react";

import carousel1 from "../assets/carousel/carousel-1.jpg";
import carousel2 from "../assets/carousel/carousel-2.jpg";
import carousel3 from "../assets/carousel/carousel-3.jpg";
import carousel4 from "../assets/carousel/carousel-4.jpg";
import carousel5 from "../assets/carousel/carousel-5.jpg";
import carousel6 from "../assets/carousel/carousel-6.jpg";

const HomeCarousel = () => {
  return (
    <Card className="max-w-2xl my-4 mx-2 sm:mx-auto shadow-sm rounded-lg">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={6000}>
          <img src={carousel1} alt="Carousel 1" />
          <img src={carousel2} alt="Carousel 2" />
          <img src={carousel3} alt="Carousel 3" />
          <img src={carousel4} alt="Carousel 4" />
          <img src={carousel5} alt="Carousel 5" />
          <img src={carousel6} alt="Carousel 6" />
        </Carousel>
      </div>
    </Card>
  );
};

export default HomeCarousel;
