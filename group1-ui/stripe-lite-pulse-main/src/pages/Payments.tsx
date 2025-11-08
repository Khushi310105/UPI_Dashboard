import { DashboardLayout } from "@/components/DashboardLayout";

export default function Payments() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Payments</h1>
        <p className="text-muted-foreground">Manage your payment methods and history.</p>
      </div>
    </DashboardLayout>
  );
}
