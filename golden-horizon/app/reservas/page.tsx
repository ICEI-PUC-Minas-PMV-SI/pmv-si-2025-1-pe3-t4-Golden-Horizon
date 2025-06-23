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

    const payload = { ...data, roomId };

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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-6 font-semibold">Reservar Quarto</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormGroup>
          <label>Nome</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "O nome é obrigatório" }}
            render={({ field }) => (
              <Input
                value={field.value}
                onChange={(value: string) => field.onChange(value)}
              />
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </FormGroup>

        <FormGroup>
          <label>Email</label>
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
                type="email"
                value={field.value}
                onChange={(value: string) => field.onChange(value)}
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </FormGroup>

        <FormGroup>
          <label>Telefone</label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: "O telefone é obrigatório" }}
            render={({ field }) => (
              <Input
                value={field.value}
                onChange={(value: string) => field.onChange(value)}
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </FormGroup>

        <FormGroup>
          <label>Data de Entrada</label>
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
            <p className="text-red-500 text-sm">{errors.checkIn.message}</p>
          )}
        </FormGroup>

        <FormGroup>
          <label>Data de Saída</label>
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
            <p className="text-red-500 text-sm">{errors.checkOut.message}</p>
          )}
        </FormGroup>

        <FormGroup>
          <label>Quantidade de Hóspedes</label>
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
            <p className="text-red-500 text-sm">{errors.guests.message}</p>
          )}
        </FormGroup>

        <FormGroup>
          <p>
            <strong>ID do Quarto:</strong> {roomId}
          </p>
        </FormGroup>

        <Button appearance="primary" type="submit" block disabled={!isValid}>
          Confirmar Reserva
        </Button>
      </form>
    </div>
  );
}
