import { Bell, Search, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function TopNavbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between mb-8">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search complaints, notices..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-border dark:border-gray-700 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="relative w-10 h-10 rounded-xl bg-white dark:bg-gray-800 shadow-card flex items-center justify-center hover:shadow-floating transition-all"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-muted-foreground" />
          ) : (
            <Sun className="w-5 h-5 text-accent" />
          )}
        </button>

        {/* Notifications */}
        <button className="relative w-10 h-10 rounded-xl bg-white dark:bg-gray-800 shadow-card flex items-center justify-center hover:shadow-floating transition-all">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 pl-4 pr-3 py-2 rounded-xl bg-white dark:bg-gray-800 shadow-card hover:shadow-floating transition-all">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-foreground">Rajesh Sharma</p>
            <p className="text-xs text-muted-foreground">A-402, Tower 1</p>
          </div>
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
            <span className="text-sm font-medium text-white">RS</span>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
