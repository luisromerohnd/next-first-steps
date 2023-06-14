import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Title",
  description: "Este es la pagina de contacto de la empresa",
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
