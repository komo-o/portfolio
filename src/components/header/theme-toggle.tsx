import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    window.localStorage.setItem("theme", newTheme);
  }

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className="h-10 w-10 rounded-lg bg-[hsl(0,0%,12%)] dark:bg-[hsl(39,27%,93%)] transition-all duration-300 hover:bg-[hsl(0,0%,12%)] hover:opacity-70"
    >
      <Moon className="absolute h-5 w-5 rotate-0 scale-100 text-[hsl(39,27%,93%)] transition-all dark:-rotate-90 dark:scale-0" />
      <Sun className="absolute h-5 w-5 rotate-90 scale-0 text-[hsl(0,0%,12%)] transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
