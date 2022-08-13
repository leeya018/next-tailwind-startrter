import HobbyLabel from "@/ui/label/hobby";
import PassionLabel from "ui/label/passion";
// import HobbyLabel from "@/ui/label/hobby";

const starUrl =
  "https://tinder.com/static/build/0726a6ca3b8f633c2eb8836d7f2886ff.webp";

const jobUrl =
  "https://static-assets.gotinder.com/icons/descriptors/education@1x.png";

const petUrl =
  "https://static-assets.gotinder.com/icons/descriptors/pets@1x.png";

export default function Intro({}) {
  return (
    <div className="flex flex-col gap-1 pt-2 pl-2 ">
      {/* name instro */}
      <div className="flex gap-1 items-center">
        <h1 className="font-bold text-2xl">Dulce</h1>
        <p>33</p>
        {/* <img src={starUrl} alt="women middle" className="w-6 h-6" /> */}
        <svg
          focusable="false"
          aria-hidden="false"
          role="img"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          className="Expand"
          strokeLinecap="round"
          aria-labelledby="924a17790df7a37d"
        >
          <g>
            <path
              d="M3.206 8.732l-.562.308a1.24 1.24 0 00-.615.814c-.077.345 0 .705.211.991l.382.507a1.204 1.204 0 010 1.431l-.382.528c-.427.595-.224 1.453.427 1.783l.562.309c.471.242.741.77.651 1.276l-.112.617c-.063.35.032.708.26.983.23.274.568.438.93.448l.65.022c.54.022 1.012.375 1.146.881l.18.617c.203.703 1.012 1.078 1.707.792l.607-.242a1.296 1.296 0 011.438.308l.426.485c.241.265.587.414.949.41.361-.004.703-.162.938-.432l.427-.485a1.27 1.27 0 011.414-.33l.607.242c.332.138.709.127 1.032-.03.323-.156.561-.442.652-.785l.179-.616a1.243 1.243 0 011.146-.903l.652-.044c.358-.024.69-.195.912-.472.223-.277.315-.634.254-.98l-.11-.617a1.233 1.233 0 01.628-1.299l.561-.308a1.24 1.24 0 00.616-.814c.077-.345 0-.706-.211-.992l-.382-.507a1.204 1.204 0 010-1.43l.382-.528c.426-.595.224-1.453-.427-1.785l-.562-.308a1.22 1.22 0 01-.651-1.276l.112-.617a1.203 1.203 0 00-.26-.983 1.254 1.254 0 00-.93-.448l-.651-.022a1.222 1.222 0 01-1.146-.88l-.18-.617c-.202-.705-1.01-1.078-1.706-.793l-.674.243a1.296 1.296 0 01-1.437-.308l-.427-.485a1.255 1.255 0 00-.942-.39 1.253 1.253 0 00-.923.434l-.426.484a1.27 1.27 0 01-1.415.33l-.606-.241a1.264 1.264 0 00-1.033.03 1.222 1.222 0 00-.652.784l-.18.617a1.243 1.243 0 01-1.144.902l-.652.043c-.36.024-.692.196-.914.473a1.228 1.228 0 00-.254.982l.112.616c.134.484-.112 1.013-.584 1.277z"
              fill="#1786ff"
            ></path>
            <path
              stroke="#1786ff"
              d="M16.902 8.38a1.296 1.296 0 00-.94-.38c-.34 0-.682.126-.916.38l-4.184 3.934-1.622-1.4a1.282 1.282 0 00-.917-.38c-.34 0-.682.126-.939.38-.255.252-.384.57-.384.908 0 .337.129.676.384.908l2.562 2.944c.255.252.575.379.916.379.342 0 .684-.127.918-.38l5.1-5.456c.256-.253.406-.592.406-.93 0-.336-.128-.675-.385-.908h.001z"
              fill="#fff"
            ></path>
          </g>
          <title id="924a17790df7a37d">Verified!</title>
        </svg>
      </div>
      {/* job*/}
      <div className="flex g-1 text-gray-500 ">
        <img src={jobUrl} alt="job icon" className="img w-6 h-6 "></img>
        <p>Fisioterapeuta</p>
      </div>
      <div className="flex text-gray-500 border-b-2 border-black pb-2">
        <img src={petUrl} alt="job icon" className="img w-6 h-6"></img>
        <p>10279 </p>
      </div>
      <div className="">
        <div>
          Gosto de piadas e faço o menor barquinho de papel do mundo... posso
          provar. Eu estudo a maior parte do tempo. Sou advogada e concurseira
          quase concursada. Não gosto de fascismo, preconceito, machismo,
          elitismo... Enfim, gente babaca em geral. Ps2: se você acha que pode
          me comprar com comida... Pode ser coxinha de jaca? "Minha solidão não
          depende da presença ou ausência de pessoas; ao contrário, odeio quem
          rouba minha solidão sem, em troca, me oferecer uma verdadeira
          companhia"
        </div>
        {/* hobbies */}
        <div className="flex flex-wrap gap-2 py-5">
          <HobbyLabel name={"play"} url={petUrl} />
          <HobbyLabel name={"sport"} url={petUrl} />
          <HobbyLabel name={"fish"} url={petUrl} />
          <HobbyLabel name={"drive"} url={petUrl} />
          <HobbyLabel name={"cook"} url={petUrl} />
        </div>

        <div className=" border-t-2 border-gray-500">
          <h1 className="text-gray-600 font-bold text-lg">Passions : </h1>
          <div className="flex flex-wrap gap-2 pt-5">
            <PassionLabel name="sex" />
            <PassionLabel name="sex" />
            <PassionLabel name="sex" />
            <PassionLabel name="sex" />
          </div>
        </div>
      </div>
    </div>
  );
}
