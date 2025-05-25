export default function EventosPage() {
  const cards = [
    {
      title: "Áreas externas",
      img: "/assets/images/externa.jpg",
      desc: "Imagine um evento ao ar livre, com uma bela piscina iluminada, lounges confortáveis e um espaço gourmet completo com churrasqueira. Ideal para festas descontraídas ou celebrações ao pôr do sol. É o ambiente perfeito para criar memórias especiais em meio à natureza e com um toque de charme.",
    },
    {
      title: "Academia",
      img: "/assets/images/academia.jpg",
      desc: "Para quem não abre mão do bem-estar mesmo durante eventos, nossa academia está equipada com aparelhos de última geração. É uma excelente opção para eventos de bem-estar, retiros corporativos ou grupos fitness.",
    },
    {
      title: "Restaurante",
      img: "/assets/images/restaurante.jpg",
      desc: "Nosso restaurante oferece um cardápio cuidadosamente elaborado por chefs experientes, com opções que vão desde pratos regionais até cozinha internacional. Para eventos, oferecemos cardápios personalizados, coquetéis especiais e um ambiente sofisticado, perfeito para jantares de gala, coffee breaks e recepções intimistas.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center px-4 pb-20 font-[var(--font-raleway)] text-[#1C1C1C]">
      <section className="relative w-full h-[60vh] mb-16 flex items-center justify-center bg-[url('/assets/images/banner.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <h2 className="text-white text-4xl sm:text-5xl font-bold text-center z-10">
          Faça seu evento conosco
        </h2>
      </section>

      <h2 className="text-[40px] font-semibold text-center mb-10">
        Faça um tour
      </h2>

      {cards.map((item, i) => (
        <section key={i} className="mb-24 w-full">
          <div className="relative max-w-6xl mx-auto overflow-visible rounded-2xl">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-auto object-cover rounded-2xl"
            />

            <div
              className="bg-white px-6 py-6 sm:px-8 sm:py-8 relative z-10 text-center rounded-2xl"
              style={{
                width: "640px",
                height: "140px",
                margin: "0 auto",
                marginTop: "-150px",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.10)",
              }}
            >
              <div className="h-4 w-full rounded-t-xl bg-[#7C6A46] absolute top-0 left-0"></div>

              <h3 className="text-[24px] font-semibold mt-6 mb-4 text-[#7C6A46]">
                {item.title}
              </h3>
              <p className="text-[15px] font-normal text-[#000000] leading-[100%] px-4">
                {item.desc}
              </p>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
