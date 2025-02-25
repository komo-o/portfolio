import { Home, User, FolderGit2, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white dark:bg-background shadow-md">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderGit2 className="h-6 w-6" />
            <span className="text-lg font-semibold">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-medium transition-all duration-300 hover:shadow-md"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/about"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-medium transition-all duration-300 hover:shadow-md"
                  >
                    <User className="mr-2 h-4 w-4" />
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/works"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-medium transition-all duration-300 hover:shadow-md"
                  >
                    <FolderGit2 className="mr-2 h-4 w-4" />
                    Works
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg shadow-sm hover:shadow-md"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-white dark:bg-background sm:w-[400px]"
              >
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-4">
                  <a
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 rounded-lg bg-accent p-4 text-sm font-medium transition-all duration-300 hover:shadow-md"
                  >
                    <Home className="h-4 w-4" />
                    Home
                  </a>
                  <a
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 rounded-lg bg-accent p-4 text-sm font-medium transition-all duration-300 hover:shadow-md"
                  >
                    <User className="h-4 w-4" />
                    About
                  </a>
                  <a
                    href="/works"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 rounded-lg bg-accent p-4 text-sm font-medium transition-all duration-300 hover:shadow-md"
                  >
                    <FolderGit2 className="h-4 w-4" />
                    Works
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
