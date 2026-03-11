import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin — BRik Goods',
};

/**
 * Admin layout — standalone, no Navbar or Footer.
 * This replaces the root layout for all /admin/* routes.
 *
 * In Next.js App Router, a nested layout.tsx wraps its children
 * BUT the root layout still applies. To truly exclude the navbar/footer
 * we use a route group trick: the admin content is rendered directly
 * and we override the body via the page itself (which is 'use client'
 * and controls its own full-page rendering).
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
