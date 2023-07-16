import Link from 'next/link';

const RecentBlogPost = () => {
  return (
    <section className='blog-area pt-100 pb-70'>
      <div className='container'>
        <div className='section-title'>
          <span className='sub-title'>Recent Story</span>
          <h2>From The Pet's Aahar</h2>
        </div>

        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className='single-blog-post'>
              <div className='post-image'>
                <video width={400} height={240} controls autoPlay loop>
                  <source
                    src="https://thepetwhisperer.s3.ap-south-1.amazonaws.com/TGP_0371.MOV"
                    type="video/mp4"
                  />
                </video>

                <div className='date'>
                  <span>July 09, 2023</span>
                </div>
              </div>


              <div className='post-content'>
                <span className='category'>Launch</span>
                <h3>
                  <a >
                    <a>Introducing Pet Aaahr, the ultimate companion for your furry friends. Our recently launched product brings joy, comfort, and endless tail wags to pets of all shapes and sizes. Experience the boundless love and happiness that only Pet Aaahr can provide.</a>
                  </a>
                </h3>

              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
          <div className='single-blog-post'>
              <div className='post-image'>
                <video width={400} height={240} controls autoPlay loop>
                  <source
                    src="https://thepetwhisperer.s3.ap-south-1.amazonaws.com/TGP_0372.MOV"
                    type="video/mp4"
                  />
                </video>

                <div className='date'>
                  <span>July 09, 2023</span>
                </div>
              </div>


              <div className='post-content'>
                <span className='category'>Product Launch :Salmon & Rice </span>
                <h3>
                  <a >
                    <a>
                    Introducing Salmon & Rice from Petaahar, the perfect gourmet delight for your beloved canine companion. Made with care and packed with nutritious goodness, this delectable blend of salmon and rice will keep your furry friend wagging their tail in delight. Treat your pet dog to the irresistible taste of Salmon & Rice from Petaahar, because they deserve a meal that is as delicious as it is nourishing.
                    </a>
                  </a>
                </h3>

              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
          <div className='single-blog-post'>
              <div className='post-image'>
                <video width={400} height={240} controls autoPlay loop>
                  <source
                    src="https://thepetwhisperer.s3.ap-south-1.amazonaws.com/TGP_0373.MOV"
                    type="video/mp4"
                  />
                </video>

                <div className='date'>
                  <span>July 09, 2023</span>
                </div>
              </div>


              <div className='post-content'>
                <span className='category'>Product Sample </span>
                <h3>
                  <a >
                    <a>
                    Join us and let your pets indulge in the flavors of tenderly cooked salmon and nutritious rice that will leave their tails wagging with satisfaction. Experience the joy of treating your pets to a delicious and healthy meal, while also celebrating the
                     launch of our brand. Don't miss this wonderful opportunity to create lasting memories with your pets - save the date and join us!
                    </a>
                  </a>
                </h3>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecentBlogPost;
