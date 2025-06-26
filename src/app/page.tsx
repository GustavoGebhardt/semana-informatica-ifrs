import Header from "@/components/local/header";
import Menu from "@/components/local/menu";
import Sidebar from "@/components/local/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Sidebar page={"inicio"} />
      <Menu page={"inicio"} />
      <div className="w-full pl-12 flex flex-col items-center justify-center gap-8 pt-20">
        <Image alt="logo" width={300} height={300} src={"/logo-horizontal.png"} className="w-56 h-auto object-contain sm:w-72 h-auto object-contain" />
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-1 pt-10">
            <p className="font-bold text-5xl text-[#0099DB] sm:text-7xl">3ª</p>
            <div>
              <p className="font-semibold text-2xl sm:text-4xl">Semana da Informática</p>
              <p className="font-semibold text-1xl text-[#D7D7D7] sm:text-3xl">IFRS - Campus Feliz</p>
            </div>
          </div>
          <p className="font-semibold text-xl text-[#D7D7D7] sm:text-2xl">12 a 16 de agosto, 2025</p>
        </div>
        <div className="flex flex-col-reverse justify-center pt-10 pb-20 gap-5 sm:flex-row">
          <Image alt="home image" width={280} height={280} src={"/home-image.png"} className="w-full h-full" />
          <div className="w-0.5 bg-[#D7D7D7] hidden sm:block" />
          <div className="flex flex-col gap-4">
            <p className="w-[300px] text-start sm:text-start sm:w-[460px]">
              A Semana da Informática é um evento que tem como
              objetivo promover a disseminação do conhecimento na
              área de tecnologia da informação e comunicação. O
              evento reúne estudantes, professores, pesquisadores e
              profissionais de diferentes áreas de atuação para discutir
              tendências, inovações e desafios do setor.
            </p>
            <p className="w-[300px] text-start sm:text-start sm:w-[460px]">
              Durante a Semana da Informática, serão realizadas
              palestras, painéis, workshops, minicursos e outras
              atividades que visam aprofundar o conhecimento em
              áreas como programação, desenvolvimento de software,
              inteligência artificial, entre outras.
            </p>
            <p className="w-[300px] text-start sm:text-start sm:w-[460px]">
              A Semana da Informática acontecerá entre os dias
              12 e 16 de agosto de 2025, proporcionando uma oportunidade
              única de aprendizado e troca de experiências.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
