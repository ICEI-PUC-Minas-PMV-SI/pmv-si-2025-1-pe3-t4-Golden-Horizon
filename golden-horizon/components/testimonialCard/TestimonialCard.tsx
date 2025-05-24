import { Star } from "@geist-ui/icons";

export default function TestimonialCard() {
  return (
    <div className="p-4 rounded-md shadow-md bg-white max-w-md mb-10">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">2. Mar. 2023</p>
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="text-yellow-500 fill-yellow-500"
              size={20}
            />
          ))}
        </div>
      </div>

      <blockquote className="mt-4 border-l-4 border-grey-500 pl-4 italic text-gray-700">
        “O serviço no Hotel foi excepcional. Não houve absolutamente nenhum
        problema que não tenha sido resolvido em tempo hábil e com resultados
        satisfatórios. Ficamos particularmente impressionados com a forma como a
        equipe do hotel antecipou nossas necessidades (visitando periodicamente
        a Sala de Reuniões para nos consultar). Inúmeros participantes da
        conferência comentaram sobre a qualidade da comida, a qualidade do
        serviço e a atitude geral positiva em relação ao local da conferência.
        Particularmente notável é a longevidade da equipe e o senso de
        investimento no sucesso de cada evento. Costumo oferecer sugestões de
        melhorias (parte de ser professor de marketing), mas não há
        absolutamente nada que possa ser melhorado – vocês estabeleceram um
        padrão muito alto.”
      </blockquote>
    </div>
  );
}
