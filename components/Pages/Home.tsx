"use client";

import { CreditCard } from "../templates/CreditCard";
import { ListSection } from "../templates/ListSection";

export function Home() {
  return (
    <div className="flex flex-col gap-10">
      <CreditCard />
      <ListSection />
    </div>
  );
}
