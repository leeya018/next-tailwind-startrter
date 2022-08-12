import ProfileSection from "./profilesection";
import MessagesSection from "./messaegessection";
import NavSection from "./navsection";

export default function Tinder({}) {
  return (
    <div className="h-[100vh] bg-white flex  box-border max-h-[100vh]">
      <NavSection />
      <MessagesSection />
      <ProfileSection />
    </div>
  );
}
