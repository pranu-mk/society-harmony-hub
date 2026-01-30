import {
  ClipboardList,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const summaryData = [
  {
    title: "Total Complaints",
    value: "12",
    change: "+2 this month",
    icon: ClipboardList,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Pending",
    value: "3",
    change: "Awaiting action",
    icon: Clock,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "In Progress",
    value: "4",
    change: "Being resolved",
    icon: AlertCircle,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Resolved",
    value: "5",
    change: "This month: 3",
    icon: CheckCircle2,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {summaryData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-5 shadow-card card-hover cursor-pointer"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center`}
            >
              <item.icon className={`w-6 h-6 ${item.iconColor}`} />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
          <p className="font-display text-3xl font-bold text-foreground mb-1">
            {item.value}
          </p>
          <p className="text-xs text-muted-foreground">{item.change}</p>
        </div>
      ))}
    </div>
  );
}
