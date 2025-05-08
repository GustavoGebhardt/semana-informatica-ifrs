"use client"

import { AlignJustify, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  page: "inicio" | "programacao" | "concurso-tecninco" | "hackathon";
}

export default function Sidebar({ page }: SidebarProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (openMenu) {
      timeout = setTimeout(() => setShowLinks(true), 300);
    } else {
      setShowLinks(false);
    }
    return () => clearTimeout(timeout);
  }, [openMenu]);

  return (
    <div
      className={`${openMenu ? "w-80" : "w-12"} h-full bg-[#313131] fixed transition-all duration-500 ease-in-out`}>
      <div className="w-full pt-10 flex flex-col items-end">
        <button onClick={() => setOpenMenu(!openMenu)} className="pr-2 pb-2">
          {openMenu ? ( <X width={30} height={30} color="white" /> ) : ( <AlignJustify width={30} height={30} color="white" /> )}
        </button>
      </div>
      <div className={`w-full flex flex-col items-start gap-2 transition-all duration-200 ease-in-out ${showLinks ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <Link
          href={"/"}
          className={`w-fit h-full`}
        >
          <div className="w-full h-full pl-4 pr-4 flex items-center justify-center gap-1">
            <Image alt="htmlincon" width={25} height={25} src="/icon.png" />
            <div className="flex p-1">
              <p className={`text-[#C7C7C7] text-xl sm:text-md ${page === "inicio" && "font-semibold text-[#ffffff]"}`}>início</p>
              <p className={`text-[#505050] text-xl sm:text-md ${page === "inicio" && "font-semibold"}`}>.html</p>
            </div>
          </div>
        </Link>
        <Link
          href={"/programacao"}
          className={`w-fit h-full`}
        >
          <div className="w-full h-full pl-4 pr-4 flex items-center justify-center gap-1">
            <Image alt="htmlincon" width={25} height={25} src="/icon.png" />
            <div className="flex p-1">
              <p className={`text-[#C7C7C7] text-xl sm:text-md ${page === "programacao" && "font-semibold text-[#ffffff]"}`}>programação</p>
              <p className={`text-[#505050] text-xl sm:text-md ${page === "programacao" && "font-semibold"}`}>.html</p>
            </div>
          </div>
        </Link>
        <Link
          href={"/concurso-tecnico"}
          className={`w-fit h-full`}
        >
          <div className="w-full h-full pl-4 pr-4 flex items-center justify-center gap-1">
            <Image alt="htmlincon" width={25} height={25} src="/icon.png" />
            <div className="flex p-1">
              <p className={`text-[#C7C7C7] text-xl sm:text-md ${page === "concurso-tecninco" && "font-semibold text-[#ffffff]"}`}>concurso-técnico</p>
              <p className={`text-[#505050] text-xl sm:text-md ${page === "concurso-tecninco" && "font-semibold"}`}>.html</p>
            </div>
          </div>
        </Link>
        <Link
          href={"/hackathon"}
          className={`w-fit h-full`}
        >
          <div className="w-full h-full pl-4 pr-4 flex items-center justify-center gap-1">
            <Image alt="htmlincon" width={25} height={25} src="/icon.png" />
            <div className="flex p-1">
              <p className={`text-[#C7C7C7] text-xl sm:text-md ${page === "hackathon" && "font-semibold text-[#ffffff]"}`}>hackathon</p>
              <p className={`text-[#505050] text-xl sm:text-md ${page === "hackathon" && "font-semibold"}`}>.html</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}