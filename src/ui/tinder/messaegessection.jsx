import ProfileImage from "@/ui/image/profile";
import XIcon from "@/ui/image/xicon";
import ProfileIcon from "@/images/women_profile.png";
import MessageSection from "@/ui/messagesection";
import MessageMe from "@/ui/messagesection/messageme";

export default function MesssagesSection({}) {
  return (
    <div className="border-2 border-black w-[75%]">
      {/* nav */}
      <div className="flex justify-start items-center w-[100%] border-b-2 border-gray-500 p-4">
        <ProfileImage icon={ProfileIcon.src} alt="women_profile" size={8} />
        <p className="h-9 leading-9">Yon match with Nina on 5/8/2022</p>

        <XIcon />
      </div>

      {/* messages */}
      <div className="flex flex-col h-[90%] p-2">
        <div className="overflow-y-auto scrollbar-hide">
          <MessageSection />
          <MessageSection />
          <MessageSection />
          <MessageMe />
          <MessageSection />
          <MessageMe />
          <MessageMe />
          <MessageSection />
          <MessageSection />
          <MessageSection />
          <MessageMe />
          <MessageSection />
          <MessageMe />
          <MessageMe />
          <MessageSection />
          <MessageSection />
          <MessageSection />
          <MessageMe />
          <MessageSection />
          <MessageMe />
          <MessageMe />
        </div>
      </div>
    </div>
  );
}
