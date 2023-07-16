import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import OfferStyleOne from '../components/Common/OfferStyleOne';
import Partner from '../components/Common/Partner';
import Testimonials from '../components/Common/Testimonials';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

const About = ({ user, store }) => {
  return (
    <>
      <TopHeader user={user} />
      <Navbar user={user} store={store} />
      <PageBanner
        pageTitle='About Us'
        homePageUrl='/'
        homePageText='Home'
        activePageText='About Us'
      />

      <section className='about-area ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='about-image'>
                <img
                  src='https://res.cloudinary.com/dnexbv8oe/image/upload/v1689446460/fotor-ai-202307160932_rgga4u.jpg'
                  className='shadow'
                  alt='image'
                />
                {/* <img
                  src='https:///res-console.cloudinary.com/dnexbv8oe/thumbnails/transform/v1/image/upload/v1689460684/https:///res-console.cloudinary.com/dnexbv8oe/thumbnails/transform/v1/image/upload//v1689460684/VEdQTDAzNjJfbGZ3MW1z/drilldown'
                  className='shadow'
                  alt='image'
                /> */}
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='about-content'>
                <span className='sub-title'>About Us</span>
                <h2>From Our Kitchen to Their Bowl - Pure Pet Pleasure!"</h2>
                <h6>
                  At Pet's Aahar, we believe in serving quality food which is healthy and nutrition full for dogs.
                </h6>
                <p>
                  <strong>Pet's Aahar</strong>  provide homecooked and nutritions food to dogs, so they can live their best lives! Our goal is to make sure your pup gets the best nutrition possible—no matter how busy you are, or how much time you have to spend with your pup.
                </p>
                <p>
                  We understand that life can be busy, so we take care of all of your deliveries, so you never have to worry about feeding your dog. We deliver our hoom cooked food in 2 hours after you order it, so you can enjoy your time with your pet without having to worry about cooking and serving food yourself.
                  We believe that pets deserve the best nutrition available—and we're here for you and your pets every step of the way.
                </p>

                <div className='features-text'>
                  <h5>
                    <i className='bx bx-planet'></i>
                    We provide one-day delivery or delivery within 2 hours after an order is placed.
                  </h5>
                  <p>
                    We believe that every pet deserves to be treated like a member of the family. That's why we provide homecooked and nutrient-dense food to dogs.

                    We're not just here to make sure your dog is healthy—we want to help you take care of him too! Whether it's a simple meal or an elaborate dinner, we've got you covered.

                    Our goal is simple: We want to create the best possible experience for both you and your dog by providing them with meals that are homemade, delicious, and nutritious. That's why we use only the finest ingredients and make sure each meal is packed with nutrition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='about-inner-area'>
            <div className='row'>
              <div className='col-lg-4 col-sm-6'>
                <div className='about-text'>
                  <h3>Our Core Values</h3>
                  <p>"Welcome to Pets Aaahar, where we offer a wide selection of home cooked and nutritious food options for your beloved pets. Shop conveniently online to provide them with the quality meals they deserve!"</p>

                  <ul className='features-list'>
                    <li>
                      <i className='bx bx-check'></i> Quality Ingredients
                    </li>
                    <li>
                      <i className='bx bx-check'></i> Variety of Options
                    </li>
                    <li>
                      <i className='bx bx-check'></i> Home Cooked Goodness:
                    </li>
                    <li>
                      <i className='bx bx-check'></i> With  ♥️ & trust Of Pet's Aahar
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-4 col-sm-6'>
                <div className='about-text'>
                  <h3>Pet's Aahar Promise</h3>
                  <p>At Pets Aahar, we are committed to providing the best care and nourishment for your furry companions. .</p>

                  <ul className='features-list'>
                    <li>
                      <i className='bx bx-check'></i> Preservative-free ingredients
                    </li>
                    <li>
                      <i className='bx bx-check'></i> Safety and Hygiene
                      shopping
                    </li>
                    <li>
                      <i className='bx bx-check'></i> Customizable pet-food
                    </li>
                    <li>
                      <i className='bx bx-check'></i> EQuality and Nutrition:

                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-4 col-sm-6 offset-sm-3 offset-lg-0'>
                <div className='about-text'>
                  <h3>Our Promise</h3>
                  <p>Choose Pets Aahar and experience the difference in the quality, safety, and taste of our home cooked meals. Your pets deserve the best, and we are committed to fulfilling that promise.</p>

                  <ul className='features-list'>
                    <li>
                      <i className='bx bx-check'></i> Customized and Flexible Plans
                    </li>
                    <li>
                      <i className='bx bx-check'></i> Personalized Service
                    </li>
                    <li>
                      <i className='bx bx-check'></i> One Day deliver.
                    </li>
                    <li>
                      <i className='bx bx-check'></i> Your Pet Food For All Seasons
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OfferStyleOne />
      <Partner />
      <Testimonials />
      <FacilitySlider />
      <InstagramFeed />
      <Footer />
    </>
  );
};

export default About;
