import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import Link from 'next/link';

const CustomerService = ({ user,store }) => {
  return (
    <>
      <TopHeader user={user} />
      <Navbar user={user} store={store} />
      <PageBanner
        pageTitle='Customer Service'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Customer Service'
      />

      <section className='customer-service-area ptb-100'>
        <div className='container'>
          <div className='customer-service-content'>
            <h3>
              <i className='bx bx-gift'></i>
              Shipping Times and Costs
            </h3>
            <ul>
              <li>Complimentary ground shipping within 2 </li>
              <li>In-store collection available within 2-6 hours</li>
              <li>Next-day and Express delivery options also available</li>
              <li>
                Purchases are delivered in an orange box tied with a Bolduc
                ribbon, with the exception of certain items
              </li>
              <li>
                See the delivery FAQs for details on shipping methods, costs and
                delivery times
              </li>
            </ul>

            <h3>
              <i className='bx bx-credit-card-front'></i>
              Payment Methods
            </h3>
            <p>Pet's Aahar accepts the following payment methods:</p>
            <ul>
              <li>
                Credit Card: Visa, MasterCard, Discover, American Express, JCB,
                Visa Electron. The total will be charged to your card when the
                order is shipped.
              </li>

              
            </ul>

            <h3>
              <i className='bx bx-sync'></i>
              Exchanges, Returns and Refunds
            </h3>
            <p>
              Items cannot be returned.If you face any issue with our Product please contact customer sevq to resolve the issue with best way possible.
            </p>
          </div>
        </div>
      </section>

      <FacilitySlider />
      <InstagramFeed />
      <Footer />
    </>
  );
};

export default CustomerService;
