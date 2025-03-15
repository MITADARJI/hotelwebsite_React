import React from "react";

const Slider = () => {
  return (
    <div>
      <section className='banner-section fix'>
        <div className='slider-area'>
          <div className='swiper banner-slider'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='banner-wrapper style1 bg-img'>
                
                  
                  <div className='overlay'></div>
                  <div className='banner-container'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-xxl-6 col-xl-6'>
                          <div className='banner-title-area'>
                            <div className='banner-style1'>
                              <div className='section-title'>
                                <h6
                                  className='sub-title'
                                  data-animation='slideInRight'
                                  data-duration='2s'
                                  data-delay='.3s'
                                >
                                  {" "}
                                  WELCOME FRESHEAT{" "}
                                </h6>
                                <h1
                                  className='title'
                                  data-animation='slideInRight'
                                  data-duration='2s'
                                  data-delay='.5s'
                                >
                                  SPICY FRIED CHICKEN
                                </h1>
                                <a
                                  className='theme-btn'
                                   href= ' # '
                                  data-animation='slideInRight'
                                  data-duration='2s'
                                  data-delay='.7s'
                                >
                                  ORDER NOW{" "}
                                  <i className='fa-solid fa-regular fa-arrow-right'></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-xxl-6 col-xl-6  d-xxl-block'>
                          <div
                            className='banner-thumb-area'
                            data-tilt
                            data-animation='slideInRight'
                            data-duration='2s'
                            data-delay='.9s'
                          >
                            <img
                              src='img/banner/bannerThumb1_1.png'
                              alt='shape'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='banner-wrapper style1 bg-img'>
                
                  <div className='overlay'></div>
                  <div className='banner-container'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-xxl-6 col-xxl-6'>
                          <div className='banner-title-area'>
                            <div className='banner-style1'>
                              <div className='section-title'>
                                <h6
                                  className='sub-title'
                                  data-animation='slideInRight'
                                  data-duration='2s'
                                  data-delay='.3s'
                                >
                                  {" "}
                                  WELCOME FRESHEAT{" "}
                                </h6>
                                <h1
                                  className='title'
                                  data-animation='slideInRight'
                                  data-duration='2s'
                                  data-delay='.5s'
                                >
                                  Chicago Deep Pizza King
                                </h1>
                                <a
                                  className='theme-btn'
                                  href= ' # '
                                  data-animation='slideInRight'
                                  data-duration='2s'
                                  data-delay='.7s'
                                >
                                  ORDER NOW{" "}
                                  <i className='fa-solid fa-regular fa-arrow-right'></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-xxl-6 col-xl-6  d-xxl-block'>
                          <div
                            className='banner-thumb-area'
                            data-tilt
                            data-animation='slideInRight'
                            data-duration='2s'
                            data-delay='.9s'
                          >
                            <img
                              src='img/banner/bannerThumb1_2.png'
                              alt='shape'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='banner-wrapper style1 bg-img'>
                
                  <div className='overlay'></div>
                  <div className='banner-container'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-xxl-6 col-xxl-6'>
                          <div className='banner-title-area'>
                            <div className='banner-style1'>
                              <div className='section-title'>
                                <h6
                                  className='sub-title'
                                  data-animation='slideInRight'
                                  data-duration='2s'
                                  data-delay='.3s'
                                >
                                  {" "}
                                  WELCOME FRESHEAT{" "}
                                </h6>
                                <h1
                                  className='title'
                                  data-animation='slideInRight'
                                  data-duration='2s'
                                  data-delay='.5s'
                                >
                                  Chicago Deep Burger King
                                </h1>
                                <a
                                  className='theme-btn'
                                  href= ' # '
                                  data-animation='slideInRight'
                                  data-duration='2s'
                                  data-delay='.7s'
                                >
                                  ORDER NOW{" "}
                                  <i className='fa-solid fa-regular fa-arrow-right'></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-xxl-6 col-xl-6  d-xxl-block'>
                          <div
                            className='banner-thumb-area'
                            data-tilt
                            data-animation='slideInRight'
                            data-duration='2s'
                            data-delay='.9s'
                          >
                            <img
                              src='img/banner/bannerThumb1_3.png'
                              alt='shape'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='arrow-prev'>
              <img src='img/icon/arrowPrev.svg' alt='Icon' />
            </div>
            <div className='arrow-next'>
              <img src='img/icon/arrowNext.svg' alt='Icon' />
            </div>
            <div className='pagination-className swiper-pagination'></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
