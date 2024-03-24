"use client";
import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, startTransition] = useTransition();
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const search = () => {
    startTransition(() => {
      router.push(`/search?query=${query}`);
    });
  };

  return (
    <div className="relative flex flex-col bg-white w-full h-14">
      <div className="relative z-10 rounded-md h-14">
        <Input
          disabled={isSearching}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search();
            }
            if (e.key === "Escape") {
              inputRef.current?.blur();
            }
          }}
          ref={inputRef}
          placeholder="Search"
          className="absolute inset-0 h-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          disabled={isSearching}
          onClick={search}
          size={"sm"}
          className="right-0 absolute inset-y-0 rounded-l-none h-full"
        >
          {
            isSearching ? <Loader2 className="w-6 h-6 animate-spin" /> : <Search className="w-6 h-6" />
          }
        </Button>
      </div>
    </div>
  );
};
export default SearchBar;
