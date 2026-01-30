import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  User,
  Mail,
  Phone,
  Building2,
  Home,
  Edit3,
  Save,
  X,
  Shield,
  Calendar,
  Users,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "Rajesh Sharma",
    email: "rajesh.sharma@email.com",
    phone: "+91 98765 43210",
    alternatePhone: "+91 87654 32109",
  });

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">
            My Profile
          </h1>
          <p className="text-muted-foreground">
            View and manage your personal information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-card p-6 text-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-display font-bold text-white">
                  RS
                </span>
              </div>
              <h2 className="font-display font-semibold text-xl text-foreground mb-1">
                Rajesh Sharma
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Resident since 2019
              </p>

              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <Home className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Flat Number</p>
                    <p className="text-sm font-medium text-foreground">A-402</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <Building2 className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Tower</p>
                    <p className="text-sm font-medium text-foreground">Tower 1</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Family Members</p>
                    <p className="text-sm font-medium text-foreground">4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Editable Info */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-lg text-foreground">
                  Contact Information
                </h3>
                {isEditing ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="btn-secondary px-4 py-2 text-sm"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="btn-primary px-4 py-2 text-sm"
                    >
                      <Save className="w-4 h-4" />
                      Save
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="btn-secondary px-4 py-2 text-sm"
                  >
                    <Edit3 className="w-4 h-4" />
                    Edit
                  </button>
                )}
              </div>

              <div className="space-y-5">
                <div>
                  <label className="form-label flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    disabled={!isEditing}
                    className="form-input disabled:bg-muted disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="form-label flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    disabled={!isEditing}
                    className="form-input disabled:bg-muted disabled:cursor-not-allowed"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      Primary Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      disabled={!isEditing}
                      className="form-input disabled:bg-muted disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="form-label flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      Alternate Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.alternatePhone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          alternatePhone: e.target.value,
                        })
                      }
                      disabled={!isEditing}
                      className="form-input disabled:bg-muted disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Read-only Property Info */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold text-lg text-foreground">
                  Property Details
                </h3>
                <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  Read Only
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-4 rounded-xl bg-muted/50">
                  <p className="text-xs text-muted-foreground mb-1">Society Name</p>
                  <p className="font-medium text-foreground">
                    Green Valley Apartments
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <p className="text-xs text-muted-foreground mb-1">Flat Type</p>
                  <p className="font-medium text-foreground">3 BHK</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <p className="text-xs text-muted-foreground mb-1">Carpet Area</p>
                  <p className="font-medium text-foreground">1,250 sq.ft.</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <p className="text-xs text-muted-foreground mb-1">Parking Slot</p>
                  <p className="font-medium text-foreground">P-42, Basement 1</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <p className="text-xs text-muted-foreground mb-1">
                    Ownership Type
                  </p>
                  <p className="font-medium text-foreground">Owner</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <p className="text-xs text-muted-foreground mb-1">
                    Member Since
                  </p>
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    March 2019
                  </p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                To update property details, please contact the society office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
