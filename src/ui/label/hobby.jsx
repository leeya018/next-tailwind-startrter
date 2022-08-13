import Label from "./";

export default function HobbyLabel({ name, url }) {
  return (
    <Label className="flex justify-center items-center border-2 border-gray-500 rounded-full px-2 py-1">
      <img src={url} alt="job icon" className="img w-6 h-6"></img>
      <span className="text-gray-500">{name}</span>
    </Label>
  );
}
