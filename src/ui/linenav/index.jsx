export default function LineNav({}) {
  return (
    <div
      className="flex justify-start items-center gap-4 p-2
    font-bold "
    >
      <p className="box-border p-1  w-[100px] h-[34px] hover:border-b-2 hover:border-pink-500">
        Matches
      </p>
      <p className="box-border p-1  w-[100px] h-[34px] hover:border-b-2 hover:border-pink-500">
        Messages
      </p>
    </div>
  );
}
