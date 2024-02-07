import React, { useState } from "react";
import "../style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Anisha from "../images/avatar-anisha.png";
import Ali from "../images/avatar-ali.png";
import Richard from "../images/avatar-richard.png";
import Shanai from "../images/avatar-shanai.png";

const Testimonial = () => {
  const settings = {
    dots: false,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 200,

    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className=" w-full left-0 mt-8 mb-4 md:mb-0 flex-row">
      <h2 className=" text-4xl font-bold">What they've said</h2>
      <Slider {...settings} className=" mt-8">
        <center className=" p-4">
          <div className=" rounded-xl bg-slate-100">
            <div className=" ">
              <img src={Anisha} alt="" className="" />

              <h3>Anisha Li</h3>
            </div>

            <p>
              "Age has supercharged our team's workflow. the maintain visibility
              on larger milestones at all times keeps everyone motivated."
            </p>
          </div>
        </center>
        <center className=" p-4">
          <div className=" rounded-xl bg-slate-100">
            <div>
              <img src={Ali} alt="" />
              <h3>ALi Bravo</h3>
            </div>
            <p>
              "We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confussion and
              everyone is more focused."
            </p>
          </div>
        </center>
        <center className=" p-4">
          <div className=" rounded-xl bg-slate-100">
            <div>
              <img src={Richard} alt="" />
              <h3>Richard Watts</h3>
            </div>
            <p>
              "Manage allows us to provide structure and process. It keeps us
              organized and focused. I can't stop recommending them to everyone
              I talk to."
            </p>
          </div>
        </center>
        <center className=" p-4">
          <div className=" rounded-xl bg-slate-100">
            <div>
              <img src={Shanai} alt="" />
              <h3>Shanai Gough</h3>
            </div>
            <p>
              "their sofware allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive."
            </p>
          </div>
        </center>
      </Slider>
    </div>
  );
};

export default Testimonial;
