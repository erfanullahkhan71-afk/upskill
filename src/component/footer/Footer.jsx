import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-slate-50 rounded-3xl py-10">
      {/* Header Box */}
      <div className="bg-blue-500 text-white rounded-2xl mx-auto p-6 max-w-3xl text-center">
        <h1 className="mb-4">
          consectetur adipisicing elit. Animi non vel provident eligendi, a
          fugit nulla neque ullam numquam inventore in vero.
        </h1>
        <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg hover:bg-blue-100 transition">
          Start Learning
        </button>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 mt-10 px-8 text-gray-700">
        {/* 1 */}
        <div>
          <h2 className="font-semibold mb-4">
            Empowering Afghan youth with skills <br /> for a digital future
          </h2>
          <div className="flex gap-3 mb-4">
            <img src="/fice.png" alt="facebook" className="w-6 h-6" />
            <img src="/link.png" alt="linkedin" className="w-6 h-6" />
            <img src="/insta.png" alt="instagram" className="w-6 h-6" />
          </div>
          <img src="/Scan QR.png" alt="QR code" className="w-24" />
        </div>

        {/* 2 */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Cleaning checklist</li>
            <li>House cleaning</li>
            <li>Apartments</li>
            <li>Commercial</li>
            <li>Spring center</li>
            <li>Partnerships</li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h3 className="font-semibold mb-4">Helpful Links</h3>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Areas we serve</li>
            <li>Work with us</li>
            <li>Reviews</li>
            <li>Contact</li>
            <li>Partnerships</li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h3 className="font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Help</li>
            <li>Reviews</li>
            <li>Job application</li>
            <li>About us</li>
          </ul>
        </div>

        {/* 5 */}
        <div>
          <h3 className="font-semibold mb-4">Location</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <CiLocationOn className="text-blue-500 text-xl" />
              <span>
                Karta Char, 3rd Division Opposite Street, Sun Tower Plaza
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneVolume className="text-blue-500" />
              <span>0748948465</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-300" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-8 text-sm text-gray-600">
        <p>@Copyright All rights reserved. 2025</p>
        <p>Developed by Erfanullah Rahmatzai</p>
      </div>
    </footer>
  );
}

export default Footer;
