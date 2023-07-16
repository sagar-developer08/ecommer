import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  center: true,
  navText: [
    "<i class='flaticon-left'></i>",
    "<i class='flaticon-right-arrow'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

const Testimonials = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setDisplay(true);
  }, []);

  useEffect(() => {
    setIsMounted(!false);
  }, []);

  return (
    <section className='testimonials-area ptb-100'>
      <div className='container'>
        <div className='section-title'>
          <span className='sub-title'>Testimonials</span>
          <h2>What Customer Says About Us</h2>
        </div>

        {display ? (
          <OwlCarousel
            className='testimonials-slides owl-carousel owl-theme'
            {...options}
          >
            <div className='single-testimonials-item'>
              <p>
              I recently bought Pet Aahar's Salmon and Rice home cooked food for my Pet Jack. 
              Pet Aahar's Salmon and Rice has truly become a staple in our household. 
              I would highly recommend this product to any pet owner who wants to feed their pet with safe, nutritious, and delicious home cooked food.
              </p>

              <div className='info'>
                <img
                  src='https://res.cloudinary.com/dnexbv8oe/image/upload/v1689461110/341536400_1421012848716248_1889939963804380037_n_m6q3mb.jpg'
                  className='shadow rounded-circle'
                  alt='image'
                />
                <h3>Dhruv Soni</h3>
              </div>
            </div>

            <div className='single-testimonials-item'>
              <p>
              I am thoroughly satisfied with Pet Aahar's chicken and rice, and would highly recommend it to any dog owner.
               Not only is it nutritious and beneficial for my dog's health, but it is also delicious and appealing to his taste buds.
               I truly believe that this product is the best choice for your furry friend.
              </p>

              <div className='info'>
                <img
                  src='https://res.cloudinary.com/dnexbv8oe/image/upload/v1689461728/WhatsApp_Image_2023-07-16_at_4.25.06_AM_c3knh9.jpg'
                  className='shadow rounded-circle'
                  alt='image'
                />
                <h3>Krish singhania</h3>
              </div>
            </div>

            <div className='single-testimonials-item'>
              <p>
              "I recently tried Pet Aahar's Chicken and Lamb food for my dog, 
              and he absolutely loves it! He is so much more energetic now that he's eating 
              this great quality food. Plus, I can trust it to be free of harmful chemicals or other additives. Highly recommend!"
              </p>

              <div className='info'>
                <img
                  src='../images/user2.jpg'
                  className='shadow rounded-circle'
                  alt='image'
                />
                <h3>Jessica agarwal</h3>
              </div>
            </div>

            <div className='single-testimonials-item'>
              <p>
              "I'm so glad I found Chicken & Lamb! 
              My dog loves the salmon and rice they provide. 
              The ingredients are of high quality, which makes me feel good about giving my pup a healthy meal."
              </p>

              <div className='info'>
                <img
                  src='../images/user4.jpg'
                  className='shadow rounded-circle'
                  alt='image'
                />
                <h3>Ishaan Kholsa</h3>
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default Testimonials;
