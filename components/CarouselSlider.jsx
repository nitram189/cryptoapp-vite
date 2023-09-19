import Slider from "react-slick";
import NewsList from "./NewsList";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarouselSlider({ news }) {

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 2, 
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        },
      ]
    };
  
    return (
      <div>
        <Slider {...sliderSettings}>
          {news?.map((card, index) => (
            <NewsList
              key={index}
              card={ card }
            />
          ))}
        </Slider>
      </div>
    );
  };
  
  