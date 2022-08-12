import womenIcon from "@/images/women_profile.png";

export default function Message({}) {
  return (
    <div
      className="grid grid-cols-3 p-3 hover:shadow-lg
     hover:border-r-4 hover:border-pink1"
    >
      <img
        src={womenIcon.src}
        alt=""
        className="w-16 h-16 border-1 rounded-full row-span-2 ml-4 "
      />
      <h2 className="font-bold text-xl col-span-2">Melica</h2>
      <p className="col-span-2 text-gray-500 truncate ">
        como estas amigo.como estas amigo.como estas amigo.como estas amigo.como
        estas amigo.como estas amigo.como estas amigo.como estas amigo.
      </p>
    </div>
  );
}
