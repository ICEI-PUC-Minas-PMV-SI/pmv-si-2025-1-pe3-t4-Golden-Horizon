import Image from "next/image";
import casaImg from "@/public/assets/images/casaHome.jpg";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] mx-20">
      <main>
        <div className="flex h-screen">
          <div className="flex-1 pt-10">
            <h1 className={`${dancingScript.className} italic !text-[#7C6A46]`}>
              Golden Horizon
            </h1>
            <h2>Um Hotel para cada momento rico em emoção</h2>
            <p>Cada momento parece a primeira vez na vista do paraíso</p>
          </div>
          <div className="flex-1 relative">
            <Image
              src={casaImg}
              fill
              alt="Um resort"
              className="object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
