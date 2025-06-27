import Header from "@/components/local/header";
import Menu from "@/components/local/menu";
import Sidebar from "@/components/local/sidebar";
import { ExternalLink, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hackathon() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Sidebar page="hackathon" />
      <Menu page="hackathon" />
      <div className="w-full pl-12 flex flex-col items-center justify-center gap-8 pt-20">
        <Image alt="logo" width={300} height={300} src={"/logo-horizontal.png"} className="w-56 h-auto object-contain sm:w-72 h-auto object-contain" />
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-1 pt-10">
            <p className="font-semibold text-2xl sm:text-4xl">Hackathon</p>
          </div>
        </div>
        <p className="w-[270px] font-semibold text-center text-xl pt-6 text-[#D7D7D7] sm:text-2xl sm:w-full">Data limite para inscrições: 28 de Julho</p>
        <div className="flex flex-col-reverse justify-center pt-10 gap-5 sm:flex-row">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Regulamento da Hackathon</p>
              <Link href={"docs/Regulamento-Hackathon-2025.pdf"} target="_blank">
                <div className="w-56 h-12 bg-white rounded-lg p-1 flex items-center justify-between gap-2">
                  <div className="w-10 h-full bg-[#db5400] rounded-md flex items-center justify-center"><FileText width={15} height={15} /></div>
                  <p className="text-[#333333] font-bold text-sm">Regulamento</p>
                  <ExternalLink width={15} height={15} color="black" className="ml-12" />
                </div>
              </Link>
              <p className="font-semibold">Inscrição da Hackathon</p>
              <Link href={"https://forms.gle/xfiNe8MvK2EFLMZ79"} target="_blank">
                <div className="w-56 h-12 bg-white rounded-lg p-1 flex items-center justify-between gap-2">
                  <div className="w-10 h-full bg-[#0099DB] rounded-md flex items-center justify-center"><FileText width={15} height={15} /></div>
                  <p className="text-[#333333] font-bold text-sm">Inscrição</p>
                  <ExternalLink width={15} height={15} color="black" className="ml-18" />
                </div>  
              </Link>
              <p className="font-semibold">Autorização Menor de Idade</p>
              <Link href={"docs/Termo-Autorizacao-Menor-Idade-Hackathon-2025.pdf"} target="_blank">
                <div className="w-56 h-12 bg-white rounded-lg p-1 flex items-center justify-between gap-2">
                  <div className="w-10 h-full bg-[#0099DB] rounded-md flex items-center justify-center"><FileText width={15} height={15} /></div>
                  <p className="text-[#333333] font-bold text-sm">Autorização</p>
                  <ExternalLink width={15} height={15} color="black" className="ml-12" />
                </div>  
              </Link>
              <>
              </>
            </div>
          <div className="w-0.5 bg-[#D7D7D7] hidden sm:block" />
          <div className="flex flex-col gap-4">
            <p className="w-[310px] text-start sm:text-start sm:w-[460px]">
              A palavra Hackathon resulta de uma combinação das palavras hack (programar uma solução inovadora) e marathon (maratona). Trata-se uma atividade competitiva que tem como intuito fomentar a construção de inovações por meio do desenvolvimento de protótipos que possam ser aplicados em uma área temática, sem conhecimento prévio dos participantes, divulgada durante a abertura oficial do evento. Após divulgado o tema da Hackathon, as equipes se reúnem isoladamente umas das outras. Durante as horas seguintes devem formular propostas e protótipos de software para resolver problemas reais e relevantes na área temática. Uma vez esgotado o tempo da competição, as comissões avaliarão os resultados para determinar a equipe vencedora.<br></br>
              <br></br>
              Algumas informações importantes:<br></br>
              - Limitado a 8 equipes (por ordem de inscrição)<br></br>
              - Equipes podem ter 4 ou 5 membros, além de 2 suplentes<br></br>
              - Encerramento das inscrições 28/07/2025 às 23:59<br></br>
              - Divulgação das inscrições homologadas 01/08/2024<br></br>
              - Credenciamento 15/08/2025 das 18h às 19h30<br></br>
              - Inicio da competição 15/08/2025 às 20h<br></br>
              - Fim da competição 16/08/2025 às 12h<br></br>
              - Intervalo para almoço 16/08/2024 das 12h às 13h30<br></br>
              - Avaliações 16/08/2024 das 13h30 às 16h30<br></br>
              <br></br>
              Antes de se inscrever, leia o REGULAMENTO para saber os requisitos de participação. 
              Equipes que não atendam os requisitos, não serão homologadas.<br></br>
            </p>
          </div>
        </div>
        <div className="w-20 h-20"></div>
      </div>
    </div>
  );
}
