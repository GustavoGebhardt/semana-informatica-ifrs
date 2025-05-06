import Footer from "@/components/local/footer";
import Header from "@/components/local/header";
import Menu from "@/components/local/menu";
import Sidebar from "@/components/local/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Sidebar />
      <Menu page="inicio" />
      <Footer />
      <div className="w-full pl-12 flex flex-col items-center justify-center gap-8 pt-20">
        <Image alt="logo" width={300} height={300} src={"/logo-horizontal.png"} />
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-1 pt-10">
            <p className="font-bold text-7xl text-[#0099DB]">3ª</p>
            <div>
              <p className="font-semibold text-4xl">Semana da Informática</p>
              <p className="font-semibold text-3xl text-[#D7D7D7]">IFRS - Campus Feliz</p>
            </div>
          </div>
          <p className="font-semibold text-2xl text-[#D7D7D7]">12 a 16 de agosto, 2025</p>
        </div>
        <div className="flex pt-10 gap-5">
          <div className="w-[500px]"></div>
          <div className="w-0.5 bg-[#D7D7D7]" />
          <div className="w-[500px] flex flex-col gap-4">
            <p>
              A Semana da Informática é um evento que tem como<br></br>
              objetivo promover a disseminação do conhecimento na<br></br>
              área de tecnologia da informação e comunicação. O<br></br>
              evento reúne estudantes, professores, pesquisadores e<br></br>
              profissionais de diferentes áreas de atuação para discutir<br></br>
              tendências, inovações e desafios do setor.
            </p>
            <p>
              Durante a Semana da Informática, serão realizadas<br></br>
              palestras, painéis, workshops, minicursos e outras<br></br>
              atividades que visam aprofundar o conhecimento em<br></br>
              áreas como programação, desenvolvimento de software,<br></br>
              inteligência artificial, entre outras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
