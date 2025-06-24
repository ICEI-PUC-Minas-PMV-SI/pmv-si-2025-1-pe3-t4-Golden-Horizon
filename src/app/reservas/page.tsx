"use client";

import { useToasts } from "@geist-ui/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { DatePicker, Input, InputNumber, Button } from "rsuite";
import FormGroup from "rsuite/esm/FormGroup";

type ReservationForm = {
  name: string;
  email: string;
  phone: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
};

export default function ReservesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [, setToast] = useToasts();

  const roomId = searchParams.get("roomId") || "desconhecido";
  const checkInParam = searchParams.get("checkIn");
  const checkOutParam = searchParams.get("checkOut");
  const guestsParam = searchParams.get("guests");

  const {
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<ReservationForm>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      checkIn: checkInParam ? new Date(checkInParam) : null,
      checkOut: checkOutParam ? new Date(checkOutParam) : null,
      guests: guestsParam ? parseInt(guestsParam) : 1,
    },
    mode: "onChange",
  });

  const onSubmit = async (data: ReservationForm) => {
    if (!data.checkIn || !data.checkOut) {
      setError("checkIn", { message: "Selecione as duas datas" });
      return;
    }

    if (data.checkOut <= data.checkIn) {
      setError("checkOut", {
        message: "A saída deve ser depois da entrada",
      });
      return;
    }

    clearErrors();

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      checkIn: data.checkIn ? data.checkIn.toISOString() : null,
      checkOut: data.checkOut ? data.checkOut.toISOString() : null,
      guests: data.guests,
      roomId: roomId,
      userId: null, // Usuário público, não logado
    };

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setToast({
          text: "Reserva enviada com sucesso!",
          type: "success",
          delay: 1500,
        });

        setTimeout(() => {
          router.push("/reserva-sucesso");
        }, 1500);
      } else {
        setToast({
          text: "Erro ao enviar a reserva.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setToast({
        text: "Erro ao conectar com o servidor.",
        type: "error",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 border border-none">
        <h2 className="text-3xl font-bold text-amber-700 mb-6 text-center">
          Reservar Quarto
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <FormGroup>
            <label className="block font-semibold text-gray-700 mb-1">
              Nome
            </label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "O nome é obrigatório" }}
              render={({ field }) => (
                <Input
                  className="w-full"
                  value={field.value}
                  onChange={(value: string) => field.onChange(value)}
                  placeholder="Digite seu nome completo"
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </FormGroup>

          <FormGroup>
            <label className="block font-semibold text-gray-700 mb-1">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "O email é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de email inválido",
                },
              }}
              render={({ field }) => (
                <Input
                  className="w-full"
                  type="email"
                  value={field.value}
                  onChange={(value: string) => field.onChange(value)}
                  placeholder="seu@email.com"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </FormGroup>

          <FormGroup>
            <label className="block font-semibold text-gray-700 mb-1">
              Telefone
            </label>
            <Controller
              name="phone"
              control={control}
              rules={{ required: "O telefone é obrigatório" }}
              render={({ field }) => (
                <Input
                  className="w-full"
                  value={field.value}
                  onChange={(value: string) => field.onChange(value)}
                  placeholder="(99) 99999-9999"
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </FormGroup>

          <div className="flex gap-4">
            <FormGroup className="flex-1">
              <label className="block font-semibold text-gray-700 mb-1">
                Data de Entrada
              </label>
              <Controller
                name="checkIn"
                control={control}
                rules={{ required: "A data de entrada é obrigatória" }}
                render={({ field }) => (
                  <DatePicker
                    value={field.value}
                    onChange={(value) => field.onChange(value ?? null)}
                    placeholder="Selecione a data"
                    oneTap
                    style={{ width: "100%" }}
                  />
                )}
              />
              {errors.checkIn && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.checkIn.message}
                </p>
              )}
            </FormGroup>

            <FormGroup className="flex-1">
              <label className="block font-semibold text-gray-700 mb-1">
                Data de Saída
              </label>
              <Controller
                name="checkOut"
                control={control}
                rules={{ required: "A data de saída é obrigatória" }}
                render={({ field }) => (
                  <DatePicker
                    value={field.value}
                    onChange={(value) => field.onChange(value ?? null)}
                    placeholder="Selecione a data"
                    oneTap
                    style={{ width: "100%" }}
                  />
                )}
              />
              {errors.checkOut && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.checkOut.message}
                </p>
              )}
            </FormGroup>
          </div>

          <FormGroup>
            <label className="block font-semibold text-gray-700 mb-1">
              Quantidade de Hóspedes
            </label>
            <Controller
              name="guests"
              control={control}
              rules={{ required: "Informe o número de hóspedes" }}
              render={({ field }) => (
                <InputNumber
                  value={field.value}
                  min={1}
                  max={10}
                  onChange={(value) => field.onChange(value ?? 1)}
                  style={{ width: "100%" }}
                />
              )}
            />
            {errors.guests && (
              <p className="text-red-500 text-xs mt-1">
                {errors.guests.message}
              </p>
            )}
          </FormGroup>

          <div className="bg-amber-50 rounded p-3 text-sm text-gray-700 mb-2">
            <strong>ID do Quarto:</strong>{" "}
            <span className="text-amber-700">{roomId}</span>
          </div>

          <Button
            appearance="primary"
            type="submit"
            block
            disabled={!isValid}
            className="!bg-amber-600 !text-white !font-semibold !rounded-lg !py-3 !text-lg hover:!bg-amber-700 transition"
          >
            Confirmar Reserva
          </Button>
        </form>
      </div>
    </div>
  );
}
