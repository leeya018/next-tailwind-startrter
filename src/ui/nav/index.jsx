import TinderIcon from "@/images/tinder_icon.png";
import ProfileIcon from "@/images/profile.png";
import ProfileImage from "@/ui/button/profileimage";
import Button from "@/ui/button";

export default function Nav({}) {
  return (
    <div className="h-20 p-2 bg-black w-[100%] flex justify-between items-center">
      <ProfileImage icon={ProfileIcon.src}>
        <p className="text-white font-bold">Lee</p>
      </ProfileImage>

      <div className="flex justify-around items-center gap-2">
        <Button icon={TinderIcon.src} />
        <Button icon={TinderIcon.src} />
        <Button icon={TinderIcon.src} />
      </div>
    </div>
  );
}
