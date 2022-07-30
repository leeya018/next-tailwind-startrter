import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

export default function TableHead({ columns, sortedBy, setSortedBy }) {
  return (
    <tr>
      {columns.map((column) => (
        <th
          className="bg-gray-300 p-2 bodrer-b border-gray-400 next-left"
          onClick={() =>
            setSortedBy((prev) => ({
              column,
              asc: !prev.asc,
            }))
          }
        >
          <div className="flex items-center gap-2">
            <div>{column}</div>
            <div>
              {column == sortedBy.column &&
                (sortedBy.asc ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                ))}
            </div>
          </div>
        </th>
      ))}
    </tr>
  );
}
