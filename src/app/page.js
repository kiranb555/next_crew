import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner/Banner";

export default function Home() {
  return (
    <div className="grid">
      <Header/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Banner />
        <div>Services</div>
        <div>Why Choose US</div>
        <div>Company list</div>
        <div>Testimony</div>
        <div>Our Team</div>
        <div>
          <div>Looking For A Man power ?</div>
          <div>Contact us for hassle free service</div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
