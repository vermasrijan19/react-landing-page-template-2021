import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Sponsor = () => {
  const { sponsor } = config;
  const [firstItem, secondItem, thirdItem, fItem, fiItem] = sponsor.items;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={`bg-background py-8`} id="sponsor">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {sponsor.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div
          className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex flex-wrap`}
        >
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600 text-justify`}>
              {firstItem?.description}
            </p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div
          className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex flex-wrap flex-col-reverse sm:flex-row`}
        >
          <div className={` w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8 text-justify`}>
                {secondItem?.description}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex flex-wrap`}
        >
          <div className={` w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {thirdItem?.title}
            </h3>
            <p className={`text-gray-600 text-justify`}>
              {thirdItem?.description}
            </p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={thirdItem?.img}
              alt={thirdItem?.title}
            />
          </div>
        </div>
        <div
          className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex flex-wrap flex-col-reverse sm:flex-row`}
        >
          <div className={` w-full sm:w-1/2 p-6`}>
            <img className="h-6/6" src={fItem?.img} alt={fItem?.title} />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {fItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8 text-justify`}>
                {fItem?.description}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex flex-wrap`}
        >
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {fiItem?.title}
            </h3>
            <p className={`text-gray-600 text-justify`}>
              {fiItem?.description}
            </p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img className="h-6/6" src={fiItem?.img} alt={fiItem?.title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
