export default function Filter({ setQuery }) {
  return (
    <input
      className="w-full border border-gray-400 text-gray-800 placeholder:text-gray-800 p-2"
      type="text"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
