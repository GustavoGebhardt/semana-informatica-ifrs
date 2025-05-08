import Header from "@/components/local/header";
import Menu from "@/components/local/menu";
import Sidebar from "@/components/local/sidebar";

export default function Hackathon() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Sidebar page="hackathon" />
      <Menu page="hackathon" />
    </div>
  );
}
