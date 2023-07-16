import React, { Component } from 'react';
import Link from 'next/link';

class SidebarModal extends Component {
  state = {
    modal: false,
  };

  closeModal = () => {
    this.props.onClick(this.state.modal);
  };

  render() {
    return (
      <>
        <div className={`sidebarModal right ${this.props.active}`}>
          <div className='modal-innter-content'>
            <button type='button' className='close' onClick={this.closeModal}>
              <span aria-hidden='true'>
                <i className='bx bx-x'></i>
              </span>
            </button>

            <div className='modal-body'>
              <div className='sidebar-about-content'>
                <h3>About The Pet's Aahar</h3>

                <div className='about-the-store'>
                  <p>
                  At Pet's Aahar, we believe in serving quality food which is healthy and nutrition full for dogs..
                  </p>

                  <ul className='sidebar-contact-info'>
                    <li>
                      <i className='bx bx-map'></i>
                      Kopar Rd, Shastri Nagar,Dombivli West,Maharashtra 421202
                    </li>
                    <li>
                      <i className='bx bx-phone-call'></i>
                      +91 81088 37503 || +91 90825 12104
                    </li>
                    <li>
                      <i className='bx bx-envelope'></i>
                      info@petsaahar.com
                    </li>
                  </ul>
                </div>

                <ul className='social-link'>
                  <li>
                    <Link href='#'>
                      <a className='d-block' target='_blank'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </Link>
                  </li>
                  
                  <li>
                    <Link href='https://www.instagram.com/petsaahar/'>
                      <a className='d-block' target='_blank'>
                        <i className='bx bxl-instagram'></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='https://in.linkedin.com/in/pet%E2%80%99s-aahar-121539282'>
                      <a className='d-block' target='_blank'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </Link>
                  </li>
                  
                </ul>
              </div>

              {/* <div className='sidebar-new-in-store'>
                <h3>New In Store</h3>

                <ul className='products-list'>
                  <li>
                    <Link href='#'>
                      <a>
                        <img
                          src='../images/products/img1.jpg'
                          alt='image'
                        />
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href='#'>
                      <a>
                        <img
                          src='../images/products/img2.jpg'
                          alt='image'
                        />
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href='#'>
                      <a>
                        <img
                          src='../images/products/img3.jpg'
                          alt='image'
                        />
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href='#'>
                      <a>
                        <img
                          src='../images/products/img4.jpg'
                          alt='image'
                        />
                      </a>
                    </Link>
                  </li>
                </ul>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href='/products-without-sidebar'>
                  <a className='shop-now-btn'>Shop Now</a>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SidebarModal;
