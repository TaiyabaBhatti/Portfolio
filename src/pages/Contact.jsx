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
      <PageTag text="Contact Details" />

      <Wrapper properties="mt-16">
        <div className="mt-10">
          <CardOutline>
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

            <div className="mt-10 space-y-4">
              <h4 className="font-medium text-gray-900">Let's connect here!</h4>
              <SocialHandles properties="text-gray-900" />
            </div>
          </CardOutline>
        </div>
      </Wrapper>
    </section>
  );
}
