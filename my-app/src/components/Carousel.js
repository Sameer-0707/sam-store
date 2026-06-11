"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop", alt: "Men's Premium Fashion" },
  { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop", alt: "Women's Fashion" },
  { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop", alt: "Air Jordan Sneakers" },
  { src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1400&auto=format&fit=crop", alt: "Men's Jackets" },
  { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop", alt: "Women's Dresses" },
  { src: "https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=1400&auto=format&fit=crop", alt: "Nike Air Max" },
];

export default function Carousel() {
  return (
    <section className="hero-carousel">
      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.src} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
