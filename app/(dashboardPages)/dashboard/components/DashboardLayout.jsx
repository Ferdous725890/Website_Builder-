import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = ({ children }) => {
                    
  return (
    <div className="flex gap-4 min-h-screen">
      <DashboardSidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default DashboardLayout;