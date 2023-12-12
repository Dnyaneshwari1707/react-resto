import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Deluxe Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Pasta" price="$29.99" />
        <DishesCard img={menu2} title="Potato-Meat Dish" price="$19.99" />
        <DishesCard img={menu3} title="Salad" price="$25.99" />
      </div>
    </div>
  );
};

export default Menu;
