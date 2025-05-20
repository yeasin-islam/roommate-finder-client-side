
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from '/src/assets/image1.jpeg';
import Image2 from '/src/assets/image2.jpeg';
import Image3 from '/src/assets/image3.jpeg';
import Image4 from '/src/assets/image4.jpeg';
import Image5 from '/src/assets/image5.jpeg';
import Image6 from '/src/assets/image6.jpeg';
import Image7 from '/src/assets/image7.jpeg';
import Image8 from '/src/assets/image8.jpeg';
import Image9 from '/src/assets/image9.jpeg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-full' src={Image1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image7} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image8} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image9} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
