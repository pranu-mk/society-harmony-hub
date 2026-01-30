import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Droplets,
  Lightbulb,
  Car,
  Shield,
  Trees,
  HelpCircle,
  Upload,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { id: "plumbing", label: "Plumbing", icon: Droplets },
  { id: "electrical", label: "Electrical", icon: Lightbulb },
  { id: "parking", label: "Parking", icon: Car },
  { id: "security", label: "Security", icon: Shield },
  { id: "garden", label: "Garden/Landscape", icon: Trees },
  { id: "other", label: "Other", icon: HelpCircle },
];

const priorities = [
  { id: "low", label: "Low", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { id: "medium", label: "Medium", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { id: "high", label: "High", color: "bg-red-100 text-red-700 border-red-200" },
];

const RaiseComplaint = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("medium");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Complaint Submitted",
      description: "Your complaint has been registered successfully. You will receive updates via SMS and email.",
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">
            Raise a Complaint
          </h1>
          <p className="text-muted-foreground">
            Report an issue and our team will address it promptly.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Category Selection */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <label className="form-label">Select Category</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedCategory === cat.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <cat.icon
                        className={`w-6 h-6 mb-2 mx-auto ${
                          selectedCategory === cat.id
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium block ${
                          selectedCategory === cat.id
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Complaint Details */}
              <div className="bg-white rounded-2xl shadow-card p-6 space-y-5">
                <div>
                  <label className="form-label">Complaint Title</label>
                  <input
                    type="text"
                    placeholder="Brief title of your complaint"
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Description</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your issue in detail. Include location, time of occurrence, and any relevant information..."
                    className="form-input resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    placeholder="e.g., Near Lift Lobby, 4th Floor"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Attachments */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <label className="form-label">Attachments (Optional)</label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/30 transition-colors cursor-pointer">
                  <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">
                    Drag and drop files here, or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supports JPG, PNG, PDF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Priority & Submit */}
            <div className="space-y-6">
              {/* Priority */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <label className="form-label">Priority Level</label>
                <div className="space-y-3">
                  {priorities.map((priority) => (
                    <button
                      key={priority.id}
                      type="button"
                      onClick={() => setSelectedPriority(priority.id)}
                      className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                        selectedPriority === priority.id
                          ? `${priority.color} border-current`
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <span className="font-medium text-sm">{priority.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Your Details */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <label className="form-label">Your Details</label>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Name</span>
                    <span className="font-medium text-foreground">Rajesh Sharma</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Flat</span>
                    <span className="font-medium text-foreground">A-402</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Tower</span>
                    <span className="font-medium text-foreground">Tower 1</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Phone</span>
                    <span className="font-medium text-foreground">+91 98765 43210</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-primary w-full text-base py-4"
              >
                <Send className="w-5 h-5" />
                Submit Complaint
              </button>

              <p className="text-xs text-muted-foreground text-center">
                You will receive a confirmation SMS and email after submission.
              </p>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default RaiseComplaint;
