import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  AlertTriangle,
  Calendar,
  Info,
  Megaphone,
  Pin,
  Clock,
} from "lucide-react";

const noticesData = [
  {
    id: 1,
    title: "Water Supply Disruption - Urgent",
    description: "Due to maintenance work on the main water pipeline, water supply will be disrupted on 28th January 2026 from 10:00 AM to 2:00 PM. Residents are requested to store sufficient water beforehand.",
    type: "emergency",
    date: "26 Jan 2026",
    pinned: true,
  },
  {
    id: 2,
    title: "Annual General Meeting",
    description: "The Annual General Meeting of Green Valley Apartments Society will be held on 15th February 2026 at 5:00 PM in the Community Hall. All members are requested to attend.",
    type: "event",
    date: "25 Jan 2026",
    pinned: true,
  },
  {
    id: 3,
    title: "New Parking Guidelines",
    description: "Updated parking guidelines will be effective from 1st February 2026. Key changes include: designated visitor parking slots, new sticker system for resident vehicles, and penalties for violations.",
    type: "info",
    date: "24 Jan 2026",
    pinned: false,
  },
  {
    id: 4,
    title: "Maintenance Fee Revision",
    description: "The maintenance fee has been revised from ₹5,000 to ₹5,500 per month effective from 1st March 2026. The increase is due to enhanced security services and garden maintenance.",
    type: "announcement",
    date: "22 Jan 2026",
    pinned: false,
  },
  {
    id: 5,
    title: "Lift Maintenance Schedule",
    description: "Periodic maintenance of lifts in Tower 1 and Tower 2 will be conducted on 30th January 2026. Tower 1 lifts: 9 AM - 12 PM, Tower 2 lifts: 2 PM - 5 PM.",
    type: "info",
    date: "20 Jan 2026",
    pinned: false,
  },
  {
    id: 6,
    title: "Republic Day Celebration",
    description: "Join us for Republic Day celebrations on 26th January at 8:00 AM in the central lawn. Flag hoisting ceremony followed by cultural programs and refreshments.",
    type: "event",
    date: "18 Jan 2026",
    pinned: false,
  },
];

const typeConfig: Record<string, { icon: typeof AlertTriangle; label: string; bg: string; border: string; iconColor: string }> = {
  emergency: {
    icon: AlertTriangle,
    label: "Emergency",
    bg: "bg-red-50",
    border: "border-red-200",
    iconColor: "text-red-600",
  },
  event: {
    icon: Calendar,
    label: "Event",
    bg: "bg-primary-light",
    border: "border-primary/20",
    iconColor: "text-primary",
  },
  info: {
    icon: Info,
    label: "Information",
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconColor: "text-blue-600",
  },
  announcement: {
    icon: Megaphone,
    label: "Announcement",
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconColor: "text-amber-600",
  },
};

const Notices = () => {
  const [filter, setFilter] = useState("all");

  const filteredNotices = noticesData.filter(
    (n) => filter === "all" || n.type === filter
  );

  const pinnedNotices = filteredNotices.filter((n) => n.pinned);
  const otherNotices = filteredNotices.filter((n) => !n.pinned);

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">
            Society Notices
          </h1>
          <p className="text-muted-foreground">
            Stay updated with important announcements and events.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: "all", label: "All" },
            { id: "emergency", label: "Emergency" },
            { id: "event", label: "Events" },
            { id: "announcement", label: "Announcements" },
            { id: "info", label: "Information" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === f.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-muted-foreground hover:bg-muted shadow-card"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Pinned Notices */}
        {pinnedNotices.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Pin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Pinned Notices
              </span>
            </div>
            <div className="space-y-4">
              {pinnedNotices.map((notice) => {
                const config = typeConfig[notice.type];
                return (
                  <div
                    key={notice.id}
                    className={`${config.bg} border-2 ${config.border} rounded-2xl p-6 transition-all hover:shadow-md`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0`}>
                        <config.icon className={`w-6 h-6 ${config.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.iconColor} border ${config.border}`}>
                            {config.label}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {notice.date}
                          </span>
                        </div>
                        <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                          {notice.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {notice.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Other Notices */}
        {otherNotices.length > 0 && (
          <div>
            <span className="text-sm font-medium text-foreground mb-4 block">
              Recent Notices
            </span>
            <div className="space-y-4">
              {otherNotices.map((notice) => {
                const config = typeConfig[notice.type];
                return (
                  <div
                    key={notice.id}
                    className="bg-white rounded-2xl shadow-card p-6 transition-all hover:shadow-floating card-hover"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center flex-shrink-0`}>
                        <config.icon className={`w-5 h-5 ${config.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.iconColor}`}>
                            {config.label}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {notice.date}
                          </span>
                        </div>
                        <h3 className="font-medium text-foreground mb-2">
                          {notice.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {notice.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {filteredNotices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No notices found.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Notices;
