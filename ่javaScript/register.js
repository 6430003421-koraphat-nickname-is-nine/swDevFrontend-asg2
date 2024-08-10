function bookingData(name, phone, noPeople, checkBox) {
  this.name = name;
  this.phone = phone;
  this.noPeople = noPeople;
  this.checkBox = checkBox;
  this.isValid = function () {
    if (this.name === "") {
      alert("Please enter your valid name. Name can not be empty.");
      return false;
    } else if (this.phone === "") {
      alert(
        "Please enter your valid phone number. Phone number can not be empty."
      );
      return false;
    } else if (this.noPeople === "") {
      alert(
        "Please enter a number of people in your group. The group size should be between 1-15 only."
      );
      return false;
    } else {
      var noPeopleInt = parseInt(this.noPeople, 10);
      if (noPeopleInt < 1 || noPeopleInt > 15) {
        alert(
          "The group size should be between 1-15 only, the current number of people is " +
            noPeopleInt
        );
        return false;
      }
    }
    return true;
  };
}

function confirmBooking() {
  var name = document.forms["mainForm"]["name1"].value.trim();
  var phone = document.forms["mainForm"]["phoneNum"].value.trim();
  var noPeople = document.forms["mainForm"]["noPeople"].value.trim();
  var checkBox = document.forms["mainForm"]["joinLand"].checked;

  var booking = new bookingData(name, phone, noPeople, checkBox);

  if (booking.isValid()) {
    if (booking.checkBox) {
      var userConfirmed = confirm(
        "Are you sure you want to buy your own plane ticket?"
      );
      if (userConfirmed) {
        alert("You have chosen to buy your own ticket.");
      }
    }

    alert("Booking Confirmed!");
  }
}
