"use client";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
const ContactUs = () => {
  const [value, onChange] = useState(new Date());
  const [Information, setInformation] = useState({});
  const getInformation = (event) => {
    const { name, value } = event.target;
    setInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const formhandaler = (event) => {
    event.preventDefault();
    event.target.Concertname.value = "";
    event.target.concertdate.value = "";
    event.target.contactnumber.value = "";
    setInformation({});
  };
  return (
    <div className="py-20 px-[50px]">
      <div className="py-[24px]">
        <h1 className="text-center font-bold text-[80px]  text-white">
          BOOKED AVOID RAFA
        </h1>
        <h1 className="text-center text-[20px]  text-white">
          BOOKED AVOID RAFA FOR SHOW OR CONCERT
        </h1>
      </div>
      <div className="flex  justify-center gap-x-40 2xl:gap-x-56 my-10">
        <form onSubmit={formhandaler} className="flex flex-col gap-y-10 w-80">
          <label htmlFor="" className="text-white py-2 ">
            Show/Concert location
            <input
              type="text"
              name="Concertname"
              placeholder="Type your Show/Concert location"
              className="text-gray-300 text-[12px]   bg-transparent placeholder:bg-transparent placeholder:text-gray-300 placeholder:text-[12px]  w-80   outline-none border-b  placeholder:uppercase  border-b-slate-500"
              onChange={getInformation}
            />
          </label>
          <label htmlFor="" className="text-white py-2 ">
            Concert Date
            <input
              type="text"
              name="concertdate"
              placeholder="Concert Date"
              className="text-gray-300 text-[12px]  bg-transparent placeholder:bg-transparent placeholder:text-gray-300 placeholder:text-[12px]   w-80   outline-none border-b border-b-slate-500"
              onChange={getInformation}
            />
          </label>
          <label htmlFor="" className="text-white  py-2 ">
            Contact Number
            <input
              type="text"
              name="contactnumber"
              placeholder="Contact Number"
              className="text-gray-300 text-[12px]  bg-transparent placeholder:bg-transparent placeholder:text-gray-300 placeholder:text-[12px]   w-80   outline-none border-b border-b-slate-500"
              onChange={getInformation}
            />
          </label>
          <button
            type="submit"
            className="py-2 w-auto text-white border-2 border-white "
          >
            Submit
          </button>
        </form>
        <div id="react-calendar" className="react-calendar">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
      <h1 className="text-white text-[30px]  text-center">
        OR MAIL AT CONTACT@AVOIDRAFA.COM
      </h1>
    </div>
  );
};

export default ContactUs;
