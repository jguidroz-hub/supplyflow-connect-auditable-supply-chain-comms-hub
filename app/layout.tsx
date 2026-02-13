import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SupplyFlow Connect - Auditable supply chain comms hub',
  description: 'Value Proposition: Replaces informal messaging (WhatsApp) for supply chain teams, providing a centralized, auditable platform for orders, dispatches, vendor comms, and approvals, ensuring traceability and compliance for logistics managers and procurement teams.

Target Customer: Small to medium-sized manufacturing, wholesale, and logistics companies with complex supply chains relying on informal communication channels.

---
Category: Micro-SaaS
Target Market: Small to medium-sized manufacturing, wholesale, and logistics companies with complex supply chains relying on informal communication channels.
Source Hypothesis ID: 8cd592cc-2420-427c-b501-564a5207199b
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">SupplyFlow Connect - Auditable supply chain comms hub</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
