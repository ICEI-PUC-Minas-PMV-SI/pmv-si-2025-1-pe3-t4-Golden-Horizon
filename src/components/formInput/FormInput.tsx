import { Input, Text } from "@geist-ui/react";

export default function FormInput({
  label,
  name,
  placeholder,
  type,
  className,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "tel" | "number";
  className?: string;
}) {
  return (
    <label htmlFor={name}>
      <Text font="15px" className="my-1">
        {label}
      </Text>

      <Input
        className={className}
        htmlType={type}
        placeholder={placeholder}
        width="100%"
        name={name}
        id={name}
        scale={4 / 3}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
      />
    </label>
  );
}
