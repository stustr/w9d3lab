import React from "react";

export default function Form(props) {
  const handleSubmit = (event) => {
    const formData = {
      guestName: event.target.name.value,
      email: event.target.email.value,
      checkedIn: event.target.checkedStatus.checked,
    };
    props.postBooking(formData);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} value="submit" input="text">
      <input
        type="text"
        name="name"
        id="guestName"
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email "
        required
      />
      <input type="checkbox" name="checkedStatus" id="checkedStatus" />
      <label htmlFor="checkedStatus">Click to check in</label>
      <button type="submit" value="submit">
        Submit
      </button>
    </form>
  );
}
