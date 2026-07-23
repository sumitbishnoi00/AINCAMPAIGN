import React from "react";
import Heading from "../common/Heading";
import { CARD_DATA } from "@/utils/helper";
import Image from "next/image";

const Privacy = () => {
  return (
    <section className="px-4 xl:pt-25 lg:pt-20 md:pt-15 sm:pt-12 pt-9">
      <div>
        <Heading
          heading={
            <>
              With Main Campaign,{" "}
              <span className="text-dark-blue">Your Privacy Matters </span>
            </>
          }
          vari={"pri"}
        />
      </div>
      <div className="max-w-[1573px] mx-auto grid xl:grid-cols-4 min-[800px]:grid-cols-3 min-[550px]:grid-cols-2 2xl:gap-13.75 xl:gap-12  md:gap-8 gap-4 xl:mt-19 lg:mt-16 md:mt-12 mt-9">
        <div className="pt-7.75 px-6.5 bg-white rounded-[22px] pb-12.25 flex items-center flex-col text-center shadow-[0px_4px_30px_0px_#00000026] hover:scale-103 cursor-pointer transition-all duration-300">
          <Image
            src={"/assets/images/webg/nosharing.webp"}
            width={80}
            height={80}
            alt="privacy"
          />
          <h2 className="thicccboi-700 text-[20px] leading-[140%] text-dark-blue mt-5.5 mb-4.5 ">
            No Sharing
          </h2>
          <p className="text-[18px] thicccboi-500 text-ship-cove max-w-74.75 w-full leading-[156%]">
            We Keep your information secure. We will never share any lead data
            to other companies.
          </p>
        </div>

        <div className="pt-7.75 px-6.5 bg-white rounded-[22px] pb-9.75 flex items-center flex-col text-center shadow-[0px_4px_30px_0px_#00000026] hover:scale-103 cursor-pointer transition-all duration-300">
          <Image
            src={"/assets/images/webg/compliant.webp"}
            width={80}
            height={80}
            alt="privacy"
          />
          <h2 className="thicccboi-700 text-[20px] leading-[115%] text-dark-blue mt-5.5 mb-2.5 ">
            GDPR, CCPA, PCI, Facebook, Google compliant
          </h2>
          <p className="text-[18px] thicccboi-500 text-ship-cove max-w-74.75 w-full leading-[156%]">
            Big Companies choose to work with us for a reason. Get a trusted
            partner that puts your security first.
          </p>
        </div>

        <div className="pt-7.75 pr-6 pl-7 bg-white rounded-[22px] pb-5.25 flex items-center flex-col text-center shadow-[0px_4px_30px_0px_#00000026] hover:scale-103 cursor-pointer transition-all duration-300">
          <Image
            src={"/assets/images/webg/security.webp"}
            width={80}
            height={80}
            alt="privacy"
          />
          <h2 className="thicccboi-700 text-[20px] leading-[140%] text-dark-blue mt-5.5 mb-4.5 ">
            Advanced Security
          </h2>
          <p className="text-[18px] thicccboi-500 text-ship-cove max-w-74.75 w-full leading-[156%]">
            Laser-targeted segmentation, Local store distribution, automation
            rules and filters, and more. We put security first.
          </p>
        </div>

        <div className="pt-7.75 pr-7.5 pl-5.5 bg-white rounded-[22px] pb-12.25 flex items-center flex-col text-center shadow-[0px_4px_30px_0px_#00000026] hover:scale-103 cursor-pointer transition-all duration-300">
          <Image
            src={"/assets/images/webg/marketing1.webp"}
            width={80}
            height={80}
            alt="privacy"
          />
          <h2 className="thicccboi-700 text-[20px] leading-[140%] text-dark-blue mt-5.5 mb-4.5 ">
            Conset-based Marketing
          </h2>
          <p className="text-[18px] thicccboi-500 text-ship-cove max-w-74.75 w-full leading-[156%]">
            Making conset-based marketing the most scalable, efficient, and
            safest method for customer acquistion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
