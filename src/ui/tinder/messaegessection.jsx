import ProfileImage from "@/ui/image/profile";
import XImage from "@/ui/image/x";
import ProfileIcon from "@/images/women_profile.png";
import MessageSection from "@/ui/messagesection";
import MessageMe from "@/ui/messagesection/messageme";

const x_icontUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bU_4QWt7yrqD0je6f5UMA1Wn_J01yEiIaMwmA3Vo7A&s";

export default function MesssagesSection({}) {
  return (
    <div className="border-2 border-black w-[75%]">
      {/* nav */}
      <div className="flex justify-start items-center w-[100%] border-b-2 border-gray-500 p-4">
        <ProfileImage icon={ProfileIcon.src} alt="women_profile" size={8} />
        <p className="h-9 leading-9">Yon match with Nina on 5/8/2022</p>

        <svg
          focusable="false"
          aria-hidden="true"
          role="presentation"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          className="Sq(24px) P(4px) border-2 border-black rounded-full p-1 ml-auto 
          hover:rotate-90 hover:duration-300 hover:bg-gray-300 hover:ease-in-out
          "
        >
          <path
            className=""
            d="m15.44 12 4.768 4.708c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L12 15.52l-4.713 4.605c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417L8.47 12 3.874 7.271c-1.138-.976-1.138-2.44 0-3.417a1.973 1.973 0 0 1 3.25 0L12 8.421l4.713-4.567c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417L15.44 12Z"
          ></path>
        </svg>
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
