import React from "react";
import Wrapper from "../components/Wrapper";
import PageTag from "../components/PageTag";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import SocialHandles from "../components/SocialHandles";
import CardTab from "../components/CardTab";
import CardOutline from "../components/CardOutline";

export default function Contact() {
  return (
    <section className="min-h-[calc(100vh-64px)] relative mt-10">
      <PageTag text="Contact Details" />

      <Wrapper properties="mt-16">
        <div className="mt-10">
          <CardOutline>
            {/* contact info */}
            <div className="space-y-3">
              <div className="flex flex-row items-center justify-between gap-5">
                <div className="border-r-2 pr-5 flex flex-row items-center gap-x-1.5">
                  {/* sub-Heading */}
                  <MdEmail className="text-2xl text-gray-900" />
                </div>
                <CardTab text="taiyababhattii@gmail.com" properties="w-full" />
              </div>

              <div className="flex flex-row items-center justify-between gap-5">
                <div className="border-r-2 pr-5 flex flex-row items-center gap-x-1.5">
                  {/* sub-Heading */}
                  <IoIosSchool className="text-2xl text-gray-900" />
                </div>
                <CardTab
                  text="22sw051@students.muet.edu.pk"
                  properties="w-full"
                />
              </div>
              <div className="flex flex-row items-center justify-between gap-5">
                <div className="border-r-2 pr-5 flex flex-row items-center gap-x-1.5">
                  {/* sub-Heading */}
                  <FaPhoneVolume className="text-2xl text-gray-900" />
                </div>
                <CardTab text="+92 3072360542" properties="w-full" />
              </div>
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
