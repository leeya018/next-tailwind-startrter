import womenMiddle from "@/images/women_middle.png";
import Intro from "@/ui/intro";
import DecisionButton from "@/ui/button/decision";
import Carusel from "@/ui/carusel";

export default function ProfileSection({}) {
  return (
    <div
      className="border-2 relative border-black w-[30%] flex flex-col
  "
    >
      <div className="overflow-y-auto scrollbar-hide   h-[90vh]">
        <Carusel />
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
