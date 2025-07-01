import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div className="grid grid-cols-12 bg-gray-100">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
