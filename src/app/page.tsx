import Image from "next/image";
import casaImg from "@/public/assets/images/casaHome.jpg";
import { roomMock, utilities } from "@/utils/home.utils";
import DancingScript from "@/components/dancingScript/DancingScript";
import RoomCard from "@/components/roomCard/RoomCard";
import TestimonialCard from "@/components/testimonialCard/TestimonialCard";
import HomeRibbon from "@/components/homeRibbon/HomeRibbon";
import ReserveRibbon from "@/components/reserveRibbon/ReserveRibbon";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <div className="flex mx-20">
          <div className="flex-1 pt-10">
            <h1>
              <DancingScript text="Golden Horizon" />
            </h1>
            <h2>Um Hotel para cada momento rico em emoção</h2>
            <p>Cada momento parece a primeira vez na vista do paraíso</p>
            <HomeRibbon />
          </div>
          <div className="flex-1 relative">
            <Image
              src={casaImg}
              height={800}
              alt="Um resort"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-20">
          <ReserveRibbon />
        </div>

        <div className="my-10 mx-20">
          <div className="flex flex-col items-center mb-6">
            <h2 className="!m-0">Nossas Instalações</h2>
            <p className="!m-0">
              Oferecemos instalações de hotel modernas (5 estrelas) para o seu
              conforto
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-14 p-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-[#FAFAFA] aspect-square flex items-center justify-center !text-[#7C6A46] text-lg font-medium"
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="material-icons !text-4xl text-[#7C6A46]">
                    {utilities[index].icon}
                  </span>
                  <div className="mt-2 text-center !text-md">
                    {utilities[index].text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="w-full h-[800px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/roomBg.jpg')",
            backgroundColor: "hsla(74, 22%, 62%, 0.8)",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="text-white p-10 flex flex-col items-center">
            <h1 className="text-4xl !m-0">Quartos Luxuosos</h1>
            <p className="!m-0">
              Todos os quartos são projetados para seu conforto
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 p-10">
            {roomMock.map((card, i) => (
              <RoomCard
                key={i}
                availableRooms={card.availableRooms}
                cardText={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>
        <div className="mt-20">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold">Testemunhos</h2>
          </div>

          <div className="flex mx-20 space-x-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <TestimonialCard key={i} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
