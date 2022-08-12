import womenMiddle from "@/images/women_middle.png";
import Intro from "@/ui/intro";
import DecisionButton from "@/ui/button/decision";

export default function ProfileSection({}) {
  return (
    <div
      className="border-2 relative border-black w-[30%] flex flex-col
  "
    >
      <div className="overflow-y-auto scrollbar-hide   h-[90vh]">
        <img src={womenMiddle.src} alt="women middle" className="h-[70%]" />

        {/* into */}
        <Intro />
      </div>
      {/* bottom buttons */}
      <div className="flex absolute bottom-0 right-0 left-0">
        <DecisionButton>UNMATCH</DecisionButton>
        <DecisionButton>REPORT</DecisionButton>
      </div>
    </div>
  );
}
