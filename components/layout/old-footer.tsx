"use client";

import Link from "next/link";

import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaLocationDot as LocationPin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <div className="flex flex-col sm:flex-row h-auto sm:h-16 items-center justify-center sm:justify-around w-full gap-4 sm:gap-0 py-4 sm:py-0">
        <div className="w-full sm:w-auto">
          <Link
            href={`https://www.facebook.com/chickennearme`}
            target="_blank"
            className="flex bg-white-500 container mx-auto px-4 text-center items-center justify-center sm:justify-start hover:opacity-80 transition-opacity"
          >
            <Facebook className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
            <p className="ml-2 sm:ml-3 text-sm sm:text-base">Chicken Near Me</p>
          </Link>
        </div>
        <div className="w-full sm:w-auto">
          <Link
            href={`https://www.instagram.com/chickennearmeph`}
            target="_blank"
            className="flex bg-white-500 container mx-auto px-4 text-center items-center justify-center sm:justify-start hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
            <p className="ml-2 sm:ml-3 text-sm sm:text-base">
              @chickennearmeph
            </p>
          </Link>
        </div>
        <div className="w-full sm:w-auto">
          <Link
            href={`https://maps.app.goo.gl/KTHzbW9gNNg2xzNF8`}
            target="_blank"
            className="flex bg-white-500 container mx-auto px-4 text-center items-center justify-center sm:justify-start hover:opacity-80 transition-opacity"
          >
            <LocationPin className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
            <p className="ml-2 sm:ml-3 text-sm sm:text-base">
              Chicken Near Me, Alabang
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
