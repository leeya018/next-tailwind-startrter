import ProfileImage from "@/ui/image/profile";
import FireImage from "@/ui/image/fire";
import ProfileIcon from "@/images/profile.png";

export default function Nav({}) {
  return (
    <div className="h-20 p- 2 bg-black w-[100%] flex justify-between items-center">
      <ProfileImage
        icon={ProfileIcon.src}
        size={8}
        hover={" hover:bg-gray-600 "}
      >
        <p className="text-white font-bold">Lee</p>
      </ProfileImage>

      <div className="flex justify-around items-center gap-2">
        <FireImage icon={FireImage.src} />
        <FireImage icon={FireImage.src} />
        <FireImage icon={FireImage.src} />
      </div>
    </div>
  );
}
