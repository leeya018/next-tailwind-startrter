export default function DecisionButton({ children }) {
  return (
    <button
      className="flex flex-1 text-xs p-3
     border-2 border-gray-500 justify-center
      items-center font-bold  text-gray-600
      hover:bg-pink-500 hover:text-white"
    >
      {children}
    </button>
  );
}
