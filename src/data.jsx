import salad from "./assets/greek-salad.jpg";
import dessert from "./assets/lemon-dessert.jpg";
import bruchetta from "./assets/bruchetta.svg";
import chineseFace from "./assets/chinese-face.jpeg";
import face from "./assets/face.jpeg";
import femaleFace from "./assets/female-face.jpeg";
import face2 from "./assets/another-face.jpeg";

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

const customerReviews = [
  {
    customerName: "Rita Giani",
    customerFeedback:
      "Delicious food, warm service, and a cozy atmosphere. A perfect spot for a relaxing meal. Highly recommended to everyone!",
    customerRating: "⭐⭐⭐⭐⭐",
    customerPic: femaleFace,
  },
  {
    customerName: "Michael Wong",
    customerFeedback:
      "Fantastic experience! Tasty dishes, friendly staff, and a welcoming vibe. Everything was perfect.",
    customerRating: "⭐⭐⭐⭐⭐",
    customerPic: chineseFace,
  },
  {
    customerName: "John Asharaf",
    customerFeedback:
      "Loved the food and quick service! Cozy setting with a great menu. A wonderful spot to enjoy meals with friends or family.",
    customerRating: "⭐⭐⭐⭐⭐",
    customerPic: face,
  },
  {
    customerName: "Jenny Grey",
    customerFeedback:
      "Beautifully presented, rich in flavor, perfectly balanced spices. Tender texture, aromatic finish — a delightful experience from first bite to last.",
    customerRating: "⭐⭐⭐⭐⭐",
    customerPic: face2,
  },
];

export { restaurantInfo, weeklySpecials, customerReviews };
