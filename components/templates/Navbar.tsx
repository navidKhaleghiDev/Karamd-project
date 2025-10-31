import { Bell } from "lucide-react";
import { TextAlignJustify } from "lucide-react";

import { Button } from "../ui/button";

export function Navbar(): JSX.Element {
  return (
    <nav>
      <section className="w-full flex items-center justify-between">
        <h2 className="font-bold">حساب درآمد وبژه</h2>
        <div className="flex items-center justify-between gap-3">
          <Button variant="outline" size="icon">
            <Bell />
          </Button>
          <Button variant="outline" size="icon">
            <TextAlignJustify />
          </Button>
        </div>
      </section>
    </nav>
  );
}
