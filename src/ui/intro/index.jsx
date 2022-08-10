const starUrl =
  "https://tinder.com/static/build/0726a6ca3b8f633c2eb8836d7f2886ff.webp";

const jobUrl =
  "https://static-assets.gotinder.com/icons/descriptors/education@1x.png";

const petUrl =
  "https://static-assets.gotinder.com/icons/descriptors/pets@1x.png";

export default function Intro({}) {
  return (
    <div className="flex flex-col gap-1 pt-2 pl-2">
      {/* name instro */}
      <div className="flex gap-1 items-center">
        <h1 className="font-bold text-2xl">Dulce</h1>
        <p>33</p>
        <img src={starUrl} alt="women middle" className="w-6 h-6" />
      </div>
      {/* job*/}
      <div className="flex g-1 text-gray-500">
        <img src={jobUrl} alt="job icon" className="img w-6 h-6 "></img>
        <p>Fisioterapeuta</p>
      </div>
      <div className="flex text-gray-500">
        <img src={petUrl} alt="job icon" className="img w-6 h-6"></img>
        <p>10279 </p>
      </div>
    </div>
  );
}
