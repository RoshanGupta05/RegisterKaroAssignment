import React from "react";

function Why() {
  return (
    <div>
      {/* Top Section with Title and Description */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-4 pt-16 pb-8 bg-white-100">
        <div className="text-left md:w-1/2">
          <div className="text-secondary text-xs uppercase tracking-widest pb-4">
            Why RegisterKaro.in
          </div>
          <h2 className="text-4xl font-bold flex pb-4">
            Why Choose Register<div className="text-secondary pl-1"> Karo</div>
          </h2>
          <p className="mt-2 mb-8">
            It is with consistent services and results that build trust with the people and that in turn help us to serve the business better.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="flex md:w-1/2 justify-around mt-8 md:mt-0">
          <BenefitCard
            bgColor="#FEF3EF"
            iconColor="#F45C20"
            title="Confidential & Safe"
            description="All your private information is safe with us"
          />
          <BenefitCard
            bgColor="#f1fbf3"
            iconColor="#3DCD5C"
            title="No Hidden Fee"
            description="Everything is put before you with no hidden charges or conditions"
          />
        </div>
      </div>

      {/* Bottom Section with Additional Benefits */}
      <div className="flex flex-row w-full p-4 justify-end">
        <BenefitCard
          bgColor="#EDF3FF"
          iconColor="#2F6AE1"
          title="Guaranteed Satisfaction"
          description="All your private information is safe with us"
        />
        <BenefitCard
          bgColor="#fbf1fb"
          iconColor="#D5414F"
          title="Expert CA/CS Assistance"
          description="Everything is put before you with no hidden charges or conditions"
        />
        <BenefitCard
          bgColor="#f1fbf3"
          iconColor="#F45C20"
          title="Confidential & Safe"
          description="Everything is put before you with no hidden charges or conditions"
        />
      </div>
    </div>
  );
}

// Reusable Benefit Card Component
function BenefitCard({ bgColor, iconColor, title, description }) {
  return (
    <div
      className={`bg-[${bgColor}] p-5 w-full max-w-[352px] border-solid border-2 mx-auto rounded-md cursor-pointer hover:shadow-2xl transition flex flex-col items-center text-center`}
    >
      <div className="mb-8">
        <svg
          width="38"
          height="41"
          viewBox="0 0 38 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.3763 6.5625C36.7825 7.1875 37.72 8.51562 37.72 10C37.72 27.3438 27.095 36.9531 20.3763 39.7656C19.4388 40.1562 18.4231 40.1562 17.4856 39.7656C9.12625 36.25 0.220001 25.5469 0.220001 10C0.220001 8.51562 1.07938 7.1875 2.48563 6.5625L17.4856 0.3125C17.9544 0.15625 18.4231 0.078125 18.97 0.078125C19.4388 0.078125 19.9075 0.15625 20.3763 0.3125L35.3763 6.5625ZM18.97 34.9219C26.2356 31.25 32.4075 22.6562 32.6419 10.8594L18.97 5.15625V34.9219Z"
            fill={iconColor}
          />
        </svg>
      </div>
      <div className="text-lg font-bold max-w-[260px]">{title}</div>
      <div className="text-base p-3">{description}</div>
    </div>
  );
}

export default Why;
