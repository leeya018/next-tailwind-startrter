import { useState } from "react";
import Filter from "@/ui/filter";
import TableHead from "@/ui/tablehead";
import TableBody from "@/ui/tablebody";
import MoreButton from "@/ui/morebutton";
import icon from "@/images/111.png";
import icon_women from "@/images/women.jpg";
import SideBarIcon from "ui/sidebaricon";

import { FaFire, FaPoo } from "react-icons/fa";
import { BsGearFill, BsPlus, BsFillLightningFill } from "react-icons/bs";

export default function Datatable({ rows = [] }) {
  let columns = Object.keys(rows[0]);
  console.dir(icon);
  const [sortedBy, setSortedBy] = useState({
    column: columns[0],
    asc: false,
  });

  const [query, setQuery] = useState("");
  const [amount, setAmount] = useState(15);

  function sort(rows) {
    const { column, asc } = sortedBy;
    return rows.sort((a, b) => {
      if (a[column].toString() > b[column].toString()) {
        return asc ? 1 : -1;
      }
      if (b[column].toString() > a[column].toString()) {
        return asc ? -1 : 1;
      }
      return 0;
    });
  }

  function filter(rows) {
    return rows.filter((row) => {
      return columns.some((col) =>
        row[col].toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  const sortFilter = () => filter(sort(rows));
  return (
    <div className="flex flex-col gap-2 justify-center">
      <div
        className="fixed top-0 left-0 h-screen w-16 flex flex-col
        bg-white dark:bg-gray-900 shadow-lg"
      >
        <SideBarIcon icon={<FaFire size="28" />} />
        <SideBarIcon icon={<BsPlus size="28" />} />
        <SideBarIcon icon={<BsFillLightningFill size="28" />} />
        <SideBarIcon icon={<BsGearFill size="28" />} />
        <SideBarIcon icon={<FaPoo size="28" />} />
      </div>
      <div className="bg-blue_site opacity-99 text-white font-semibold">
        blue
      </div>
      <div className="bg-black_site text-white font-semibold">black</div>
      <div className="bg-gray_site text-white font-semibold">gray</div>
      <div className="bg-white_site text-gray_site font-semibold">white</div>

      <div className="bg-blue-light ">holla</div>
      <div className="bg-blue-light ">holla</div>
      <div className="bg-blue-light ">holla</div>
      <div className="bg-blue-light ">holla</div>

      <div className="backdrop-sepia-[25]">tras</div>
      <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-purple-400 p-8">
        <table class="table-auto border-separate border border-slate-400">
          <thead>
            <tr>
              <th class="px-4 py-2 text-emerald-400">Title</th>
              <th class="px-4 py-2 text-emerald-600">Author</th>
              <th class="px-4 py-2 text-emerald-600">Views</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-emerald-600 px-4 py-2 text-emerald-500 font-bold">
                Intro to CSS
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                Adam
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                858
              </td>
            </tr>
            <tr class="bg-emerald-200">
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                A Long and Winding Tour of the History of UI Frameworks and
                Tools and the Impact on Design
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                Adam
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                112
              </td>
            </tr>
            <tr>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                Intro to JavaScript
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                Chris
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                1,280
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex gap-4 md:flex-col lg:flex-col-reverse">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <div className="flex flex-col">
        <div className="hidden">01</div>
        <div className="hidden">hidden data</div>
        <div>02</div>
        <div>03</div>
      </div>

      <div className="flex">
        <div className="flex-1">01</div>
        <div className="contents">
          <div className="flex-1">02</div>
          <div className="flex-1">03</div>
        </div>
        <div className="flex-1">04</div>
      </div>
      {/* grid */}
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        <div className="inline-grid grid-cols-3 gap-4">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </div>
        <div className="inline-grid grid-cols-3 gap-4">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </div>
      </div>

      <div className="text-bold text-center font-bold font-purple-700">
        trstrs
      </div>
      <div className="text-bold text-center font-bold text-red-400 border border-green-600 ring-8 rounded-full w-10 mx-auto py-5 px-10">
        trstrs
      </div>
      <div className="text-bold text-center font-bold font-purple-700">
        trstrs
      </div>

      <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm-shrink-0"
          src={icon_women.src}
          alt="Woman's Face"
        />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">Erin Lindford</p>
            <p class="text-slate-500 font-medium">Product Engineer</p>
          </div>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:bg-purple focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>

      <div class="flex items-center space-x-4 shadow-xl rounded-xl p-6 max-w-sm bg-white mx-auto">
        <div class="shrink-0">
          <img class="h-12 w-12" src={icon.src} alt="ss Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div>

      <h1>srton</h1>
      <ul className="list-disc list-inside">
        <li>tnsori</li>
        <li>tnsori</li>
        <li>tnsori</li>
      </ul>
      <button>push me </button>
      <Filter setQuery={setQuery} />
      <table className="w-full border border-gray-600">
        <TableHead
          columns={columns}
          sortedBy={sortedBy}
          setSortedBy={setSortedBy}
        />
        <TableBody sortFilter={sortFilter} columns={columns} amount={amount} />
      </table>
      <MoreButton
        sortFilter={sortFilter}
        amount={amount}
        setAmount={setAmount}
      />
    </div>
  );
}
