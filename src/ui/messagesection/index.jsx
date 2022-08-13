import ProfileIcon from "@/images/women_profile.png";
import ProfileImage from "@/ui/image/profile";

export default function MessageSection({}) {
  return (
    <div className="flex flex-start items-end gap-2 ">
      <ProfileImage icon={ProfileIcon.src} alt="women_profile" size={16} />
      <div className="group flex items-center gap-1">
        <div className="px-4 py-2 my-2 bg-blue-500 text-white rounded-tl-lg rounded-tr-lg rounded-br-lg ">
          tnaoritne
        </div>
        <span className="hidden text-black group-hover:inline">5:49 PM</span>
      </div>
    </div>
  );
}
