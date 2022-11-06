import React from 'react'
import './testimonial.css'
import AVT1 from '../../assets/sera.png'
import AVT2 from '../../assets/Kobo.Kanaeru.jpg'
import AVT3 from '../../assets/Fischl.jpg'
import AVT4 from '../../assets/Razor.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";



const data = [
  {
    avatar:AVT1,
    name: 'Seraviaa',
    review: 'Dhitama mengerjakan dengan sangat baik dan merealisasikan semua yang aku inginkan, aku sangat merekomekasikannya!'
  },
  {
    avatar:AVT2,
    name: 'Kobokan',
    review: 'Dhitama aku sangat menyukai hasil pekerjaanmu dan tidak lupa juga menyukai dirimu ehe <3'
  },
  {
    avatar:AVT3,
    name: 'Fischl von Luftschloss Narfidort',
    review: 'Hasilmu sangat standar bagiku ta-- tapi buu-- bukan berarti jelek!!! ini cukup untuk memuaskan hati--ku, berbanggalah atas pujianku ini hoho'
  },
  {
    avatar:AVT4,
    name: 'Razor',
    review: 'Bagus'
  },
]


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>

      <Swiper pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]} className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide key={index} className='testimonials'> 
            <div className="client__avatar">
              <img src={avatar} alt="Avatar" />
            </div>
            <h4 className='client__name'>{name}</h4>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonial