import { useEffect, useState } from "react";
import "./App.css";
import BookingTile from "./components/BookingTile";
import Form from "./components/Form";
const baseURL = "http://localhost:9000/api/bookings/";

function App() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings();
  }, []);

  useEffect(() => {
    getBookings();
  }, [bookings]);

  const getBookings = () => {
    return fetch(baseURL)
      .then((res) => res.json())
      .then((results) => setBookings(results));
  };

  const putBookings = (id, boolean) => {
    console.log(id, boolean);
    return fetch(baseURL + id, {
      method: "PUT",
      body: JSON.stringify({ checkedIn: boolean }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  const postBooking = (payload) => {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  const deleteBooking = (id) => {
    return fetch(baseURL + id, { method: "DELETE" });
  };

  const remove = (id) => {
    const bookingsCopy = [...bookings];
    const index = bookingsCopy.indexOf(
      bookingsCopy.find((booking) => booking._id === id)
    );
    bookingsCopy.slice(index, 1);
    setBookings(bookingsCopy);
  };

  return (
    <div className="App">
      <Form postBooking={postBooking} getBookings={getBookings} />
      <BookingTile
        bookings={bookings}
        deleteBooking={deleteBooking}
        putBookings={putBookings}
        remove={remove}
      />
    </div>
  );
}

export default App;
