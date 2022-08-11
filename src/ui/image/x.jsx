import Image from "./";

export default function XImage({ children = "", icon, size = 1, hover = "" }) {
  return (
    <Image
      className1={` ml-auto flex p-2 
      justify-center items-center border-2 border-gray rounded-full 
       gap-2 hover:rounded-full ${hover}`}
      className2={`w-${size} h-${size} rounded-full border-2 border-white`}
      icon={icon}
      alt="profile icon "
    >
      {children}
    </Image>
  );
}
