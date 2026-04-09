import Image from "next/image";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Heropage from "@/component/Hero-section";
import StoryPage from "@/component/Story";
import MissionCard from "@/component/MissionCard";
import MessagePage from "@/component/Message-Section";
import Team from "@/component/Team";

export default function Home() {
  return (
    <div>
      <Heropage />
      <main>
        <StoryPage />
        <MissionCard />
        <MessagePage />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
