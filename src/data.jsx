import salad from "../assets/greek-salad.jpg";
import dessert from "../assets/lemon-dessert.jpg";
import bruchetta from "../assets/bruchetta.svg";
const restaurantInfo = {
  name: "Little Lemon",
  location: "Chicago",
  about:
    "We are a family oriented Mediterranean restaurant, focused on traditional recipes served with a modern twist",
};

const weeklySpecials = [
  {
    pic: salad,
    aboutPic: "picture of greek salad",
    dish: "Greek Salad",
    rate: "$10.99",
    dishDescription:
      "The famous Greek Salas of cispy lettuce, peppers, olives in Chicago style , feta cheese garnished with chruncy garlic and rosemary courtons ",
  },
  {
    pic: bruchetta,
    aboutPic: "picture of Bruschetta",
    dish: "Bruschetta",
    dishDescription:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    rate: "$15.99",
  },
  {
    pic: dessert,
    aboutPic: "picture of lemon dessert",
    dish: "Lemon Dessert",
    rate: "$5.99",
    dishDescription:
      "A refreshing Lemon Dessert with a buttery graham crust, layered with smooth lemon curd and whipped cream, topped with candied lemon.",
  },
];
export { restaurantInfo, weeklySpecials };
