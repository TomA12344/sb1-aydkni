import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function BlogHeader() {
  return (
    <div className="mb-8 space-y-4">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Input
          placeholder="Suche nach Artikeln..."
          className="max-w-sm"
        />
        <Select defaultValue="newest">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sortierung" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Neueste zuerst</SelectItem>
            <SelectItem value="oldest">Älteste zuerst</SelectItem>
            <SelectItem value="popular">Beliebteste</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}