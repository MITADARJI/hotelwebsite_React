import React from "react";
import Search from "./search";
import Offcanvas from "./offcanvas";

const navbar = () => {
  return (
    <div className=''>
     <Offcanvas />
      <header className='header-section'>
        <div className='black-bg'></div>
        <div className='red-bg'></div>
        <div className='container-fluid'>
          <div className='main-header-wrapper'>
            <div className='logo-image'>
              <a href="#">
                <img src='img/logo/logo.svg' alt='img' />
              </a>
            </div>
            <div className='main-header-items'>
              <div className='header-top-wrapper'>
                <span>
                  <i className='fa-regular fa-clock'></i> 09:00 am - 06:00 pm
                </span>
                <div className='social-icon d-flex align-items-center'>
                  <span>Follow Us:</span>
                  <a href='#'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-youtube'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                </div>
              </div>
              <div id='header-sticky' className='header-1'>
                <div className='mega-menu-wrapper'>
                  <div className='header-main'>
                    <div className='logo'>
                      <a href="#" className='header-logo'>
                        <img src='img/logo/logo.svg' alt='logo-img' />
                      </a>
                    </div>
                    <div className='header-left'>
                      <div className='mean__menu-wrapper'>
                        <div className='main-menu'>
                          <nav id='mobile-menu'>
                            <ul>
                              <li className='has-dropdown active menu-thumb'>
                                <a href="#">
                                  Home
                                  <i className='fa-regular fa-plus'></i>
                                </a>
                                <ul className='submenu has-homemenu'>
                                  <li>
                                    <div className='homemenu-items'>
                                      <div className='homemenu'>
                                        <div className='homemenu-thumb'>
                                          <img
                                            src='img/header/home1.jpg'
                                            alt='img'
                                          />
                                          <div className='demo-button'>
                                            <a
                                              href= ' # '
                                              className='theme-btn'
                                            >
                                              Multi Page
                                            </a>
                                            <a
                                              href='index-one-page.html'
                                              className='theme-btn'
                                            >
                                              One Page
                                            </a>
                                            <a
                                              href='index-dark.html'
                                              className='theme-btn'
                                            >
                                              Dark Page
                                            </a>
                                          </div>
                                        </div>
                                        <div className='homemenu-content text-center'>
                                          <h4 className='homemenu-title'>
                                            Home 01
                                          </h4>
                                        </div>
                                      </div>
                                      <div className='homemenu'>
                                        <div className='homemenu-thumb mb-15'>
                                          <img
                                            src='img/header/home2.jpg'
                                            alt='img'
                                          />
                                          <div className='demo-button'>
                                            <a
                                             href= ' # '
                                              className='theme-btn'
                                            >
                                              Multi Page
                                            </a>
                                            <a
                                              href='index-two-page.html'
                                              className='theme-btn'
                                            >
                                              One Page
                                            </a>
                                            <a
                                            href= ' # '
                                              className='theme-btn'
                                            >
                                              Dark Page
                                            </a>
                                          </div>
                                        </div>
                                        <div className='homemenu-content text-center'>
                                          <h4 className='homemenu-title'>
                                            Home 02
                                          </h4>
                                        </div>
                                      </div>
                                      <div className='homemenu'>
                                        <div className='homemenu-thumb mb-15'>
                                          <img
                                            src='img/header/home3.jpg'
                                            alt='img'
                                          />
                                          <div className='demo-button'>
                                            <a
                                             href= ' # '
                                              className='theme-btn'
                                            >
                                              Multi Page
                                            </a>
                                            <a
                                              href= ' # '
                                              className='theme-btn'
                                            >
                                              One Page
                                            </a>
                                            <a
                                              href='index-3-dark.html'
                                              className='theme-btn'
                                            >
                                              Dark Page
                                            </a>
                                          </div>
                                        </div>
                                        <div className='homemenu-content text-center'>
                                          <h4 className='homemenu-title'>
                                            Home 03
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className='has-dropdown active d-xl-none'>
                                <a href='index.html' className='border-none'>
                                  Home
                                  <i className='fa-regular fa-plus'></i>
                                </a>
                                <ul className='submenu'>
                                  <li>
                                    <a href='index.html'>Home 01</a>
                                  </li>
                                  <li>
                                    <a href='index-2.html'>Home 02</a>
                                  </li>
                                  <li>
                                    <a href='index-3.html'>Home 03</a>
                                  </li>
                                </ul>
                              </li>
                              <li className='has-dropdown'>
                                <a href='about.html'>
                                  About Us
                                  <i className='fa-regular fa-plus'></i>
                                </a>
                                <ul className='submenu'>
                                  <li>
                                    <a href='about.html'>About Us 01</a>
                                  </li>
                                  <li>
                                    <a href='about-2.html'>About Us 02</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href='shop.html'>
                                  Shop
                                  <i className='fa-regular fa-plus'></i>
                                </a>
                                <ul className='submenu'>
                                  <li>
                                    <a href='shop.html'>Shop</a>
                                  </li>
                                  <li>
                                    <a href='shop-right-sidebar.html'>
                                      Shop Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href='shop-list.html'>Shop List</a>
                                  </li>
                                  <li>
                                    <a href='shop-list-right-sidebar.html'>
                                      Shop List Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href='shop-details.html'>Shop Details</a>
                                  </li>
                                  <li>
                                    <a href='cart.html'>Cart List</a>
                                  </li>
                                  <li>
                                    <a href='checkout.html'>Checkout</a>
                                  </li>
                                  <li>
                                    <a href='wishlist.html'>Wishlist</a>
                                  </li>
                                </ul>
                              </li>
                              <li className='has-dropdown'>
                                <a href='#'>
                                  Pages
                                  <i className='fa-regular fa-plus'></i>
                                </a>
                                <ul className='submenu'>
                                  <li className='has-dropdown'>
                                    <a href='#'>
                                      Chef
                                      <i className='fas fa-angle-down'></i>
                                    </a>
                                    <ul className='submenu'>
                                      <li>
                                        <a href='#'>Chef</a>
                                      </li>
                                      <li>
                                        <a href='#'>
                                          Chef Details 01
                                        </a>
                                      </li>
                                      <li>
                                        <a href='#'>
                                          Chef Details 02
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className='has-dropdown'>
                                    <a href='#'>
                                      Food Menu
                                      <i className='fas fa-angle-down'></i>
                                    </a>
                                    <ul className='submenu'>
                                      <li>
                                        <a href='#'>Food Menu 01</a>
                                      </li>
                                      <li>
                                        <a href='#'>Food Menu 02</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href='#'>Gallery</a>
                                  </li>
                                  <li className='has-dropdown'>
                                    <a href='#'>
                                      Services
                                      <i className='fas fa-angle-down'></i>
                                    </a>
                                    <ul className='submenu'>
                                      <li>
                                        <a href='#'>Services</a>{" "}
                                      </li>
                                      <li>
                                        <a href='#'>
                                          Service Details
                                        </a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li>
                                    <a href='#'>Testimonials</a>
                                  </li>
                                  <li>
                                    <a href='#'>Reservation</a>
                                  </li>
                                  <li>
                                    <a href='#'>Faq's</a>
                                  </li>
                                  <li>
                                    <a href='#'>My Account</a>
                                  </li>
                                  <li>
                                    <a href='#'>404 Page</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a a href='#'>
                                  Blog
                                  <i className='fa-regular fa-plus'></i>
                                </a>
                                <ul className='submenu'>
                                  <li>
                                    <a a href='#'>Blog</a>
                                  </li>
                                  <li>
                                    <a href='#'>
                                      Blog Standard
                                    </a>
                                  </li>
                                  <li>
                                    <a href='#'>
                                      Blog Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href='#'>Blog Details</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href='#'>
                                  Contact Us
                                  <i className='fa-regular fa-plus'></i>
                                </a>
                                <ul className='submenu'>
                                  <li>
                                    <a href='#'>Contact Us 01</a>
                                  </li>
                                  <li>
                                    <a href='#'>Contact Us 02</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div className='header-right d-flex justify-content-end align-items-center'>
                      <a href='#0' className='search-trigger search-icon'>
                        <i className='fal fa-search'></i>
                      </a>
                      <div className='header__cart'>
                        <a href='#'>
                          {" "}
                          <i className='fa-solid fa-cart-shopping'></i>{" "}
                        </a>
                        <div className='header__right__dropdown__wrapper'>
                          <div className='header__right__dropdown__inner'>
                            <div className='single__header__right__dropdown'>
                              <div className='header__right__dropdown__img'>
                                <a href='#'>
                                  <img
                                    loading='lazy'
                                    src='img/blog/blogRecentThumb3_1.png'
                                    alt='photo'
                                  />
                                </a>
                              </div>
                              <div className='header__right__dropdown__content'>
                                <a href='#'>Fried Chicken</a>
                                <p>
                                  1 x <span className='price'>$ 80.00</span>
                                </p>
                              </div>
                              <div className='header__right__dropdown__close'>
                                <a href='#'>
                                  <i className='icofont-close-line'></i>
                                </a>
                              </div>
                            </div>

                            <div className='single__header__right__dropdown'>
                              <div className='header__right__dropdown__img'>
                                <a href='#'>
                                  <img
                                    loading='lazy'
                                    src='img/blog/blogRecentThumb3_2.png'
                                    alt='photo'
                                  />
                                </a>
                              </div>
                              <div className='header__right__dropdown__content'>
                                <a href='#'>Fried Noodles</a>
                                <p>
                                  1 x <span className='price'>$ 60.00</span>
                                </p>
                              </div>
                              <div className='header__right__dropdown__close'>
                                <a href='#'>
                                  <i className='icofont-close-line'></i>
                                </a>
                              </div>
                            </div>

                            <div className='single__header__right__dropdown'>
                              <div className='header__right__dropdown__img'>
                                <a href='#'>
                                  <img
                                    loading='lazy'
                                    src='img/blog/blogRecentThumb3_3.png'
                                    alt='photo'
                                  />
                                </a>
                              </div>
                              <div className='header__right__dropdown__content'>
                                <a href='shop.html'>Special Pasta</a>
                                <p>
                                  1 x <span className='price'>$ 70.00</span>
                                </p>
                              </div>
                              <div className='header__right__dropdown__close'>
                                <a href='#'>
                                  <i className='icofont-close-line'></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <p className='dropdown__price'>
                            Total: <span>$1,100.00</span>
                          </p>
                          <div className='header__right__dropdown__button'>
                            <a href='#' className='theme-btn mb-2'>
                              View Cart
                            </a>
                            <a href='#' className='theme-btn style3'>
                              Checkout
                            </a>
                          </div>
                        </div>
                      </div>

                      <a className='theme-btn' href='#'>
                        ORDER NOW{" "}
                        <i className='fa-solid fa-regular fa-arrow-right'></i>
                      </a>
                      <div className='header__hamburger d-xl-block my-auto'>
                        <div className='sidebar__toggle'>
                          <i className='fas fa-bars'></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
   <Search />
    </div>
  );
};

export default navbar;
