import Label from "./";

export default function PassionLabel({ name }) {
  return (
    <Label className="flex justify-center items-center border-2 border-gray-500 rounded-full px-2 py-1">
      <span className="text-gray-500">{name}</span>
    </Label>
  );
}
