// Import the sidebar component
import DashboardSidebar from './DashboardSidebar';

// DashboardLayout Component
// This layout wraps the dashboard pages with a sidebar and main content area
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex gap-4 min-h-screen">
      {/* Sidebar Section */}
      <DashboardSidebar />
      
      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;