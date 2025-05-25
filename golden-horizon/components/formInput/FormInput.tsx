import { Input, Text } from "@geist-ui/react";

export default function FormInput({
  label,
  name,
  placeholder,
  type,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "tel";
}) {
  return (
    <label htmlFor={name}>
      <Text font="15px" className="my-1">
        {label}
      </Text>

      <Input
        htmlType={type}
        placeholder={placeholder}
        width="100%"
        name={name}
        id={name}
        scale={4 / 3}
      />
    </label>
  );
}
