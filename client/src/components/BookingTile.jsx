import React from "react";

export default function BookingTile(props) {
  const handleDelete = (event) => {
    props.deleteBooking(event.target.value);
    props.remove(event.target.value);
  };

  const handleCheck = (event) => {
    if (event.target.innerHTML === "Checked in") {
      // event.target.innerHTML = "Checked out";
      props.putBookings(event.target.value, false);
    } else {
      // event.target.innerHTML = "Checked in";
      props.putBookings(event.target.value, true);
    }
  };

  const bookingSquares = props.bookings.map((booking, index) => {
    return (
      <li key={index}>
        <p>{booking.guestName}</p>
        <p>{booking.email}</p><p>{typeof(booking.checkedIn)}</p>
        <button onClick={handleCheck} value={booking._id}>
          {booking.checkedIn ? "Checked in" : "Checked out"}
        </button>
        <button type="submit" onClick={handleDelete} value={booking._id}>
          Delete
        </button>
      </li>
    );
  });

  return (
    <div>
      <ul>{bookingSquares}</ul>
    </div>
  );
}
