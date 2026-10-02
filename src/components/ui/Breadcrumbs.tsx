// src/components/ui/Breadcrumbs.tsx
import Link from 'next/link';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import { SITE_CONFIG } from '@/lib/config';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export default function Breadcrumbs({ items, dark = false }: BreadcrumbsProps) {
  const schemaItems = [
    { name: 'Home', url: SITE_CONFIG.url },
    ...items.map((item, i) => ({
      name: item.label,
      url: item.href ? `${SITE_CONFIG.url}${item.href}` : SITE_CONFIG.url,
    })),
  ];

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav
        className="breadcrumb"
        aria-label="Breadcrumb"
        style={{ color: dark ? 'rgba(255,255,255,0.55)' : undefined }}
      >
        <div className="breadcrumb-item">
          <Link
            href="/"
            style={{ color: dark ? 'rgba(255,255,255,0.55)' : undefined }}
          >
            Home
          </Link>
        </div>
        {items.map((item, index) => (
          <div key={index} className="breadcrumb-item">
            <span className="breadcrumb-separator" aria-hidden="true">›</span>
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                style={{ color: dark ? 'rgba(255,255,255,0.55)' : undefined }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                style={{ color: dark ? 'rgba(255,255,255,0.85)' : 'var(--color-navy)' }}
              >
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
