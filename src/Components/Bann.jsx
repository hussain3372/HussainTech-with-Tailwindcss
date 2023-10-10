import React from "react";
import img12 from "../Components/Images/img13.jpg";
import Tilt from "react-parallax-tilt";

export default () => {
  return (
    <div className="bg-gray-900 pt-10 mt-20">
      <section className="mx-auto max-w-screen-xl pb-12 px-4 lg:flex md:px-8">
        <div className="space-y-4 sm:text-center lg:text-left mt-16 lg:w-1/2">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            One page for
            <span className="text-indigo-400"> Digital agency</span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <Tilt tiltReverse={true}>
            <img src={img12} className="w-full mx-auto sm:w-10/12 lg:w-full" />
          </Tilt>
        </div>
      </section>
      <hr />
    </div>
  );
};
