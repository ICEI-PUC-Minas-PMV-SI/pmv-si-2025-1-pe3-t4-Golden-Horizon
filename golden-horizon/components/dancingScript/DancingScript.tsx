import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function DancingScript({ text }: { text: string }) {
  return (
    <h1 className={`${dancingScript.className} italic !text-[#7C6A46]`}>
      {text}
    </h1>
  );
}
