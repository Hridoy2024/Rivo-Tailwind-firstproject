import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-Green" id="footer">
      <div className="container">
        <div className="flex  h-[599px]">
          <div className="w-1/4 ml-[174px]">
            <img className="mt-[80px] " src="footer.png" alt="" />
            <h3 className="text-white font-roboto font-medium text-[22px] mt-[44px] mb-[26px]">
              Social Media
            </h3>
            <div className="icon flex gap-[15px] text-[#C2EFD4]">
              <FaFacebookSquare size={38} />
              <FaTwitter size={38} />
              <FaInstagram size={38} />
            </div>
          </div>
          <div className="w-1/4 py-[105px]">
            <h4 className="text-white font-roboto font-medium text-[22px]">
              SHOP
            </h4>
            <ul>
              <li className=" text-[#C2EFD4] font-poppins font-normal text-[20px]">
                Products
              </li>
              <li className=" text-[#C2EFD4] font-poppins font-normal text-[20px]">
                Overview
              </li>
              <li className=" text-[#C2EFD4] font-poppins font-normal text-[20px]">
                Pricing
              </li>
              <li className=" text-[#C2EFD4] font-poppins font-normal text-[20px]">
                Releases
              </li>
            </ul>
          </div>
          <div className="w-1/4 py-[105px]">
            <h4 className="text-white font-roboto font-medium text-[22px]">
              Company
            </h4>
            <ul>
              <li className=" text-[#C2EFD4] font-poppins font-normal text-[20px]">
                About us
              </li>
              <li className=" text-[#C2EFD4] font-poppins font-normal text-[20px]">
                Contact
              </li>
              <li className=" text-[#C2EFD4] font-poppins font-normal text-[20px]">
                News
              </li>
              <li className=" text-[#C2EFD4] font-poppins font-normal text-[20px]">
                Support
              </li>
            </ul>
          </div>
          <div className="w-1/4 py-[105px]">
            <h4 className="text-white font-roboto font-medium text-[22px]">
              Stay up to date
            </h4>

            <form action="#">
              <input className="w-[372px] h-[57px] bg-Green placeholder:text-white placeholder: border border-[#A3F3BE] "
               type="email" 
               placeholder = "Enter your email "
               />
               <button className="py-[14px] px-[21px] bg-[#A3F3BE]">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
