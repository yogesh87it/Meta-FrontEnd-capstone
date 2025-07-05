import salad from "./assets/greek-salad.jpg";
import dessert from "./assets/lemon-dessert.jpg";
import bruchetta from "./assets/desert.jpg";
import chineseFace from "./assets/chinese-face.jpeg";
import face from "./assets/face.jpeg";
import femaleFace from "./assets/female-face.jpeg";
import face2 from "./assets/another-face.jpeg";
import MarioAdrain1 from "./assets/mario-adrain1.jpg";
import MarioAdrain2 from "./assets/mario-adrian2.jpg";

const restaurantInfo = {
  name: "Little Lemon",
  location: "Chicago",
  about:
    "We are a family oriented Mediterranean restaurant, focused on traditional recipes served with a modern twist",
  ownerInfo:
    "Little Lemon Chicago is a family owned Mediterranean restaurant located in the heart of the city. The restaurant is run by brothers Mario and Adrian, who have always had a passion for cooking and serving delicious food. Growing up in a Mediterranean household, the brothers were exposed to traditional recipes from an early age, and they decided to bring those recipes to the masses with a modern twist. At Little Lemon, you can expect to find a menu full of classic dishes with a creative twist that makes them stand out from the rest. Whether you're looking for a quick lunch or a leisurely dinner, Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.",
  ownerPic1: MarioAdrain1,
  ownerPic2: MarioAdrain2,
};

const weeklySpecials = [
  {
    pic: salad,
    aboutPic: "picture of greek salad",
    dish: "Greek Salad",
    rate: "$10.99",
    dishDescription:
      "The famous Greek Salas of cispy lettuce, peppers, olives in Chicago style , feta cheese garnished with chruncy garlic and rosemary courtons. ",
  },
  {
    pic: bruchetta,
    aboutPic: "picture of Bruschetta",
    dish: "Bruschetta",
    dishDescription:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil and fresh tomato slices.",
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
