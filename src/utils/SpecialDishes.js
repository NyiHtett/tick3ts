import Bruschetta from "../assets/SpecialDishes/Bruschetta.jpeg";
import GreekSalad from "../assets/SpecialDishes/greek salad.jpg";
import LemonDessert from "../assets/SpecialDishes/lemon dessert.jpg";

export const SpecialDishes = [
  {
    id: "1",
    name: "Greek salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: GreekSalad,
    price: "$12.99",
    priceInt: 12.99,
  },
  {
    id: "2",
    name: "Bruchetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: Bruschetta,
    price: "$5.99",
    priceInt: 5.99,
  },
  {
    id: "3",
    name: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: LemonDessert,
    price: "$5.00",
    priceInt: 5.0,
  },
];
