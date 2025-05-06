import Footer from "@/components/local/footer";
import Header from "@/components/local/header";
import Menu from "@/components/local/menu";
import Sidebar from "@/components/local/sidebar";

export default function Programacao() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Sidebar />
      <Menu page="programacao" />
      <Footer />
    </div>
  );
}
