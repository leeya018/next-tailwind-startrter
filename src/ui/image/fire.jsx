// fire icon
import Image from ".";
import TinderIcon from "@/images/tinder_icon.png";

export default function FireImage({}) {
  return (
    <Image
      className1={"flex justify-center items-center"}
      className2={"w-8 h-8 rounded-full border-2 border-white p-1 hover:p-0"}
      icon={TinderIcon.src}
      alt="tinder icon"
    />
  );
}
