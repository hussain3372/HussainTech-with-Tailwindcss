import React, { useState } from "react";
import img9 from "../Components/Images/img9.jpg";
import img10 from "../Components/Images/img10.jpg";
import img11 from "../Components/Images/img11.jpg";

const About = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };
  const handlemouseHover = () => {
    setHover(false);
  };

  const lineStyle = {
    width: hover ? "150px" : "100px",
    height: "2px",
    backgroundColor: "#333",
    transition: "width 0.5s ease",
  };
  return (
    <div>
      <div>
        <section class="text-black body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 ml-16">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={img9}
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <div
                className="relative"
                onMouseEnter={handleHover}
                onMouseLeave={handlemouseHover}
              >
                <div style={lineStyle}></div>
              </div>
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                Before they sold out
                <br class="hidden lg:inline-block" />
                readymade gluten
              </h1>
              <p class="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
            </div>
          </div>
          <hr className="h-1 bg-gray-500 " />
        </section>
        <section class="text-black body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <div
                className="relative"
                onMouseEnter={handleHover}
                onMouseLeave={handlemouseHover}
              >
                <div style={lineStyle}></div>
              </div>
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                We’ve worked alongside
                <br class="hidden lg:inline-block" />
                plenty of brands & startups
              </h1>
              <p class="mb-8 leading-relaxed">
                Our team of designers and developers are perfectionists who love
                what they do – we thrive off pushing the boundaries of our
                clients’ expectations and our own capabilities.
              </p>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 ml-16">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={img10}
              />
            </div>
          </div>
          <hr className="h-1 bg-gray-500 " />
        </section>
        <section class="text-black body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 ml-16">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={img11}
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <div
                className="relative"
                onMouseEnter={handleHover}
                onMouseLeave={handlemouseHover}
              >
                <div style={lineStyle}></div>
              </div>
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                You’ve got questions and
                <br class="hidden lg:inline-block" />
                we’ve got answers
              </h1>
              <p class="mb-8 leading-relaxed">
                Hussain TECH offers a wide range of digital solutions, including
                app development, website development, digital marketing
                services, and more.
              </p>
            </div>
          </div>
          <hr className="h-1 bg-gray-500 " />
        </section>
      </div>
    </div>
  );
};

export default About;
