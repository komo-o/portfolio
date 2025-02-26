import { Home, User, FolderGit2, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/common/header/theme-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../../ui/sheet";
import { useState } from "react";
import { Button } from "../../ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white dark:bg-background shadow-md dark:border-accent">
      <div className="flex items-center justify-between max-w-7xl px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        <a
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-all duration-300"
        >
          <Home className="h-6 w-6" />
          <span className="text-lg font-semibold">Portfolio</span>
        </a>

        <div className="flex items-center gap-4">
          {/* PC Tablet Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2">
              <li className="rounded-lg bg-accent h-10 w-24 transition-all duration-300 hover:shadow-md">
                <a
                  href="/about"
                  className="flex justify-center items-center gap-2 w-full h-full hover:opacity-80 transition-all duration-300"
                >
                  <User className="h-4 w-4" />
                  About
                </a>
              </li>
              <li className="rounded-lg bg-accent h-10 w-24 transition-all duration-300 hover:shadow-md">
                <a
                  href="/works"
                  className="flex justify-center items-center gap-2 w-full h-full hover:opacity-80 transition-all duration-300"
                >
                  <FolderGit2 className="h-4 w-4" />
                  Works
                </a>
              </li>
            </ul>
          </nav>

          <ThemeToggle />

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg shadow-sm hover:shadow-md hover:opacity-80 transition-all duration-300"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-white dark:bg-background sm:w-[400px] [&_button[data-state]]:hidden"
            >
              <SheetHeader>
                <SheetTitle className="text-left h-8">
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 hover:opacity-80 transition-all duration-300 h-full"
                  >
                    <Home className="h-6 w-6" />
                    <span className="text-lg font-semibold">Portfolio</span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                <a
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg bg-accent p-4 text-sm font-medium transition-all duration-300 hover:shadow-md hover:opacity-80"
                >
                  <User className="h-4 w-4" />
                  About
                </a>
                <a
                  href="/works"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg bg-accent p-4 text-sm font-medium transition-all duration-300 hover:shadow-md hover:opacity-80"
                >
                  <FolderGit2 className="h-4 w-4" />
                  Works
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
