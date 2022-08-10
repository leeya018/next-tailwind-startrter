import Nav from "@/ui/nav";
import LineNav from "@/ui/linenav";
import Messages from "@/ui/messages";

export default function NavSection({}) {
  return (
    <div className="border-2 border-black w-[30%]">
      <div className="flex flex-col">
        {/* nav */}
        <Nav />
        {/* nav-line */}
        <LineNav />
        {/* messages */}
        <Messages />
      </div>
    </div>
  );
}
