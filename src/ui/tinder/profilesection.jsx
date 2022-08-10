import womenMiddle from "@/images/women_middle.png";
import Intro from "@/ui/intro";

export default function ProfileSection({}) {
  return (
    <div className="border-2 border-black w-[30%] flex flex-col">
      <img src={womenMiddle.src} alt="women middle" className="h-[70%]" />

      {/* into */}
      <Intro />
    </div>
  );
}
