import React from "react";

const Feedback = () => {
  return (
    <section id="feedback">
      <div className="container">
      <div className="text-area">
          <h1 className="font-roboto text-[64px] text-[#224F34] font-medium text-center pt-[114px]">
          Feedback Corner
          </h1>
        </div>

        <div className="flex pt-[109px] mb-[258px]">
            <div className="w-1/3 py-[29px] px-[19px] shadow-lg hover:bg-[#C2EFD4]">
                <img src="comma.png" alt="" />
                <h4 className="font-roboto font-semibold text-[22px] text-Green mt-[22px] mb-[30px]">Emily Wilson</h4>

                <p className="font-roboto font-medium text-[16px] text-[#6F6F6F] mt-[22px] mb-[30px]">The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!</p>
            </div>

            <div className="w-1/3 py-[29px] px-[19px] shadow-lg hover:bg-[#C2EFD4]">
                <img src="comma.png" alt="" />
                <h4 className="font-roboto font-semibold text-[22px] text-Green mt-[22px] mb-[30px]">Sarah Thompson</h4>

                <p className="font-roboto font-medium text-[16px] text-[#6F6F6F] mt-[22px] mb-[30px]">I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!</p>
            </div>

            <div className="w-1/3 py-[29px] px-[19px] shadow-lg hover:bg-[#C2EFD4]">
                <img src="comma.png" alt="" />
                <h4 className="font-roboto font-semibold text-[22px] text-Green mt-[22px] mb-[30px]">Olivia Martinez</h4>

                <p className="font-roboto font-medium text-[16px] text-[#6F6F6F] mt-[22px] mb-[30px]">I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
