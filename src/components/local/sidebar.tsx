import { AlignJustify } from "lucide-react";

export default function Sidebar(){
  return(
    <div className="w-12 h-full bg-[#313131] fixed">
      <div className="w-full h-full pt-10 flex flex-col items-center">
        <AlignJustify width={30} height={30} color="white"/>
      </div>
    </div>
  );
}