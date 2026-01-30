import { Bell, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

export function TopNavbar() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="h-16 bg-white shadow-card rounded-2xl flex items-center justify-between px-6 mb-6 animate-fade-in">
      {/* Search */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search complaints, notices..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
              3
            </span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-floating p-4 animate-scale-in z-50">
              <h3 className="font-display font-semibold text-foreground mb-3">
                Notifications
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Complaint Updated", desc: "Your water leakage complaint is in progress", time: "2h ago" },
                  { title: "New Notice", desc: "Annual maintenance schedule released", time: "5h ago" },
                  { title: "Complaint Resolved", desc: "Parking issue has been resolved", time: "1d ago" },
                ].map((notif, i) => (
                  <div key={i} className="p-3 rounded-xl bg-muted/50 hover:bg-muted cursor-pointer transition-colors">
                    <p className="text-sm font-medium text-foreground">{notif.title}</p>
                    <p className="text-xs text-muted-foreground">{notif.desc}</p>
                    <p className="text-xs text-primary mt-1">{notif.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-semibold">RS</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-foreground">Rajesh Sharma</p>
            <p className="text-xs text-muted-foreground">A-402, Tower 1</p>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}
