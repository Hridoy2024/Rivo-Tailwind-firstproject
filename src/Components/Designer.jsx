import React from "react";

const Designer = () => {
  return (
    <section id="designer">
        <div className="container">
      <div className="text-area">
          <h1 className="font-roboto text-[64px] text-[#224F34] font-medium text-center pt-[114px]">
          Designer Clothes For You
          </h1>

          <p className="pt-[37px] text-center text-[#224F34] text-[22px] font-medium mb-[80px]"> 
          Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!
          </p>
        </div>

        <div className="flex mb-[249px]">
          <div className="w-1/3">
            <img src="/Best1.png" alt="pic" />
            <p className="font-poppins font-semibold text-[30px] text-[#373737] text-center mt-[51px]">
              Regular Fit Long Sleeve Top
            </p>

            <p className="font-poppins font-medium text-[22px]  text-[#373737] w-[420px] text-center" >Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.</p>
           
          </div> 

          <div className="w-1/3">
            <img src="/pic2.1.png" alt="" />
            <p className="font-poppins font-semibold text-[30px] text-[#373737] text-center mt-[51px]">
              Black Crop Tailored Jacket
            </p>

            <p className="font-poppins font-medium text-[22px] text-[#373737] w-[420px] text-center">Explore a stunning range of designer dresses, including evening gowns and chic day dresses.</p>
           
          </div>

          <div className="w-1/3">
            <img src="/pic2.2.png" alt="" />
            <p className="font-poppins font-semibold text-[30px] text-[#373737] text-center mt-[51px]">
              Textured Sunset Shirt
            </p>

            <p className="font-poppins font-medium text-[22px] text-[#373737] text-center w-[420px]">Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.</p>
            
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Designer;
