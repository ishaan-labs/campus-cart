import Link from "next/link";

import { Logo } from "@/components/layout/logo";

const footerLinks = {
  marketplace: [
    { label: "Browse All", href: "#" },
    { label: "Categories", href: "#categories" },
    { label: "Featured", href: "#featured" },
    { label: "Sell an Item", href: "#sell" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Safety Tips", href: "#" },
    { label: "Report a Scam", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Community Guidelines", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              The trusted marketplace for SRM students. Buy and sell on campus —
              safely, quickly, and sustainably.
            </p>
          </div>

          <FooterColumn title="Marketplace" links={footerLinks.marketplace} />
          <FooterColumn title="Support" links={footerLinks.support} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Campus Cart. Built for SRM students.
          </p>
          <p className="text-sm text-muted-foreground">
            Exclusively for{" "}
            <span className="font-medium text-foreground">@srmist.edu.in</span>{" "}
            accounts
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
