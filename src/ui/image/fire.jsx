// fire icon
import Image from ".";
import TinderIcon from "@/images/tinder_icon.png";

export default function FireImage({}) {
  return (
    <Image
      className1={"flex justify-center items-center"}
      className2={
        "w-8 h-8 rounded-full border-2 border-white p-1 hover:w-9 hover:h-9 hover:box-sizing transition duration-1000 ease-in-out"
      }
      icon={TinderIcon.src}
      alt="tinder icon"
    />
  );
}
