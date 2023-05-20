import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { FC } from "react";

interface Searchprops {
    className?: string
}

export const Search: FC<Searchprops> = ({className}) => {
  return (
    <div className={cn('h-12 w-1/3 relative', className,)}>
      <input
        type="text"
        placeholder="¿Y... a donde querés ir esta vez?"
        className="pl-6 w-full h-full bg-slate-300 rounded-full"
      />
      <SearchIcon className="absolute -translate-y-1/2 top-1/2 right-5 text-slate-600" />
    </div>
  );
};
