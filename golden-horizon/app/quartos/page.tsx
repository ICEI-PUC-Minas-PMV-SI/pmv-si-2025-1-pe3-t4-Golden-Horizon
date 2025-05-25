export default function RoomsPage() {
  return (
    <>
      <div
        className="flex flex-col items-center text-center min-h-screen"
        style={{
          backgroundImage: "url('/assets/images/bedroom.jpg')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="mt-20 text-5xl font-bold">Quartos e Suítes</h1>
        <p className="w-[80ch]">
          Oferecemos uma variedade de acomodações pensadas para o seu conforto e
          bem-estar. Além dos quartos mais procurados, contamos também com
          suítes de luxo, ideais para quem busca uma experiência premium,
          quartos de solteiro, perfeitos para viagens individuais, e quartos
          para família, amplos e acolhedores, ideais para momentos inesquecíveis
          com quem você ama.
        </p>
      </div>
    </>
  );
}
