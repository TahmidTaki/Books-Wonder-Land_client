import React from "react";
import toast from "react-hot-toast";

const ModalFOrBooking = ({ user, bookingItem, setBookingItem }) => {
  //   const { userName } = user;
  if (!bookingItem) {
    return <h3>Loading...</h3>;
  }
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyerEmail = form.buyerEmail.value;
    const buyerName = form.buyerName.value;
    const itemName = form.itemName.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      buyerEmail: buyerEmail,
      buyer: buyerName,
      item: itemName,
      itemId: bookingItem._id,
      itemImg: bookingItem.image,
      price: price,
      buyerPhone: phone,
      meetLocation: location,
    };
    /* console.log(booking);
    setBookingItem(null); */
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setBookingItem(null);
          toast.success("Booking confirmed");
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input type="checkbox" id="modal-booking" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="modal-booking" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{user.displayName}</h3>
          <p className="py-4">{bookingItem.name}</p>
          {/* modal form starts */}
          <form onSubmit={handleBooking}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                name="buyerEmail"
                type="text"
                disabled
                defaultValue={user.email}
                className="input input-bordered w-full max-w-xs"
              />
              {/* input */}
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="buyerName"
                type="text"
                disabled
                defaultValue={user.displayName}
                className="input input-bordered w-full max-w-xs"
              />
              {/* input */}
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                name="itemName"
                type="text"
                disabled
                defaultValue={bookingItem?.name}
                className="input input-bordered w-full max-w-xs"
              />
              {/* input */}
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                type="text"
                disabled
                defaultValue={bookingItem?.resalePrice}
                className="input input-bordered w-full max-w-xs"
              />
              {/* input */}
              <label className="label">
                <span className="label-text">Your Phone No</span>
              </label>
              <input
                name="phone"
                type="number"
                required
                placeholder="eg.011223344"
                className="input input-bordered w-full max-w-xs"
              />
              {/* input */}
              <label className="label">
                <span className="label-text">Meetup Location</span>
              </label>
              <input
                name="location"
                required
                type="text"
                placeholder="Location of handover"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <button className="btn btn-secondary" type="submit">
              Book This Item
            </button>
          </form>
          {/* modal form ends */}
        </div>
      </div>
    </div>
  );
};

export default ModalFOrBooking;
