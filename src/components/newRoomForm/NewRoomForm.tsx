import { Button, Input, Text, Toggle } from "@geist-ui/react";
import { useState } from "react";

function NewRoomForm() {
  const [description, setDescription] = useState("");
  const [beds, setBeds] = useState(1);
  const [breakfast, setBreakfast] = useState(false);
  const [netflix, setNetflix] = useState(false);
  const [internet, setInternet] = useState(false);
  const [suite, setSuite] = useState(false);
  const [petFriendly, setPetFriendly] = useState(false);
  const [price, setPrice] = useState(100);
  const [promoPrice, setPromoPrice] = useState<number | "">("");
  const [reserved, setReserved] = useState(false);
  const [message, setMessage] = useState("");

  async function handleCreateRoom(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/rooms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description,
        beds,
        breakfast,
        netflix,
        internet,
        suite,
        petFriendly,
        price,
        promoPrice: promoPrice === "" ? null : Number(promoPrice),
        reserved,
      }),
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.ok) {
      setDescription("");
      setBeds(1);
      setBreakfast(false);
      setNetflix(false);
      setInternet(false);
      setSuite(false);
      setPetFriendly(false);
      setPrice(100);
      setPromoPrice("");
      setReserved(false);
    }
  }

  return (
    <form
      onSubmit={handleCreateRoom}
      className="mt-8 p-6 bg-white rounded-lg shadow flex flex-col gap-4 max-w-lg w-full"
    >
      <Text h4 className="mb-2">
        Criar novo quarto
      </Text>

      <label className="font-semibold">Descrição</label>
      <Input
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        width="100%"
        className="!mb-2"
        required
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />

      <label className="font-semibold">Camas</label>
      <Input
        placeholder="Camas"
        htmlType="number"
        value={String(beds)}
        onChange={(e) => setBeds(Number(e.target.value))}
        width="100%"
        className="!mb-2"
        required
        min={1}
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />

      <label className="font-semibold flex items-center gap-2">
        <Toggle checked={breakfast} onChange={() => setBreakfast((v) => !v)} />
        Café da manhã incluso
      </label>

      <label className="font-semibold flex items-center gap-2">
        <Toggle checked={netflix} onChange={() => setNetflix((v) => !v)} />
        Netflix
      </label>

      <label className="font-semibold flex items-center gap-2">
        <Toggle checked={internet} onChange={() => setInternet((v) => !v)} />
        Internet
      </label>

      <label className="font-semibold flex items-center gap-2">
        <Toggle checked={suite} onChange={() => setSuite((v) => !v)} />
        Suíte
      </label>

      <label className="font-semibold flex items-center gap-2">
        <Toggle
          checked={petFriendly}
          onChange={() => setPetFriendly((v) => !v)}
        />
        Pet Friendly
      </label>

      <label className="font-semibold">Preço</label>
      <Input
        placeholder="Preço"
        htmlType="number"
        value={String(price)}
        onChange={(e) => setPrice(Number(e.target.value))}
        width="100%"
        className="!mb-2"
        required
        min={1}
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />

      <label className="font-semibold">Preço promocional (opcional)</label>
      <Input
        placeholder="Preço promocional"
        htmlType="number"
        value={promoPrice === null ? "" : String(promoPrice)}
        onChange={(e) =>
          setPromoPrice(e.target.value === "" ? "" : Number(e.target.value))
        }
        width="100%"
        className="!mb-2"
        min={1}
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />

      <label className="font-semibold flex items-center gap-2">
        <Toggle checked={reserved} onChange={() => setReserved((v) => !v)} />
        Reservado
      </label>

      <Button
        type="success"
        htmlType="submit"
        className="!bg-[#7C6A46] !text-white font-bold hover:!bg-amber-700 !border-none mt-2"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Criar quarto
      </Button>
      {message && (
        <Text
          className={`mt-2 ${message.includes("sucesso") ? "text-green-600" : "text-red-600"}`}
        >
          {message}
        </Text>
      )}
    </form>
  );
}

export default NewRoomForm;
