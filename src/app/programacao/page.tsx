import Header from "@/components/local/header";
import Menu from "@/components/local/menu";
import Sidebar from "@/components/local/sidebar";
import { ExternalLink, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Programacao() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Sidebar page={"programacao"} />
      <Menu page={"programacao"} />
      <div className="w-full pl-12 flex flex-col items-center justify-center gap-8 pt-20">
        <Image alt="logo" width={300} height={300} src={"/logo-horizontal.png"} className="w-56 h-auto object-contain sm:w-72 h-auto object-contain" />
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-1 pt-10">
            <p className="font-semibold text-2xl sm:text-4xl">Programação</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <p className="font-semibold">Programação do Evento</p>
          <Link href={"/docs/Programacao-Semana-da-Informatica-2025.pdf"} target="_blank">
            <div className="w-56 h-12 bg-white rounded-lg p-1 flex items-center justify-between gap-2">
              <div className="w-10 h-full bg-[#05ac7a] rounded-md flex items-center justify-center"><FileText width={15} height={15} /></div>
              <p className="text-[#333333] font-bold text-sm">Programação</p>
              <ExternalLink width={15} height={15} color="black" className="ml-12" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
