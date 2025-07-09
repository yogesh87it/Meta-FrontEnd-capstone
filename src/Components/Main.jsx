import heroPic from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

import { restaurantInfo, weeklySpecials, customerReviews } from "../data";

export default function Main() {
  /*
  const timesArray = [
    "11.00",
    "11.30",
    "12.00",
    "12.30",
    "13.00",
    "13.30",
    "14.00",
    "14.30",
    "15.00",
    "15.30",
    "16.00",
    "16.30",
    "17.00",
    "17.30",
    "18.00",
    "18.30",
    "19.00",
    "19.30",
    "20.00",
    "20.30",
    "21.00",
  ];
*/
  // Step 2: Reducer function

  return (
    <>
      <HeroSection restaurantInfo={restaurantInfo} />
      <WeekSpecials weeklySpecials={weeklySpecials} />
      <CustomerReviews customerReviews={customerReviews} />
      <Chicago restaurantInfo={restaurantInfo} />
    </>
  );
}

function HeroSection({ restaurantInfo }) {
  return (
    <section className="hero">
      <div className="hero-info">
        <h1>{restaurantInfo.name}</h1>
        <p>{restaurantInfo.location}</p>
        <p>{restaurantInfo.about}</p>
        <Link to="/booking">
          <button>Reserve a Table</button>
        </Link>
      </div>
      <div className="hero-pic">
        <img src={heroPic} alt="a pic of restarant food" />
      </div>
    </section>
  );
}

function WeekSpecials({ weeklySpecials }) {
  return (
    <section className="main-special-container">
      <div className="weeklySpecials">
        <h2>This Week's Special</h2>
        <button>Online Menu</button>
      </div>
      <div className="special-container">
        <SpecialCards weeklySpecials={weeklySpecials[0]} />
        <SpecialCards weeklySpecials={weeklySpecials[1]} />
        <SpecialCards weeklySpecials={weeklySpecials[2]} />
      </div>
    </section>
  );
}

function SpecialCards({ weeklySpecials }) {
  return (
    <div className="specialCards">
      <div className="specialPic">
        <img src={weeklySpecials.pic} alt={weeklySpecials.aboutPic} />
      </div>
      <div className="special-dish-name-rate">
        <p>{weeklySpecials.dish}</p>
        <p className="special-rate">{weeklySpecials.rate}</p>
      </div>
      <div className="special-describe">
        <p>{weeklySpecials.dishDescription}</p>
        <p className="delivery">Order a delivery</p>
      </div>
    </div>
  );
}

function CustomerReviews({ customerReviews }) {
  return (
    <section className="customerReviews-main">
      <h3>Testimonials</h3>
      <div className="review-container">
        <ReviewCards customerReviews={customerReviews[0]} />
        <ReviewCards customerReviews={customerReviews[1]} />
        <ReviewCards customerReviews={customerReviews[2]} />
        <ReviewCards customerReviews={customerReviews[3]} />
      </div>
    </section>
  );
}

function ReviewCards({ customerReviews }) {
  return (
    <div className="customer-card">
      <p>{customerReviews.customerRating}</p>
      <div>
        <img src={customerReviews.customerPic} alt="pic of a customer" />
        <p>{customerReviews.customerName}</p>
      </div>
      <p>{customerReviews.customerFeedback}</p>
    </div>
  );
}

function Chicago({ restaurantInfo }) {
  return (
    <section className="owner-info">
      <div className="owner-details">
        <h3>{restaurantInfo.name}</h3>
        <p>{restaurantInfo.location}</p>
        <p>{restaurantInfo.ownerInfo}</p>
      </div>
      <div>
        <img
          className="owner-pic-1"
          src={restaurantInfo.ownerPic1}
          alt="pics of owners"
        />
        <img
          className="owner-pic-2"
          src={restaurantInfo.ownerPic2}
          alt="pics of owners"
        />
      </div>
    </section>
  );
}
