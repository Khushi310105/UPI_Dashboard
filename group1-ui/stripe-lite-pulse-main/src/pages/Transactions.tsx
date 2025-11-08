import { DashboardLayout } from "@/components/DashboardLayout";

export default function Transactions() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <p className="text-muted-foreground">View all your transaction history.</p>
      </div>
    </DashboardLayout>
  );
}
