import { Suspense } from "react";

import { Home } from "@/components/Pages/Home";

export default function HomePage() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Home />
    </Suspense>
  );
}
