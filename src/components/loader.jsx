import React from "react";

const loader = () => {
  return (
    <div>
      <div id='preloader' className='preloader'>
        <div className='animation-preloader'>
          <div className='spinner'></div>
          <div className='txt-loading'>
            <span data-text-preloader='F' className='letters-loading'>
              F
            </span>
            <span data-text-preloader='R' className='letters-loading'>
              R
            </span>
            <span data-text-preloader='E' className='letters-loading'>
              E
            </span>
            <span data-text-preloader='S' className='letters-loading'>
              S
            </span>
            <span data-text-preloader='H' className='letters-loading'>
              H
            </span>
            <span data-text-preloader='E' className='letters-loading'>
              E
            </span>
            <span data-text-preloader='A' className='letters-loading'>
              A
            </span>
            <span data-text-preloader='T' className='letters-loading'>
              T
            </span>
          </div>
          <p className='text-center'>Loading</p>
        </div>
        <div className='loader'>
          <div className='row'>
            <div className='col-3 loader-section section-left'>
              <div className='bg'></div>
            </div>
            <div className='col-3 loader-section section-left'>
              <div className='bg'></div>
            </div>
            <div className='col-3 loader-section section-right'>
              <div className='bg'></div>
            </div>
            <div className='col-3 loader-section section-right'>
              <div className='bg'></div>
            </div>
          </div>
        </div>
      </div>

      <div className='mouse-cursor cursor-outer'></div>
      <div className='mouse-cursor cursor-inner'></div>

      <button id='back-top' className='back-to-top'>
        <i className='fa-regular fa-arrow-up'></i>
      </button>
    </div>
  );
};

export default loader;
