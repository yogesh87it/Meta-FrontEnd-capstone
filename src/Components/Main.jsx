import heroPic from "../assets/retauranfood.jpg";
import { restaurantInfo, weeklySpecials } from "../data";

export default function Main() {
  return (
    <>
      <HeroSection restaurantInfo={restaurantInfo} />
      <WeekSpecials weeklySpecials={weeklySpecials} />
      <CustomerReviews />
      <Chicago />
    </>
  );
}

function HeroSection({ restaurantInfo }) {
  return (
    <section className="hero">
      <div>
        <h1>{restaurantInfo.name}</h1>
        <p>{restaurantInfo.location}</p>
        <p>{restaurantInfo.about}</p>
        <button>Reserve a Table</button>
      </div>
      <div>
        <img src={heroPic} alt="a pic of restarant food" />
      </div>
    </section>
  );
}

function WeekSpecials({ weeklySpecials }) {
  return (
    <section class="weeklySpecials">
      <div>
        <h2>This Week's Special</h2>
        <button>Online Menu</button>
      </div>
      <div>
        <SpecialCards weeklySpecials={weeklySpecials[0]} />
        <SpecialCards weeklySpecials={weeklySpecials[1]} />
        <SpecialCards weeklySpecials={weeklySpecials[2]} />
      </div>
    </section>
  );
}

function SpecialCards({ weeklySpecials }) {
  return (
    <div>
      <img src={weeklySpecials.pic} alt={weeklySpecials.aboutPic} />
      <div>
        <p>{weeklySpecials.dish}</p>
        <p>{weeklySpecials.rate}</p>
      </div>
      <p>{weeklySpecials.dishDescription}</p>
      <p>Order a delivery</p>
    </div>
  );
}
function CustomerReviews() {}

function Chicago() {}
