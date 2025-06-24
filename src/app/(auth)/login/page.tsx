import LoginForm from "./LoginForm";
import FormCard from "@/components/formCard/FormCard";
import DancingScript from "@/components/dancingScript/DancingScript";

export default function Login() {
  return (
    <main className="h-[calc(100vh-96px)] flex justify-center items-center !m-5 !p-5">
      <FormCard>
        <h2 className="!text-center">
          <DancingScript text="Golden Horizon" />
        </h2>
        <LoginForm />
      </FormCard>
    </main>
  );
}
