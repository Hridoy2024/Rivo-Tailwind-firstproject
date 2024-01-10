import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navber = () => {
  return (
    <nav className="bg-bgGreen pt-14">
      <div className="container">
        <div className="flex">
          <div className="w-1/3 flex items-center justify-start">
            <img src="navber.png" alt="nav" />
          </div>

          <div className="w-1/3 flex items-center justify-center ">
            <ul className="flex gap-14">
              <li>
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/3 flex items-center justify-end gap-14">
            <div className="cart relative">
              <MdOutlineShoppingBag className="text-4xl" />
              <div className="dot p-1 bg-[#C2EFD4] absolute top-5 left-5">
                <div className="innerdot h-3 w-3 rounded-full bg-emerald-500"></div>
              </div>
            </div>
            <button className="btn">login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
