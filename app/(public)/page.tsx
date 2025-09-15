import { CurrenciesList } from "@/components/home-page";
import { site } from "@/core/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: site.name.en,
  description: site.description,
};

export default function Home() {
  return (
    <div className="container mx-auto px-3">
      <CurrenciesList />
    </div>
  );
}
