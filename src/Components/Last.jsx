import React from "react";
import { Link } from "react-router-dom";
import img8 from "../Components/Images/img8.jpg";

const Last = () => {
  const backgroundStyle = {
    backgroundImage: `url(${img8})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-white mt-32"
      style={backgroundStyle}
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Let's talk about your project and see how <br /> we can work together
        </h1>
        <p className="text-xl mt-4 flex items-center justify-center">
          Our team of designers, developers and creatives are <br />{" "}
          perfectionists who love what they <br /> do and love where they work
        </p>
        <div className="mt-7">
          <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Last;
