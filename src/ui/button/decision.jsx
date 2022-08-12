export default function DecisionButton({ children }) {
  return (
    <button
      className="flex flex-1 text-xs p-4
     border-2 border-gray-500 justify-center
      items-center font-bold  text-gray-600
       hover:text-white hover:bg-gradient-to-tr from-pink1 to to-pink2 "
    >
      {children}
    </button>
  );
}
