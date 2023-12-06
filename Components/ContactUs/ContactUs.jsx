"use client";
import React, { useRef } from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import emailjs from "@emailjs/browser";
// import "react-calendar/dist/Calendar.css";
const ContactUs = () => {
  const [value, onChange] = useState(new Date());
  const [Information, setInformation] = useState({});
  console.log(Information);
  const form = useRef();
  const getInformation = (event) => {
    const { name, value } = event.target;
    setInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const formhandaler = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_q76a1ha",
        "template_d1dauak",
        form.current,
        "iY2KxbK_gADBnaSis"
      )
      .then(
        (result) => {
          alert("Mail Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    // event.target.Concertname.value = "";
    // event.target.concertdate.value = "";
    // event.target.contactnumber.value = "";
    // setInformation({});
  };
  return (
    <div className="py-20 px-[50px] " id="contact">
      <div className="py-[24px]">
        <h1 className="text-center font-bold  text-[30px] sm:text-[80px]  text-white">
          BOOK AVOIDRAFA
        </h1>
        <h1 className="text-center text-[20px]  text-white">
          BOOK AVOIDRAFA FOR SHOW OR CONCERT
        </h1>
      </div>
      <div className="flex  justify-center  gap-x-[16px] md:gap-x-40 lg:gap-x-56 my-10">
        <form
          ref={form}
          onSubmit={formhandaler}
          className="flex flex-col  2xl:gap-y-10 w-[9rem] lg:w-80"
        >
          <label
            htmlFor=""
            className="text-white py-2  text-[16px] sm:text-[16px]"
          >
            Name/Organization Name
            <input
              type="text"
              name="name"
              required
              placeholder="Type your Show/Concert location"
              className="text-gray-300 text-[12px]   bg-transparent placeholder:bg-transparent placeholder:text-gray-300  placeholder:text-[12px] sm:placeholder:text-[12px] w-[7rem] lg:w-80   outline-none border-b  placeholder:uppercase  border-b-slate-500"
              onChange={getInformation}
            />
          </label>
          <label
            htmlFor=""
            className="text-white py-2  text-[16px] sm:text-[16px]"
          >
            Show/Concert location
            <input
              type="text"
              required
              name="Concertname"
              placeholder="Type your Show/Concert location"
              className="text-gray-300 text-[12px]   bg-transparent placeholder:bg-transparent placeholder:text-gray-300  placeholder:text-[12px] sm:placeholder:text-[12px] w-[7rem] lg:w-80   outline-none border-b  placeholder:uppercase  border-b-slate-500"
              onChange={getInformation}
            />
          </label>
          <label
            htmlFor=""
            className="text-white py-2  text-[16px] sm:text-[16px] "
          >
            Concert Date
            <input
              type="date"
              required
              name="concertdate"
              placeholder="Concert Date"
              className="text-gray-300 text-[12px]  bg-transparent placeholder:bg-transparent placeholder:text-gray-300  placeholder:text-[12px] sm:placeholder:text-[12px]  w-[7rem] lg:w-80   outline-none border-b border-b-slate-500"
              onChange={getInformation}
            />
          </label>
          <label
            htmlFor=""
            className="text-white  py-2  text-[16px] sm:text-[16px] "
          >
            Contact Number
            <input
              type="text"
              required
              name="contactnumber"
              placeholder="Contact Number"
              className="text-gray-300 text-[12px]  bg-transparent placeholder:bg-transparent placeholder:text-gray-300  placeholder:text-[12px] sm:placeholder:text-[12px]  w-[7rem] lg:w-80   outline-none border-b border-b-slate-500"
              onChange={getInformation}
            />
          </label>
          <button
            type="submit"
            className=" py-1 sm:py-2 w-auto text-xs sm:text-lg text-white border-2 border-white "
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
