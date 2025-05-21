
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image000 from '/src/assets/image000.jpg';
import Image0 from '/src/assets/image0.jpg';
import Image00 from '/src/assets/image00.jpg';
import Image1 from '/src/assets/image1.jpg';
import Image2 from '/src/assets/image2.jpg';
import Image3 from '/src/assets/image3.jpg';
import Image4 from '/src/assets/image4.jpg';
import Image5 from '/src/assets/image5.jpg';
import Image6 from '/src/assets/image6.jpg';
import Image7 from '/src/assets/image7.jpg';
import Image8 from '/src/assets/image8.jpg';
import Image9 from '/src/assets/image9.jpg';
import Image10 from '/src/assets/image10.jpg';
import Image11 from '/src/assets/image11.jpg';


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
        className="mySwiper rounded-xl"
      >
        <SwiperSlide><img className='h-full' src={Image000} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image0} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image00} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image7} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image8} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image9} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image10} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-full' src={Image11} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
