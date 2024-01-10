import React from "react";
import { IoMdStar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const Bestsell = () => {
  return (
    <section id="bestsell  ">
      <div className="container">
        <div className="text-area">
          <h1 className="font-roboto text-[64px] text-[#224F34] font-medium text-center pt-[114px]">
            Best selling
          </h1>

          <p className="pt-[37px] text-center text-[#224F34] text-[22px] font-medium mb-[80px]">
            Get in on the trend with our curated selection of best-selling
            styles.
          </p>
        </div>

        <div className="flex">
          <div className="w-1/3">
            <img src="/Best1.png" alt="pic" />
            <p className="font-poppins font-semibold text-[22px] text-[#373737] text-center mt-[51px]">
              Regular Fit Long Sleeve Top
            </p>
            <div className="flex mt-[8px] items-center justify-center gap-[39px]">
              <p className="font-poppins font-medium text-[22px] text-[#454545] ">
                $38.99
              </p>
              <span className="text-[#454545] text-xl font-bold">|</span>
              <p className="font-poppins font-medium text-[22px] text-[#454545] ">
                5.0 <IoMdStar className="inline-block text-yellow-400" />
              </p>
            </div>
          </div>

          <div className="w-1/3">
            <img src="/Best2.png" alt="" />
            <p className="font-poppins font-semibold text-[22px] text-[#373737] text-center mt-[51px]">
              Black Crop Tailored Jacket
            </p>
            <div className="flex  mt-[8px] items-center justify-center gap-[39px]">
              <p className="font-poppins font-medium text-[22px] text-[#454545]">
                $62.99
              </p>
              <span className="text-[#454545] text-xl font-bold">|</span>
              <p className="font-poppins font-medium text-[22px] text-[#454545]">
                4.9 <IoMdStar className="inline-block text-yellow-400" />
              </p>
            </div>
          </div>

          <div className="w-1/3">
            <img src="/Best3.png" alt="" />
            <p className="font-poppins font-semibold text-[22px] text-[#373737] text-center mt-[51px]">
              Textured Sunset Shirt
            </p>
            <div className="flex mt-[8px] items-center justify-center gap-[39px]">
              <p className="font-poppins font-medium text-[22px] text-[#454545]">
                $49.99
              </p>
              <span className="text-[#454545] text-xl font-bold">|</span>
              <p className="font-poppins font-medium text-[22px] text-[#454545]">
                5.0 <IoMdStar className="inline-block text-yellow-400" />
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-[80px]">
          <button className="font-poppins font-medium text-[22px] text-[#224F34] border-2 border-[#224F34] px-[55px] py-4 rounded ">
            See all <FaArrowRight className="inline-block" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bestsell;
