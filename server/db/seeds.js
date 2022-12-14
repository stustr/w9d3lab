use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    guestName: "Struan", 
    email: "struan@gmail.com",
    checkedIn: true
  },
  {
    guestName: "Peter", 
    email: "peter@gmail.com",
    checkedIn: false
  }
])