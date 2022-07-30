export default function MoreButton({ sortFilter, setAmount, amount }) {
  return (
    <>
      {sortFilter().length > amount && (
        <div className="width-full text-center">
          <button onClick={() => setAmount((prev) => prev + 15)}>more</button>
        </div>
      )}
    </>
  );
}
