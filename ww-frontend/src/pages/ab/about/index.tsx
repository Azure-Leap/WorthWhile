import React from "react";
import SideLayout2 from "@/components/SideLayout2";

const Profile = () => {
  return (
    <SideLayout2>
      <div className="ml-5 mt-2 w-11/12">
        <div>
          <h1 className="text-4xl ">Scheduling Appointments</h1>
          <h1 className="my-7 text-4xl font-bold">Just got easier</h1>
        </div>

        <div className="flex items-center mb-8 ">
          <div className="mr-10 w-80 ">
            <h1 className="text-2xl font-semibold">Look Around</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              perferendis deserunt incidunt ut? Delectus facere voluptatibus
              nemo odit accusantium? Quasi non inventore temporibus
              exercitationem est nam a. Voluptate, eum iste.
            </p>
          </div>
          <div className="w-80">
            <img
              src="/image/about/about-1.png"
              alt="about-1"
              className="w-60"
            />
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className=" w-96">
            <img
              src="/image/about/about-2.png"
              alt="about-2"
              className="w-60"
            />
          </div>
          <div className="w-80">
            <h1 className="text-2xl font-semibold">Appointments, Anytime</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              fugit a expedita magnam dolore repellendus, quaerat non nulla
              quibusdam iure.
            </p>
          </div>
        </div>

        <div className="flex items-center mb-24">
          <div className="mr-10 w-80 ">
            <h1 className="text-2xl font-semibold">Get Notified</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis, dolores repellendus! Consequatur voluptas placeat
              consectetur suscipit. Ut laborum voluptatibus animi?
            </p>
          </div>
          <div className="w-80">
            <img
              src="/image/about/about-3.png"
              alt="about-3"
              className="w-60"
            />
          </div>
        </div>

        <div className="text-center mb-20">
          <h1 className="text-5xl font-medium">Schedule Your Appointment</h1>
          <h1 className="text-5xl font-bold">in Just 10 Seconds</h1>
        </div>

        <div className="text-center">
          <h1 className="font-semibold text-2xl mb-5">Get your App now</h1>
          <button className="bg-cyan-300 text-white text-xl rounded-xl  p-4">
            Download App
          </button>
        </div>
      </div>
    </SideLayout2>
  );
};

export default Profile;
