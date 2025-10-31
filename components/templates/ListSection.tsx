import { listSectionActions } from "./constance";
import { Card, CardContent } from "../ui/Card";

export function ListSection() {
  return (
    <div className="flex items-center justify-center gap-x-20 gap-y-10 flex-wrap size-full">
      {listSectionActions.map(({ title, icon: Icon }) => (
        <div
          className="flex flex-col items-center justify-center gap-3"
          key={title}
        >
          <Card
            key={title}
            className="flex items-center justify-center size-12 bg-gray-50 hover:bg-muted transition rounded-md border border-gray-300"
          >
            <CardContent>
              <Icon className="size-5 text-orange-600" />
            </CardContent>
          </Card>
          <span className="text-xs font-semibold text-gray-700">{title}</span>
        </div>
      ))}
    </div>
  );
}
