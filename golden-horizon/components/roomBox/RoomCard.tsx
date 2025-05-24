import { StaticImageData } from "next/image";
import Image from "next/image";

type RoomCardProps = {
  availableRooms: number;
  cardText: string;
  image: StaticImageData;
};

export default function RoomCard({
  availableRooms,
  cardText,
  image,
}: RoomCardProps) {
  return (
    <div className="relative w-[300px] rounded-md bg-white hover:scale-105 hover:cursor-pointer transition-transform duration-300">
      <div className="m-4">
        <Image src={image} alt="a nice room" />
        <p>{cardText}</p>
      </div>

      <div
        className="
          bg-[#7C6A46] 
          text-white 
          absolute 
          top-8 
          right-8 
          h-[30px] 
          flex 
          items-center 
          justify-center 
          rounded-md
          text-sm
        "
      >
        <p className="text-center !font-bold !m-2">
          {availableRooms > 1
            ? `${availableRooms} quartos disponíveis`
            : "1 quarto disponível"}
        </p>
      </div>
    </div>
  );
}
