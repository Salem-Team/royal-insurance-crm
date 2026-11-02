import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

const siteUrl = "https://salem-team.github.io/royal-insurance-crm/";

export const metadata: Metadata = {
  title: "ROOTK SYSTEMS | Royal Insurance CRM Proposal",
  description:
    "عرض فني ومالي مقدم من ROOTK SYSTEMS إلى شركة Royal Insurance لتطوير نظام إدارة علاقات العملاء CRM مخصص.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "ROOTK SYSTEMS | Royal Insurance CRM Proposal",
    description:
      "عرض فني ومالي مقدم من ROOTK SYSTEMS إلى شركة Royal Insurance لتطوير نظام إدارة علاقات العملاء CRM مخصص.",
    url: siteUrl,
    siteName: "ROOTK SYSTEMS",
    locale: "ar_EG",
    type: "website",
    images: [{ url: "/rootk-logo.png", width: 670, height: 625, alt: "ROOTK SYSTEMS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROOTK SYSTEMS | Royal Insurance CRM Proposal",
    description:
      "عرض فني ومالي مقدم من ROOTK SYSTEMS إلى شركة Royal Insurance لتطوير نظام إدارة علاقات العملاء CRM مخصص.",
  },
  icons: {
    icon: "/rootk-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
