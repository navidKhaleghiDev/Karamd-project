import { Home } from "lucide-react";
import { ArchiveRestore } from "lucide-react";
import { Layers2 } from "lucide-react";

import { IFooterNavigation } from "./types";

export const footerNavigation: IFooterNavigation[] = [
  {
    label: "home",
    value: "home",
    icon: <Home />,
  },
  {
    label: "funds",
    value: "funds",
    icon: <ArchiveRestore />,
  },
  {
    label: "capitals",
    value: "capitals",
    icon: <Layers2 />,
  },
];
