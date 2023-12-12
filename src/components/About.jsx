import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img className="m-10 rounded-3xl" src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
        At FlavorForge, we pride ourselves on curating a diverse array of recipes that cater to every palate. From classic comfort foods to bold and exotic dishes, our collection is designed to inspire your culinary journey. Every recipe, feature, and update is crafted with love and dedication to provide you with a unique and enjoyable food experience.
        </p>
        <p>
        Join a passionate community of food enthusiasts! Share your culinary adventures, connect with fellow foodies, and discover the joy of cooking together. Your reviews and comments make SpiceSaga a vibrant hub for food lovers worldwide.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
