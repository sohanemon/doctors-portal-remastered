import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  // treatment is just another name of appointmentOptions with name, slots, _id
  const { user } = useContext(AuthContext);
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const userName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: userName,
      slot,
      email,
      phone,
    };

    // TODO: send data to the server
    // and once data is saved then close the modal
    // and display success toast

    fetch("http://localhost:5500/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='booking-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='text-lg font-bold'>{name}</h3>
          <form
            onSubmit={handleBooking}
            className='grid grid-cols-1 gap-3 mt-10'
          >
            <input
              type='text'
              disabled
              value={date}
              className='input w-full input-bordered '
            />
            <select name='slot' className='select select-bordered w-full'>
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name='name'
              type='text'
              defaultValue={user?.displayName}
              placeholder='Your Name'
              className='input w-full input-bordered'
            />
            <input
              name='email'
              type='email'
              defaultValue={user?.email}
              disabled
              placeholder='Email Address'
              className='input w-full input-bordered'
            />
            <input
              name='phone'
              type='text'
              placeholder='Phone Number'
              className='input w-full input-bordered'
            />
            <br />
            <input
              className='btn btn-accent w-full'
              type='submit'
              value='Submit'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
