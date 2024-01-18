import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-projectBlack text-white p-10">
      <Container className="px-5">
        <div className="flex gap-10 justify-between flex-wrap">
          <div className="flex flex-col gap-y-2 ">
            <h1>PanchParva</h1>
            <p className=" text-sm max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              facilis.
            </p>
          </div>
          <div className="flex-1 flex-wrap flex gap-10 justify-between">
            <div className="flex flex-col gap-y-4">
              <h1 className="font-bold">Pages</h1>
              <ul className="flex flex-col gap-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Projects</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h1 className="font-bold">Socials</h1>
              <ul className="flex flex-col gap-y-2">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>youtube</li>
                <li>Instagram</li>
                <li>X</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h1 className="font-bold">Services</h1>
              <ul className="flex flex-col gap-y-2">
                <li>Web Design</li>
                <li>Web Dev</li>
                <li>SEO</li>
                <li>Landing Pages</li>
                <li>Computer</li>
              </ul>
            </div>
            <div className="">
              <p className="mb-2 font-bold">Subscribe</p>
              <div className="bg-white lg:w-full w-fit px-5 py-2 relative rounded-full">
                <input
                  className="bg-white placeholder:text-black"
                  placeholder="Email"
                />
                <div className="absolute top-1/2 -translate-y-1/2 text-white bg-black rounded-full py-1 right-1 px-4">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-10" />
        <div className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row md:justify-around py-10 ">
          <div className="flex flex-col">
            <h1 className="text-white font-bold">Copyright by</h1>
            <p className="text-slate-300">Krishna Bharadwaj</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-bold">Contact Us</h1>
            <p className="text-slate-300">+91-9999999999</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-bold">Address</h1>
            <p className="text-slate-300">Bangalore</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
