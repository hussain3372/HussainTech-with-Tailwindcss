import React from "react";
import { BiLogoReact } from "react-icons/bi";
import { BsWordpress } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { AiOutlineAntDesign } from "react-icons/ai";
import Tilt from "react-parallax-tilt";

const Service = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font mt-20">
        <div className="container px-5 py-10 mx-auto md:py-24">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              OUR SERVICES
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Discover a wide range of services tailored to meet your needs and
              exceed your expectations. At Hussain Tech, we're committed to
              delivering top-notch solutions that empower your business
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 justify-center">
            <div className="p-4 md:w-1/2 lg:w-1/4 w-full">
              <Tilt reset={false}>
                <div className="border-2 border-white px-4 py-6 rounded-lg">
                  <BiLogoReact className="text-6xl text-white mx-auto" />
                  <h2 className="title-font font-medium text-3xl">React Js</h2>
                  <h2 className="title-font font-medium text-3xl text-white">
                    30M
                  </h2>
                  <p className="leading-relaxed">Downloads</p>
                </div>
              </Tilt>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/4 w-full">
              <Tilt reset={false}>
                <div className="border-2 border-white px-4 py-6 rounded-lg">
                  <BsWordpress className="text-6xl text-white mx-auto" />
                  <h2 className="title-font font-medium text-3xl">Wordpress</h2>
                  <h2 className="title-font font-medium text-3xl text-white">
                    20M
                  </h2>
                  <p className="leading-relaxed">Downloads</p>
                </div>
              </Tilt>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/4 w-full">
              <Tilt reset={false}>
                <div className="border-2 border-white px-4 py-6 rounded-lg">
                  <AiFillHtml5 className="text-6xl text-white mx-auto" />
                  <h2 className="title-font font-medium text-3xl">HTML</h2>
                  <h2 className="title-font font-medium text-3xl text-white">
                    40M
                  </h2>
                  <p className="leading-relaxed">Downloads</p>
                </div>
              </Tilt>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/4 w-full">
              <Tilt reset={false}>
                <div className="border-2 border-white px-4 py-6 rounded-lg">
                  <BiLogoCss3 className="text-6xl text-white mx-auto" />
                  <h2 className="title-font font-medium text-3xl">CSS</h2>
                  <h2 className="title-font font-medium text-3xl text-white">
                    40M
                  </h2>
                  <p className="leading-relaxed">Downloads</p>
                </div>
              </Tilt>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/4 w-full">
              <Tilt reset={false}>
                <div className="border-2 border-white px-4 py-6 rounded-lg">
                  <DiJavascript className="text-6xl text-white mx-auto" />
                  <h2 className="title-font font-medium text-3xl">
                    Javascript
                  </h2>
                  <h2 className="title-font font-medium text-3xl text-white">
                    35M
                  </h2>
                  <p className="leading-relaxed">Downloads</p>
                </div>
              </Tilt>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/4 w-full">
              <Tilt reset={false}>
                <div className="border-2 border-white px-4 py-6 rounded-lg">
                  <AiOutlineAntDesign className="text-6xl text-white mx-auto" />
                  <h2 className="title-font font-medium text-3xl">Designing</h2>
                  <h2 className="title-font font-medium text-3xl text-white">
                    10M
                  </h2>
                  <p className="leading-relaxed">Downloads</p>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
