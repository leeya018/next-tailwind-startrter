import ProfileImage from "@/ui/image/profile";
import XImage from "@/ui/image/x";
import ProfileIcon from "@/images/women_profile.png";
import MessageSection from "@/ui/messagesection";

const x_icontUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bU_4QWt7yrqD0je6f5UMA1Wn_J01yEiIaMwmA3Vo7A&s";

export default function MesssagesSection({}) {
  return (
    <div className="border-2 border-black w-[70%]">
      {/* nav */}
      <div className="flex justify-start h-10 w-[100%] border-b-2 border-gray-500 p-8">
        <ProfileImage icon={ProfileIcon.src} alt="women_profile" size={8} />
        <p className="h-9 leading-9">Yon match with Nina on 5/8/2022</p>

        <XImage
          className="ml-auto"
          icon={x_icontUrl}
          alt="x_profile"
          size={8}
        />
      </div>

      {/* messages */}
      <div className="flex flex-col width-[100%]">
        <MessageSection />
        <MessageSection />
        <MessageSection />
        <MessageSection />
      </div>
    </div>
  );
}
