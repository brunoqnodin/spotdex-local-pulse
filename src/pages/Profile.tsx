
import Navigation from "../components/Navigation";
import { User } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-primary text-white p-6 pt-10 pb-20 rounded-b-3xl shadow-md">
        <h1 className="text-2xl font-bold">Profile</h1>
        <p className="text-primary-foreground/80 mt-1">Your SpotDex account</p>
      </div>

      <div className="px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-center mb-6">
            <div className="rounded-full bg-primary/10 p-4">
              <User className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-center">Demo User</h2>
          <p className="text-gray-500 text-center mb-6">user@example.com</p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Subscription</h3>
              <p className="text-sm text-gray-600">Basic+ Member</p>
              <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-3/4"></div>
              </div>
              <p className="text-xs text-gray-400 mt-1">75% profile complete</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Activity</h3>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Check-ins</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-600">Places Saved</span>
                <span className="font-medium">5</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Preferences</h3>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Notifications</span>
                <span className="font-medium">On</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-600">Location Tracking</span>
                <span className="font-medium">While Using</span>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-6 py-3 bg-gray-100 text-gray-600 rounded-lg font-medium">
            Sign Out
          </button>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Profile;
