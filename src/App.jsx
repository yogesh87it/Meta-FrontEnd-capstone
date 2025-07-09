import { useReducer, useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Bookings from "./Components/Bookings";
import { updateTimes, initializeTimes } from "./Components/utils";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const [bookings, setBookings] = useState([]);
  return (
    <div className="main-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/booking"
            element={
              <Bookings
                availableTimes={availableTimes}
                dispatch={dispatch}
                bookings={bookings}
                setBookings={setBookings}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
