import Image from "next/image";
import Link from "next/link";

interface MenuProps {
  page: "inicio" | "programacao" | "concurso-tecninco" | "hackathon"
}

export default function Menu({ page }: MenuProps){
  return(
    <div className="w-full h-18 pl-12 pt-8 bg-[#2B2B2B] flex">
      <Link href={"/"} className={`w-fit h-full ${page == "inicio" ? "bg-[#212121]" :  "bg-[#373737]"}`}>
        <div className="w-full h-full pl-4 pr-4 flex items-center justify-center gap-1">
          <Image alt="htmlincon" width={20} height={20} src={"/icon.png"} />
          <div className="flex">
            <p className="text-[#C7C7C7]">início</p>
            <p className="text-[#505050]">.html</p>
          </div>
        </div>
      </Link>
      <Link href={"/programacao"} className={`w-fit h-full ${page == "programacao" ? "bg-[#212121]" :  "bg-[#373737]"}`}>
        <div className="w-full h-full pl-4 pr-4 flex items-center justify-center gap-1">
          <Image alt="htmlincon" width={20} height={20} src={"/icon.png"} />
          <div className="flex">
            <p className="text-[#C7C7C7]">programação</p>
            <p className="text-[#505050]">.html</p>
          </div>
        </div>
      </Link>
      <Link href={"/concurso-tecnico"} className={`w-fit h-full ${page == "concurso-tecninco" ? "bg-[#212121]" :  "bg-[#373737]"}`}>
        <div className="w-full h-full pl-4 pr-4 flex items-center justify-center gap-1">
          <Image alt="htmlincon" width={20} height={20} src={"/icon.png"} />
          <div className="flex">
            <p className="text-[#C7C7C7]">concurso-técnico</p>
            <p className="text-[#505050]">.html</p>
          </div>
        </div>
      </Link>
      <Link href={"/hackathon"} className={`w-fit h-full ${page == "hackathon" ? "bg-[#212121]" :  "bg-[#373737]"}`}>
        <div className="w-full h-full pl-4 pr-4 flex items-center justify-center gap-1">
          <Image alt="htmlincon" width={20} height={20} src={"/icon.png"} />
          <div className="flex">
            <p className="text-[#C7C7C7]">hackathon</p>
            <p className="text-[#505050]">.html</p>
          </div>
        </div>
      </Link>
    </div>
  );
}