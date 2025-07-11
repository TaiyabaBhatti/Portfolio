import React from "react";
import Wrapper from "../components/Wrapper";
import PageTag from "../components/PageTag";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import SocialHandles from "../components/SocialHandles";
import CardOutline from "../components/CardOutline";
import ContactBox from "../components/ContactBox";
import { contactInfo } from "../data/pageData";

export default function Contact() {
  return (
    <section className="min-h-[calc(100vh-64px)] relative my-10">
      <PageTag text="Contact" />

      <Wrapper properties="mt-16">
        <div className="mt-10">
          <CardOutline properties="space-y-14" delay="400">
            {/* Heading */}

            <div className="relative w-full p-5 bg-theme-blue-dark rounded-2xl text-center text-lg max-mobile-sm:text-base text-theme-camel-light">
              <h5 className="">Get in touch with us!</h5>
              <h5 className="font-medium ">Let's talk!</h5>
              {/* Box style */}
              <div className="style-dot left-3 top-3"></div>
              <div className="style-dot top-3 right-3"></div>
              <div className="style-dot bottom-3 left-3"></div>
              <div className="style-dot bottom-3 right-3"></div>{" "}
            </div>
            {/* contact info */}
            <div className="space-y-3">
              <ContactBox
                heading="Personal Email"
                Icon={MdEmail}
                information={contactInfo.personalEmail}
              />
              <ContactBox
                heading="Student Email"
                Icon={IoIosSchool}
                information={contactInfo.studentEmail}
              />
              <ContactBox
                heading="Phone No"
                Icon={FaPhoneVolume}
                information={contactInfo.phoneNumber}
              />
            </div>

            {/* Social HAndles */}
            <div className="flex justify-end">
              <SocialHandles properties="text-gray-900" />
            </div>
          </CardOutline>
        </div>
      </Wrapper>
    </section>
  );
}
