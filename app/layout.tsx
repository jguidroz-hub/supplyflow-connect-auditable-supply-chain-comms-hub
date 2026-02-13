import type { Metadata } from 'next';
import { Providers } from './providers';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SupplyFlow Connect - Auditable supply chain comms hub',
  description: 'Value Proposition: Replaces informal messaging (WhatsApp) for supply chain teams, providing a centralized, auditable platform for orders, dispatches, vendor comms, and approvals, ensuring traceability and compliance for logistics managers and procurement teams.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
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
        </Providers>
      </body>
    </html>
  );
}
