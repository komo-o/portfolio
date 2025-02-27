import { useState } from "react";
import { Menu, Home, User, FolderGit2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="rounded-lg shadow-sm hover:opacity-70">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] bg-white dark:bg-background sm:w-[400px] [&_button[data-state]]:hidden"
      >
        <SheetHeader>
          <SheetTitle className="text-left h-8">
            <a href="/" className="inline-flex items-center gap-2 hover:opacity-70">
              <Home className="h-6 w-6" />
              <span className="text-lg font-semibold">Portfolio</span>
            </a>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-4">
          <a
            href="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 rounded-lg bg-accent p-4 text-sm font-medium hover:opacity-70"
          >
            <User className="h-4 w-4" />
            About
          </a>
          <a
            href="/works"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 rounded-lg bg-accent p-4 text-sm font-medium hover:opacity-70"
          >
            <FolderGit2 className="h-4 w-4" />
            Works
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
