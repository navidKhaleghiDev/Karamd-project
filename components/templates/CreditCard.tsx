import Image from "next/image";
import { Eye, RotateCcw } from "lucide-react";

import { Card, CardContent } from "../ui/Card";

export function CreditCard() {
  return (
    <Card className="relative w-full bg-[#0E4A40] text-white rounded-xl shadow-lg overflow-hidden pt-3 pb-6">
      <CardContent className="flex flex-col justify-between">
        {/* Top logos */}
        <div className="flex items-center justify-between">
          <Image
            src="/images/middleEast-logo.png"
            alt="بانک خاورمیانه"
            width={90}
            height={50}
          />
          <Image
            src="/images/karamad-logo.png"
            alt="کارآمد"
            width={50}
            height={50}
          />
        </div>

        {/* Main text */}
        <div className="mt-6 text-center space-y-1">
          <p className="text-base">حساب درآمد ویژه</p>
          <p className="text-lg font-semibold">
            سود روز شمار و موثر سالانه
            <span className="font-bold ">۲۶</span>
          </p>
        </div>

        {/* Balance section */}
        <div className="mt-8 flex items-center justify-between">
          <Eye className="w-5 h-5 opacity-80" />
          <div className="flex items-center gap-2 text-sm">
            <RotateCcw className="w-4 h-4" />
            <span>۲۸,۴۵۰,۰۰۰ ریال</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
