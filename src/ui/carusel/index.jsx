import { useState } from "react";

const womenUrl1 =
  "https://images-ssl.gotinder.com/62e879006dc4b201002644aa/640x800_75_11027940-91a6-41a5-a9a3-43d4274b6bfb.webp";
const womenUrl2 =
  "https://images-ssl.gotinder.com/62e754d56dc4b2010025e0a3/640x800_75_b2ef1cde-8aa9-44a8-87fd-4e8919af30db.webp";
const womenUrl3 =
  "https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/70714059_594124224451605_9132578838931165263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ecuwHXOxcE8AX_bKN9l&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-uaCnNwo6yCd9XCgV0NTLFJrWAGDB1VlLjrXEFyF3_TQ&oe=62FBF4BA";
const womenUrl4 =
  "https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/80055641_158511748765591_3584214904823147401_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=wqAQdTeEkM4AX_k6wC4&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9whxFSUwl4WkT8SVMU9Lcj7Jo1h0R1hSwbN-Et8EJsbA&oe=62FA655E";

const urls = [womenUrl1, womenUrl2, womenUrl3, womenUrl4];

export default function Carusel({}) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    if (count == urls.length - 1) return;
    setCount((prev) => prev + 1);
  }

  function decreaseCount() {
    if (count == 0) return;
    setCount((prev) => prev - 1);
  }

  function getElements() {
    return (
      <div className="absolute h-4 w-[100%] flex gap-2 justify-around top-1">
        {urls.map((item, ind) => {
          return (
            <div
              key={ind}
              className={`bg-gray-400 flex-1 rounded-full ${
                ind == count ? "h-2" : "h-1"
              }`}
            ></div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="relative h-[60%]">
      {getElements()}

      <span
        className={`absolute text-4xl font-bold p-2 top-[50%] text-white ${
          count == 0 ? "hidden" : ""
        }`}
        onClick={decreaseCount}
      >
        {"<"}
      </span>
      <span
        className={`absolute text-4xl font-bold top-[50%] right-1 text-white  p-2 ${
          count == 3 ? "hidden" : ""
        }`}
        onClick={increaseCount}
      >
        {">"}
      </span>
      <img src={urls[count]} alt="women middle" className="h-[100%] w-full" />
    </div>
  );
}
