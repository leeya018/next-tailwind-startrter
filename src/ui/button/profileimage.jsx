export default function ProfileImage({ children, icon }) {
  return (
    <div className="flex p-2 justify-center items-center gap-2 hover:rounded-full hover:bg-gray-600 ">
      <img
        src={icon}
        alt="profile icon "
        className="w-8 h-8 rounded-full border-2 border-white "
      />
      {children}
    </div>
  );
}
