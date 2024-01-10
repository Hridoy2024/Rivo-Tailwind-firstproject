import React from "react";

const Banner = () => {
  return (
    <>
      <section id="banner" className="bg-bgGreen pt-[128px] pb-[166px]">
        <div className="container">
          <div className="flex">
            <div className="w-6/12">
              <div className="text-area">
                <h1 className="font-rufina text-[86px] font-bold text-[#224F34] mb-[27px] ">
                  Discover and Find Your Own Fashion!
                </h1>

                <p className="font-poppins text-[24px] font-medium text-[#267D49] leading-[220%] w-[565px]">
                  Explore our curated collection of stylish clothing and
                  accessories tailored to your unique taste.
                </p>

                <button className="shadow-3xl font-poppins text-[20px] font-medium uppercase text-white bg-[#224F34] py-[22px] px-[60px] mt-[44px]">
                  Explore Now
                </button>
              </div>
            </div>

            <div className="w-6/12">
              <img className="ms-auto" src="Banner.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
