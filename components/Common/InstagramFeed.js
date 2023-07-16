import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='flaticon-left'></i>",
    "<i class='flaticon-right-arrow'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1200: {
      items: 6,
    },
  },
};

const InstagramFeed = () => {
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
    <div className='instagram-area'>
      <div className='container-fluid'>
        <div className='instagram-title'>
          <a href='https://instagram.com/petsaahar?igshid=YmM0MjE2YWMzOA==' target='_blank'>
            <i className='bx bxl-instagram'></i> Follow us on @petsaahar
          </a>
        </div>

        {display ? (
          <OwlCarousel
            className='instagram-slides owl-carousel owl-theme'
            {...options}
          >
            <div className='single-instagram-post'>
              <img src='https://res.cloudinary.com/dnexbv8oe/image/upload/v1689455422/TGPL0353_pycozr.jpg' alt='image' />

              {/* <i className='bx bxl-instagram'></i> */}

              {/* <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link> */}
            </div>

            <div className='single-instagram-post'>
              <img src='https://res.cloudinary.com/dnexbv8oe/image/upload/v1689455714/TGPL0362_lfw1ms.jpg' alt='image' />

              {/* <i className='bx bxl-instagram'></i> */}

              {/* <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link> */}
            </div>

            <div className='single-instagram-post'>
              <img src='https://res.cloudinary.com/dnexbv8oe/image/upload/v1689456012/Screenshot_2023-07-16_at_2.49.04_AM_kwfij1.png' alt='image' />

              {/* <i className='bx bxl-instagram'></i> */}

              {/* <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link> */}
            </div>

            <div className='single-instagram-post'>
              <img src='https://res.cloudinary.com/dnexbv8oe/image/upload/v1689444504/Screenshot_2023-07-14_at_1.10.15_AM_tmn0ui.png' alt='image' />

              {/* <i className='bx bxl-instagram'></i> */}

              {/* <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link> */}
            </div>

          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default InstagramFeed;
