import Link from 'next/link';

const CategoriesBanner = () => {
  return (
    <section className='categories-banner-area pt-100 pb-70'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='single-categories-box'>
              <img src='https://res.cloudinary.com/dnexbv8oe/image/upload/v1689450266/prodect-packging-2-_chicken-and-rice_-fotor-202307161655-PhotoRoom_ejnhjo.png' alt='image' />

              <div className='content text-white'>
                <span style={{color:"black"}}>Don’t Miss Today</span>
                <h3 style={{color:"pink"}}> 20% OFF</h3>

                <Link href='/products-right-sidebar'>
                  <a className='default-btn'>Discover Now</a>
                </Link>
              </div>

              <Link href='/products-without-sidebar'>
                <a className='link-btn'></a>
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='single-categories-box'>
              <img src='../images/categories/categories2.jpg' alt='image' />

              <div className='content'>
                <span>New Collection</span>
                <h3>Need Now</h3>

                <Link href='/products-right-sidebar'>
                  <a className='default-btn'>Discover Now</a>
                </Link>
              </div>

              <Link href='/products-right-sidebar'>
                <a className='link-btn'></a>
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='single-categories-box'>
              <img src='../images/categories/categories3.jpg' alt='image' />

              <div className='content'>
                <span>Your Looks</span>
                <h3>Must Haves</h3>

                <Link href='/products-right-sidebar'>
                  <a className='default-btn'>Discover Now</a>
                </Link>
              </div>

              <Link href='/products-right-sidebar'>
                <a className='link-btn'></a>
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='single-categories-box'>
              <img src='../images/categories/categories4.jpg' alt='image' />

              <div className='content text-white'>
                <span>Take 20% OFF</span>
                <h3>Winter Spring!</h3>

                <Link href='/products-right-sidebar'>
                  <a className='default-btn'>Discover Now</a>
                </Link>
              </div>

              <Link href='/products-right-sidebar'>
                <a className='link-btn'></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesBanner;
