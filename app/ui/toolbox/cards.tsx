import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  FingerPrintIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
  password: FingerPrintIcon,
};

export function Card({
  title,
  type,
  href,
}: {
  title: string;
  type: 'invoices' | 'customers' | 'pending' | 'collected' | 'password';
  href: string;
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-300 p-2 shadow-sm">
      <Link href={href}>
        <div className="flex p-4">
          {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
          <h3 className="ml-2 text-sm font-medium">{title}</h3>
        </div>
      </Link>
    </div>
  );
}
