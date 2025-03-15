import React from "react";
import Navbar from "../components/navbar";
import Loader from "../components/loader";
import Slider from "../components/Slider";
import Bestfood from "../components/Bestfood";
import Bestdishes from "../components/Bestdishes";
import Cta from "../components/Cta";
import Timer from "../components/Timer";
import Footer from "../components/Footer";
const index = () => {
  return (
    <div>
      {/* <Loader /> */}
      <Navbar />
      <Slider />
      <Bestfood />
      {/* <!-- Offer Section   S T A R T --> */}
      <div className='offer-section fix bg-color2'>
        <div className='offer-wrapper'>
          <div className='container'>
            <div className='row gy-4'>
              <div className='col-lg-6 col-xl-4'>
                <div
                  className='offer-card style1 wow fadeInUp'
                  data-wow-delay='0.2s'
                  style={{ backgroundImage: "url(img/bg/offerBG1_1.jpg)" }}
                >
                  <div className='offer-content'>
                    <h6>ON THIS WEEK</h6>
                    <h3>SPICY FRIED CHICKEN</h3>
                    <p>limits Time Offer</p>
                    <a href='menu.html' className='theme-btn style4'>
                      ORDER NOW{" "}
                      <i className='fa-solid fa-regular fa-arrow-right'></i>
                    </a>
                  </div>
                  <div className='offer-thumb'>
                    <img
                      className='thumbImg'
                      src='img/offer/offerThumb1_1.png'
                      alt='thumb'
                    />
                    <div className='shape float-bob-x'>
                      <img src='img/shape/offerShape1_4.png' alt='shape' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-xl-4'>
                <div
                  className='offer-card style1 wow fadeInUp'
                  data-wow-delay='0.5s'
                  style={{ backgroundImage: "url(img/bg/offerBG1_1.jpg)" }}
                >
                  <div className='offer-content'>
                    <h6>WELCOME FRESHEAT</h6>
                    <h3>TODAY SPACIAL FOOD</h3>
                    <p>limits Time Offer</p>
                    <a href='menu.html' className='theme-btn style5'>
                      ORDER NOW{" "}
                      <i className='fa-solid fa-regular fa-arrow-right'></i>
                    </a>
                  </div>
                  <div className='offer-thumb'>
                    <img
                      className='thumbImg'
                      src='img/offer/offerThumb1_2.png'
                      alt='thumb'
                    />
                    <div className='shape float-bob-x'>
                      <img src='img/shape/offerShape1_4.png' alt='shape' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-xl-4'>
                <div
                  className='offer-card style1  wow fadeInUp'
                  data-wow-delay='0.7s'
                  style={{ backgroundImage: "url(img/bg/offerBG1_1.jpg)" }}
                >
                  <div className='offer-content'>
                    <h6>ON THIS WEEK</h6>
                    <h3>SPECIAL CHICKEN ROLL</h3>
                    <p>limits Time Offer</p>
                    <a href='menu.html' className='theme-btn style4'>
                      ORDER NOW{" "}
                      <i className='fa-solid fa-regular fa-arrow-right'></i>
                    </a>
                  </div>
                  <div className='offer-thumb'>
                    <img
                      className='thumbImg'
                      src='img/offer/offerThumb1_3.png'
                      alt='thumb'
                    />
                    <div className='shape float-bob-x'>
                      <img src='img/shape/offerShape1_4.png' alt='shape' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*    <!-- About Us Section   S T A R T --> */}
      <section className='about-us-section fix section-padding pb-0'>
        <div className='about-wrapper style1'>
          <div className='shape1  d-xxl-block'>
            <img src='img/shape/aboutShape1_1.png' alt='shape' />
          </div>
          <div className='shape2  d-xxl-block'>
            <img src='img/shape/aboutShape1_2.png' alt='shape' />
          </div>
          <div className='shape3  d-xxl-block'>
            <img className='cir36' src='img/shape/aboutShape1_3.png' alt='shape' />
          </div>
          <div className='shape4  d-xxl-block'>
            <img src='img/shape/aboutShape1_4.png' alt='shape' />
          </div>
          <div className='shape5  d-xxl-block'>
            <img src='img/shape/aboutShape1_5.png' alt='shape' />
          </div>
          <div className='shape6  d-xxl-block'>
            <img className='cir36' src='img/shape/aboutShape1_6.png' alt='shape' />
          </div>
          <div className='container'>
            <div className='about-us section-padding'>
              <div className='row'>
                <div className='col-12'>
                  <div className='title-area'>
                    <div
                      className='sub-title text-center wow fadeInUp'
                      data-wow-delay='0.5s'
                    >
                      <img
                        className='me-1'
                        src='img/icon/titleIcon.svg'
                        alt='icon'
                      />
                      About US
                      <img
                        className='ms-1'
                        src='img/icon/titleIcon.svg'
                        alt='icon'
                      />
                    </div>
                    <h2 className='title wow fadeInUp' data-wow-delay='0.7s'>
                      Variety of flavours from american cuisine
                    </h2>
                    <div className='text wow fadeInUp' data-wow-delay='0.8s'>
                      It is a long established fact that a reader will be
                      distracted the readable content of a page when looking at
                      layout the point established fact that
                    </div>
                    <div className='btn-wrapper wow fadeInUp' data-wow-delay='0.9s'>
                      <a className='theme-btn' href='menu.html'>
                        ORDER NOW{" "}
                        <i className='fa-solid fa-regular fa-arrow-right'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Bestdishes />
    <Cta />
    <section className="food-menu-section fix section-padding">
        <div className="burger-shape">
            <img src="img/shape/burger-shape.png" alt="img"/>
        </div>
        <div className="fry-shape">
            <img src="img/shape/fry-shape.png" alt="img"/>
        </div>
        <div className="food-menu-wrapper style1">
            <div className="container">
                <div className="food-menu-tab-wrapper style-bg">
                    <div className="title-area">
                        <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                            <img className="me-1" src="img/icon/titleIcon.svg" alt="icon"/>FOOD MENU<img className="ms-1"
                                src="img/icon/titleIcon.svg" alt="icon"/>
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                            Fresheat Foods Menu
                        </h2>
                    </div>


                    <div className="food-menu-tab">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-FastFood-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-FastFood" type="button" role="tab"
                                    aria-controls="pills-FastFood" aria-selected="true"><img
                                        src="img/menu/menuIcon1_1.png" alt="icon"/>Fast Food</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-drinkJuice-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-drinkJuice" type="button" role="tab"
                                    aria-controls="pills-drinkJuice" aria-selected="false"><img
                                        src="img/menu/menuIcon1_2.png" alt="icon"/>Drink & Juice</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-chickenPizza-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-chickenPizza" type="button" role="tab"
                                    aria-controls="pills-chickenPizza" aria-selected="false"><img
                                        src="img/menu/menuIcon1_3.png" alt="icon"/>Chicken Pizza</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-freshPasta-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-freshPasta" type="button" role="tab"
                                    aria-controls="pills-freshPasta" aria-selected="false"><img
                                        src="img/menu/menuIcon1_4.png" alt="icon"/>Fresh Pasta</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-FastFood" role="tabpanel"
                                aria-labelledby="pills-FastFood-tab" tabindex="0">
                                <div className="row gx-60">
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_1.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3 className="active">Chinese Pasta</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$15.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_2.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken Fried Rice</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$25.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_3.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken Pizza</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$115.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_4.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken Noodles</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$154.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_5.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Grilled Chicken</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$55.99</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_6.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Egg and Cucumber</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$65.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_7.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken White Rice</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$135.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_8.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Spatial Barger</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$95.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_9.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Vegetables Burger</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$75.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img
                                                        src="img/menu/menuThumb1_10.png" alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Brief Chicken</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$44.99</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-drinkJuice" role="tabpanel"
                                aria-labelledby="pills-drinkJuice-tab" tabindex="0">
                                <div className="row gx-30">
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_1.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chinese Pasta</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$15.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_2.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken Fried Rice</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$25.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_3.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken Pizza</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$115.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_4.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken Noodles</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$154.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_5.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Grilled Chicken</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$55.99</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_6.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Egg and Cucumber</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$65.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_7.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken White Rice</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$135.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_8.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Spatial Barger</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$95.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_9.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Vegetables Burger</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$75.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img
                                                        src="img/menu/menuThumb1_10.png" alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Brief Chicken</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$44.99</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-chickenPizza" role="tabpanel"
                                aria-labelledby="pills-chickenPizza-tab" tabindex="0">
                                <div className="row gx-30">
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_1.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chinese Pasta</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$15.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_2.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken Fried Rice</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$25.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_3.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken Pizza</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$115.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_4.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken Noodles</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$154.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_5.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Grilled Chicken</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$55.99</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_6.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Egg and Cucumber</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$65.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_7.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken White Rice</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$135.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_8.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Spatial Barger</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$95.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_9.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Vegetables Burger</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$75.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img
                                                        src="img/menu/menuThumb1_10.png" alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Brief Chicken</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$44.99</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-freshPasta" role="tabpanel"
                                aria-labelledby="pills-freshPasta-tab" tabindex="0">
                                <div className="row gx-30">
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_1.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chinese Pasta</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$15.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_2.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken Fried Rice</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$25.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_3.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken Pizza</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$115.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_4.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken Noodles</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$154.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_5.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Grilled Chicken</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$55.99</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_6.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Egg and Cucumber</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$65.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_7.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Chicken White Rice</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$135.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_8.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Spatial Barger</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$95.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img src="img/menu/menuThumb1_9.png"
                                                        alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Vegetables Burger</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$75.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-item-thumb"><img
                                                        src="img/menu/menuThumb1_10.png" alt="thumb" /></div>
                                                <div className="menu-content">
                                                    <a href="menu.html">
                                                        <h3>Brief Chicken</h3>
                                                    </a>
                                                    <p>It's a testament to our.</p>
                                                </div>
                                            </div>

                                            <h6>$44.99</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="marquee-wrapper style-1 text-slider section-padding pt-0 mt-5">
            <div className="marquee-inner to-left">
                <ul className="marqee-list d-flex">
                    <li className="marquee-item style1">
                        <span className="text-slider"></span><span className="text-slider text-style">chicken pizza</span>
                        <span className="text-slider"></span><span className="text-slider text-style">GRILLED CHICKEN</span>
                        <span className="text-slider"></span><span className="text-slider text-style">BURGER</span>
                        <span className="text-slider"></span><span className="text-slider text-style">CHICKEN PIZZA</span>
                        <span className="text-slider"></span><span className="text-slider text-style">FRESH PASTA</span>
                        <span className="text-slider"></span><span className="text-slider text-style">ITALIANO FRENCH FRY</span>
                        <span className="text-slider"></span><span className="text-slider text-style">CHICKEN FRY</span>
                        <span className="text-slider"></span><span className="text-slider text-style">chicken pizza</span>
                        <span className="text-slider"></span><span className="text-slider text-style">GRILLED CHICKEN</span>
                        <span className="text-slider"></span><span className="text-slider text-style">BURGER</span>
                        <span className="text-slider"></span><span className="text-slider text-style">CHICKEN PIZZA</span>
                        <span className="text-slider"></span><span className="text-slider text-style">FRESH PASTA</span>
                        <span className="text-slider"></span><span className="text-slider text-style">ITALIANO FRENCH FRY</span>
                        <span className="text-slider"></span><span className="text-slider text-style">CHICKEN FRY</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <Timer />
    {/* <!-- Chefe Section    S T A R T --> */}
    <section className="chefe-section fix section-padding">
    <div className="chefe-wrapper style1">
        <div className="shape1 d-none d-xxl-block"><img className="float-bob-y" src="img/shape/chefeShape1_1.png"
                alt="shape"/></div>
        <div className="shape2 d-none d-xxl-block"><img className="float-bob-x" src="img/shape/chefeShape1_2.png"
                alt="shape"/></div>
        <div className="container">
            <div className="title-area">
                <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                    <img className="me-1" src="img/icon/titleIcon.svg" alt="icon"/>OUR CHEFE<img className="ms-1"
                        src="img/icon/titleIcon.svg" alt="icon"/>
                </div>
                <h2 className="title  wow fadeInUp" data-wow-delay="0.7s">
                    Meet Our Expert Chefe
                </h2>
            </div>
            <div className="chefe-card-wrap style1 pb-5">
                <div className="row">
                    <div className="col-lg-6 col-xl-4">
                        <div className="chefe-card style1 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="chefe-thumb">
                                <img src="img/chefe/chefeThumb1_1.png" alt="thumb"/>
                            </div>
                            <div className="icon">
                                <a className="hovered-icon" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-light fa-share-nodes"></i></a>
                                <a className="hovered-icon" href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                            <div className="chefe-content">
                                <a href="chef-details.html">
                                    <h3>Ralph Edwards</h3>
                                </a>
                                <p>Chef Lead</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="chefe-card style1 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="chefe-thumb">
                                <img src="img/chefe/chefeThumb1_2.png" alt="thumb"/>
                            </div>
                            <div className="icon">
                                <a className="hovered-icon" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-light fa-share-nodes"></i></a>
                                <a className="hovered-icon" href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                            <div className="chefe-content">
                                <a href="chef-details.html">
                                    <h3>Leslie Alexander</h3>
                                </a>
                                <p>Chef Assistant</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="chefe-card style1 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="chefe-thumb">
                                <img src="img/chefe/chefeThumb1_3.png" alt="thumb"/>
                            </div>
                            <div className="icon">
                                <a className="hovered-icon" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-light fa-share-nodes"></i></a>
                                <a className="hovered-icon" href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                            <div className="chefe-content">
                                <a href="chef-details.html">
                                    <h3>Ronald Richards</h3>
                                </a>
                                <p>Chef Assistant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-area pt-5 mt-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="swiper clientSliderOne">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="client-img text-center"><img src="img/logo/clientLogo1_1.png"
                                    alt="logo"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="client-img text-center"><img src="img/logo/clientLogo1_2.png"
                                    alt="logo"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="client-img text-center"><img src="img/logo/clientLogo1_3.png"
                                    alt="logo"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="client-img text-center"><img src="img/logo/clientLogo1_4.png"
                                    alt="logo"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="client-img text-center"><img src="img/logo/clientLogo1_5.png"
                                    alt="logo"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="client-img text-center"><img src="img/logo/clientLogo1_6.png"
                                    alt="logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<Footer />
      
    </div>
  );
};

export default index;
