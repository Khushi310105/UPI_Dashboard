import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, TrendingUp, Shield, BarChart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        
        <div className="relative">
          {/* Navigation */}
          <nav className="border-b">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Zap className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">Dashboard</span>
              </div>
              <div className="flex items-center gap-4">
                <Link to="/auth">
                  <Button variant="ghost">Sign in</Button>
                </Link>
                <Link to="/auth">
                  <Button>Get Started</Button>
                </Link>
              </div>
            </div>
          </nav>

          {/* Hero content */}
          <div className="container mx-auto px-4 py-20 text-center">
            <div className="mx-auto max-w-3xl space-y-8">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                Manage your business
                <span className="block text-primary">with confidence</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Track payments, analyze performance, and grow your revenue with our
                powerful SaaS dashboard. Built for modern businesses.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link to="/auth">
                  <Button size="lg" className="text-base">
                    Start Free Trial
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-base">
                  View Demo
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mx-auto mt-20 grid max-w-5xl gap-8 md:grid-cols-3">
              <div className="rounded-2xl border bg-card p-6 text-left transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Real-time Analytics</h3>
                <p className="text-muted-foreground">
                  Monitor your revenue and performance with live updates and detailed insights.
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6 text-left transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Secure Payments</h3>
                <p className="text-muted-foreground">
                  Industry-leading security for all your transactions and customer data.
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6 text-left transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Detailed Reports</h3>
                <p className="text-muted-foreground">
                  Generate comprehensive reports to understand your business better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to get started?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of businesses already using our platform.
          </p>
          <Link to="/auth">
            <Button size="lg">Create your account</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
