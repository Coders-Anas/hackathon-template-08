import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const InputField = ({ label, type }) => {
  return (
    <div className="mt-2">
      <label htmlFor={label} className="text-lg py-4 block">
        {label}
      </label>
      <input
        type={type}
        id={label}
        className="border border-gray-500 p-6 text-lg rounded-md w-full"
        placeholder="abc"
      />
    </div>
  );
};

const InfoCard = ({ icon: Icon, size, title, description1, description2 }) => {
  return (
    <div className="flex px-2 mb-12 space-x-6">
      <Icon size={size} />
      <div className="">
        <h2 className="text-2xl text-gray-800 font-semibold">{title}</h2>
        <p className="text-base text-gray-500 ">{description1}</p>
        <p className="text-base text-gray-500 ">{description2}</p>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="">
      <Navbar />

      <div className="py-20 max-w-4xl w-full mx-auto">
        <h1 className="py-4 text-4xl text-gray-800 font-semibold text-center">
          Get In Touch With Us
        </h1>
        <p className="max-w-2xl mx-auto text-base text-gray-500 text-center tracking-wider">
          For More Information About Our Product & Service. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate.
        </p>

        <div className="flex py-10 space-x-16">
          <div className="w-96 h-96 ">
            <InfoCard
              icon={FaLocationDot}
              size={35}
              title={"Address"}
              description1={
                "236 5th SE Avenue, New York, NY10000, United States"
              }
            />
            <InfoCard
              icon={FaPhoneAlt}
              size={22}
              title={"Phone"}
              description1={"Mobile: +(84) 546-6789"}
              description2={"Hotline: +(84) 546-6789"}
            />
            <InfoCard
              icon={IoTime}
              size={30}
              title={"Working Time"}
              description1={"Monday-Friday: 9:00 - 22:00"}
              description2={"Saturday-Sunday: 9:00 - 21:00"}
            />
          </div>
          <div className="w-full">
            <InputField label={"Your Name"} type={"text"} />
            <InputField label={"Email Address"} type={"email"} />
            <InputField label={"Subject"} type={"text"} />
            <InputField label={"Message"} type={"text"} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
