import Image from "next/image";
import { Eye, RotateCcw } from "lucide-react";

import { Card, CardContent } from "../ui/Card";

export function CreditCard() {
  return (
    <Card className="relative w-full bg-[#0E4A40] text-white rounded-xl shadow-lg overflow-hidden">
      <CardContent className="p-5 flex flex-col justify-between h-full">
        {/* Top logos */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/karamad-logo-img.png"
              alt="کارآمد"
              width={28}
              height={28}
            />
            <span className="font-bold text-lg">کارآمد</span>
          </div>
          {/* <Image
            src="/icons/middleeast-bank-logo.svg"
            alt="بانک خاورمیانه"
            width={80}
            height={40}
          /> */}
        </div>

        {/* Main text */}
        <div className="mt-6 text-center space-y-1">
          <p className="text-base">حساب درآمد ویژه</p>
          <p className="text-lg font-semibold">
            سود روز شمار و موثر سالانه
            <span className="font-bold text-[#FFD700]">۲۶٪</span>
          </p>
        </div>

        {/* Balance section */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <RotateCcw className="w-4 h-4" />
            <span>۲۸,۴۵۰,۰۰۰ ریال</span>
          </div>
          <Eye className="w-5 h-5 opacity-80" />
        </div>
      </CardContent>
    </Card>
  );
}
