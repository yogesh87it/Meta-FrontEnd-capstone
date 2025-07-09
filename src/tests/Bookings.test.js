import { render, screen } from "@testing-library/react";
import React from "react";
import Bookings from "../Components/Bookings.jsx"; // adjust path if needed

test("renders Select Date label", () => {
  render(<Bookings availableTimes={[]} dispatch={() => {}} />);
  const label = screen.getByLabelText(/select date/i);
  expect(label).toBeInTheDocument();
});

describe("updateTimes", () => {
  test("returns the same state that is passed", () => {
    const state = ["17:00", "18:00"];
    const action = { type: "update", date: "2023-09-01" };
    const result = updateTimes(state, action);
    expect(result).toBe(state); // Same reference
  });
});
