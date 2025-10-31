import {
  FileText,
  Home,
  Repeat,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
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

export const listSectionActions = [
  { title: "تبدیل", icon: Repeat },
  { title: "فروش", icon: ShoppingBag },
  { title: "خرید", icon: ShoppingCart },
  { title: "تراکنش‌ها", icon: FileText },
];
