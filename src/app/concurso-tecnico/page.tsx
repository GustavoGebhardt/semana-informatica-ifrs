import Header from "@/components/local/header";
import Menu from "@/components/local/menu";
import Sidebar from "@/components/local/sidebar";
import { ExternalLink, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ConcursoTecnico() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Sidebar page="concurso-tecninco" />
      <Menu page="concurso-tecninco" />
      <div className="w-full pl-12 flex flex-col items-center justify-center gap-8 pt-20">
        <Image alt="logo" width={300} height={300} src={"/logo-horizontal.png"} className="w-56 h-auto object-contain sm:w-72 h-auto object-contain" />
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-1 pt-10">
            <p className="font-bold text-2xl text-[#0099DB] sm:text-4xl">3º</p>
            <div>
              <p className="font-semibold text-2xl sm:text-4xl">Concurso Técnico</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-center pt-10 gap-5 sm:flex-row">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Regulamento do Concurso</p>
              <Link href={"https://docs.google.com/document/d/1pv00hWkE69aKvK5s2-FThWl7vEo17DczTSXb0EyMH-s/edit?usp=drivesdk"} target="_blank">
                <div className="w-48 h-12 bg-white rounded-lg p-1 flex items-center gap-2">
                  <div className="w-10 h-full bg-[#0099DB] rounded-md flex items-center justify-center"><FileText width={15} height={15} /></div>
                  <p className="text-[#333333] font-bold text-sm">Regulamento</p>
                  <ExternalLink width={15} height={15} color="black" className="ml-5" />
                </div>
              </Link>
              <p className="font-semibold">Inscrição do Concurso</p>
              <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSc_-xDbS3KkXCfpvrY-zKPqagjB9sag8CQDZRj5dzq-Z-7A-Q/viewform?usp=sharing"} target="_blank">
                <div className="w-48 h-12 bg-white rounded-lg p-1 flex items-center gap-2">
                  <div className="w-10 h-full bg-[#0099DB] rounded-md flex items-center justify-center"><FileText width={15} height={15} /></div>
                  <p className="text-[#333333] font-bold text-sm">Inscrição</p>
                  <ExternalLink width={15} height={15} color="black" className="ml-11" />
                </div>
              </Link>
            </div>
          <div className="w-0.5 bg-[#D7D7D7] hidden sm:block" />
          <div className="flex flex-col gap-4">
            <p className="w-[310px] text-start sm:text-start sm:w-[460px]">
            O 3º Concurso de Trabalhos Técnicos é um evento que ocorre durante a 3ª Semana da Informática do IFRS - Campus Feliz e que tem como objetivo divulgar e premiar os trabalhos técnico-científicos desenvolvidos por estudantes do curso Técnico em Informática Integrado ao Ensino Médio e do Curso Superior de Tecnologia em Análise e Desenvolvimento do campus Feliz.
            </p>
          </div>
        </div>
        <p className="w-[270px] font-semibold text-center text-xl pt-6 pb-20 text-[#D7D7D7] sm:text-2xl sm:w-full">Data limite para inscrições: 03 de Agosto</p>
      </div>
    </div>
  );
}
