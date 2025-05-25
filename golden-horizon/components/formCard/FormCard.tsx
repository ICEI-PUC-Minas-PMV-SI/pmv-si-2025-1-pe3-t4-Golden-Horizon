import { Card } from "@geist-ui/react";

export default function FormCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="!w-[570px]">
      <Card.Content className="flex flex-col !w-full !p-[32px]">
        {children}
      </Card.Content>
    </Card>
  );
}
