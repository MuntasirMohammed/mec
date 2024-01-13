import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const tutorialData = [
  {
    gif: "https://storage.googleapis.com/tempo-public-images/Preview%20Mode-new.gif",
    title: "Welcome to Tempo",
    subtitle: "This tutorial will teach you how to visually edit react code",
    customJSX: (
      <div className="flex items-center gap-x-9 my-5 justify-start h-20">

      </div>
    ),
  },
  {
    gif: "https://storage.googleapis.com/tempo-public-images/styling-panel.gif",
    title: "Edit Styles",
    subtitle: "You can edit tailwind code just like a design tool",
    customJSX: (
      <div className="flex items-center gap-x-9 my-5 justify-start">
        <div>
        <p className="text-md text-gray-300 text-2xl">Step 1: Select edit mode in top-right to edit styles</p>
        <p className="text-md text-gray-300 text-2xl">Step 2: Change the color of this div ----------></p></div>
        <div className="w-20 h-20 bg-orange-400"></div>
      </div>
    ),
  },
  {
    gif: "https://storage.googleapis.com/tempo-public-images/ai-prompt.gif",
    title: "Generate With AI",
    subtitle: "You can generate UIs using text prompts or images",
    customJSX: (
          <div className="flex items-center gap-x-9 my-5 justify-start h-20">
          <div className="flex flex-col gap-x-9">
          <p className="text-md text-gray-300 text-2xl">Step 1: Open AI Toolbar</p>
          <p className="text-md text-gray-300 text-2xl">Step 2: Enter prompt or upload image (sketches work too)</p>
          </div>
        </div>
    ),
  },
  {
    gif: "https://storage.googleapis.com/tempo-public-images/checkout-code.gif",
    title: "Checkout The Code",
    subtitle: "You can view and edit code anytime",
    customJSX: (
      <div className="flex items-center gap-x-9 my-5 justify-start h-20">
        <div className="flex flex-col gap-x-9">
        <p className="text-md text-gray-300 text-2xl">Step 1: Right-click any element</p>
        <p className="text-md text-gray-300 text-2xl">Step 2: Select "Open In Editor"</p>
        </div>
      </div>
    ),
  },
  {
    gif: "https://storage.googleapis.com/tempo-public-images/components-marketplace.gif",
    title: "Reuse Components From The Marketplace",
    subtitle: "Drag and drop any component from the community",
    customJSX: (
      <div className="flex items-center gap-x-9 my-5 justify-start h-20">
      <div className="flex flex-col gap-x-9">
      <p className="text-md text-gray-300 text-2xl">Step 1: Open the components toolbar</p>
      <p className="text-md text-gray-300 text-2xl">Step 2: Drag any component onto the canvas</p>
      </div>
    </div>
    ),
  },
  {
    gif: "https://storage.googleapis.com/tempo-public-images/push-git.gif",
    title: "Push To Github",
    subtitle: "Create a git repository and publish your code",
    customJSX: (
      <div className="flex items-center gap-x-9 my-5 justify-start h-20">
      <div className="flex flex-col gap-x-9">
      <p className="text-md text-gray-300 text-2xl">Step 1: Open the code editor</p>
      <p className="text-md text-gray-300 text-2xl">Step 2: Select the version control tab</p>
      <p className="text-md text-gray-300 text-2xl">Step 3: Click "Create repository"</p>
      </div>
    </div>
    ),
  },
  {
    gif: "https://media.giphy.com/media/3oz9ZE2Oo9zRC/giphy.gif",
    title: "That's it!",
    subtitle: "Time to start building your own UIs :)",
    customJSX: (
      <div className="flex items-center gap-x-9 my-5 justify-start h-20">
        <div className="flex flex-col gap-x-9">
          <p className="text-2xl text-gray-300">Questions? Reach us at founders@tempolabs.ai</p>
        </div>
      </div>
    ),
  },
];

function Tutorial() {
  const [currentGif, setCurrentGif] = useState(0);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const prevGif = () =>
    setCurrentGif(currentGif > 0 ? currentGif - 1 : tutorialData.length - 1);
  const nextGif = () =>
    setCurrentGif(currentGif < tutorialData.length - 1 ? currentGif + 1 : 0);

  return (
    <div
      className="flex dark:bg-black w-screen bg-[165E85] flex-row-reverse gap-x-2 content-start flex-nowrap h-screen justify-center items-start">
      {" "}
      <h1
          className="text-5xl leading-tight font-black flex text-yellow-300 tracking-widest text-center flex-col-reverse justify-start items-center flex-wrap content-end">


  InclusiWork</h1>
      <h3
        className="flex flex-col-reverse justify-start items-center gap-y-0 font-bold text-4xl tracking-normal leading-9 py-9">Empowering Diversity, Fostering Inclusion, Shaping Careers.</h3></div>
  );
}

export default Tutorial;
