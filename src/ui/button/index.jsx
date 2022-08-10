// fire icon
export default function Button({ icon }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={icon}
        alt="tinder icon"
        className="w-8 h-8 rounded-full border-2 border-white p-1
        hover:p-0"
      />
    </div>
  );
}
