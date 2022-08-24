import $ from 'jquery';
import 'slick-carousel';

const slider = () => {
  $('.slider__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '15px',
  });
};

export default slider;