import DashboardLayout from "./components/DashboardLayout";

export default function Layout({ children }) {
                    return <div className="container mx-auto mt-10">
                                        <DashboardLayout>{children}</DashboardLayout>
                    </div>;
}