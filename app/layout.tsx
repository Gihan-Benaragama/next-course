import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex min-h-screen`}>
        <SideNav />
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </body>
    </html>
  );
}