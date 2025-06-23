"use client";
import { Play } from "@geist-ui/icons";
import { Button } from "@geist-ui/react";
import { useRouter } from "next/navigation";

export default function HomeRibbon() {
  const router = useRouter();

  const handleReserveClick = () => {
    router.push("/quartos");
  };

  return (
    <div className="flex mt-10">
      <Button
        auto
        className="!bg-[#7C6A46] 
        !font-bold
        !text-white
        !rounded-full
        !mr-5"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onClick={handleReserveClick}
      >
        Reserve agora
      </Button>
      <div>
        <Button
          iconRight={<Play fill="white" color="white" />}
          auto
          className="!rounded-full !bg-[#00A699]"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        ></Button>
        <span className="ml-2">Faça uma tour</span>
      </div>
    </div>
  );
}
