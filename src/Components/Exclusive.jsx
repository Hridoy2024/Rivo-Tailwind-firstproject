import React from "react";

const Exclusive = () => {
  return (
    <section id="exclusive">
      <div className="container">
        <div className="flex bg-bgGreen mt-[175px]">
          <div className="w-6/12">
            <img src="exclusive.png" alt="" />
          </div>

          <div className="w-6/12">
            <h1 className="pt-[75px] text-Green font-roboto font-bold text-[46px]">Exclusive offer</h1>
            <p className="font-poppins font-medium text-[22px] text-Green w-[589px] pt-[20px] ">
              Unlock the ultimate style upgrade with our exclusive offer Enjoy
              savings of up to 40% off on our latest New Arrivals
            </p>

            <div className="flex gap-[35px] pt-[40px]">
              <div className="w-[100px] h-[100px] bg-white flex items-center justify-center flex-col">
                <h2 className="font-poppins font-semibold text-[32px] text-Green">06</h2>
                <p className="font-poppins font-medium text-[16px] text-Green">Days</p>
              </div>

              <div className="w-[100px] h-[100px] bg-white flex items-center justify-center flex-col">
                <h2 className="font-poppins font-semibold text-[32px] text-Green">18</h2>
                <p className="font-poppins font-medium text-[16px] text-Green">Hours</p>
              </div>

              <div className="w-[100px] h-[100px] bg-white flex items-center justify-center flex-col">
                <h2 className="font-poppins font-semibold text-[32px] text-Green">48</h2>
                <p className="font-poppins font-medium text-[16px] text-Green">min</p>
              </div>
            </div>

            <button className="font-poppins font-medium text-[20px] text-white px-[70px] py-[22px] bg-Green mt-[41px] rounded-[3px]">BUY NOW</button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Exclusive;
