export default function TableBody({ sortFilter, columns, amount }) {
  return (
    <>
      {sortFilter()
        .map((row) => (
          <tr>
            {columns.map((col) => (
              <td className="border-b border-gray-200 bg-gray-100 even:bg-gray-50 p-1 font-thin">
                {row[col]}
              </td>
            ))}
          </tr>
        ))
        .slice(0, amount)}
    </>
  );
}
