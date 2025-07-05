import heroPic from "../assets/restauranfood.jpg";
import { restaurantInfo, weeklySpecials, customerReviews } from "../data";

export default function Main() {
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
        <button>Reserve a Table</button>
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
        <p>Order a delivery</p>
      </div>
    </div>
  );
}

function CustomerReviews({ customerReviews }) {
  return (
    <section class="cutomerReviews-main">
      <h3>Testimonials</h3>
      <div class="review-container">
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

function Chicago() {
  <section className="hero-info">
    <div>
      <h3>{restaurantInfo.name}</h3>
      <p>{restaurantInfo.location}</p>
      <p>{restaurantInfo.about}</p>
    </div>
    <div>
      <img src="MarioAdrain1" alt="pics of owners" />
      <img src="MarioAdrain2" alt="pics of owners" />
    </div>
  </section>;
}
