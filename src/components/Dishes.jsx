import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Spicy Dish" price="$14.99" />
        <DishesCard img={img2} title="Spicy Dish" price="$14.99" />
        <DishesCard img={img3} title="Tasty Dish" price="$9.99" />
        <DishesCard img={img4} title="Crispy Dish" price="$11.99" />
        <DishesCard img={img5} title="Delicious Dish" price="$19.99" />
        <DishesCard img={img6} title="Delicious Dish" price="$14.99" />
      </div>
    </div>
  );
};

export default Dishes;
