// [meta] name: LandingPageTwo
// [meta] description:

import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";

const LandingPageTwo = () => {
  return (
    <div className="dark:bg-black min-h-screen flex flex-col items-center justify-center bg-blue-950">
      <div className="text-center space-y-6 border border-[black]">
        <h1 className="text-5xl font-bold text-yellow-500 dark:text-yellow-300 flex justify-center">
          InclusiWork
        </h1>
        <p className="text-xl dark:text-gray-300 text-[white] border border-[black] flex items-stretch justify-center">
          Empowering Diversity, Fostering Inclusion, Shaping Careers.
        </p>
        <p className="text-md dark:text-gray-400 text-white flex justify-center items-center">
          Our innovative tool is dedicated to fostering inclusivity in
          employment by prioritizing job opportunities for individuals with
          accessibility needs.
        </p>
        <div className="flex space-x-4 justify-center">
          <Button
            variant="solid"
            className="text-black border border-[white] hover:bg-[white] bg-[#eab308] w-24"
          >
            Login
          </Button>
          <Button variant="outline" className="bg-[#eab308] w-32">
            Registration
          </Button>
        </div>
      </div>{" "}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between"></div>
    </div>
  );
};

export default LandingPageTwo;
