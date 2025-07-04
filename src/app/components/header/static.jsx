import {
  UserIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';
import { PlayCircleIcon, PhoneIcon } from '@heroicons/react/20/solid';

export const products = [
  {
    name: 'Recruitment Services',
    description: 'Find the right talent for your organization.',
    href: '#',
    icon: UserIcon,
  },
  {
    name: 'Temporary Staffing',
    description: 'Flexible staffing for short-term or project needs.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'HR Consulting',
    description: 'Streamline HR processes and boost efficiency.',
    href: '#',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Payroll Management',
    description: 'Accurate and timely payroll processing.',
    href: '#',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Training & Development',
    description: 'Enhance workforce skills and productivity.',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'Permanent Staffing',
    description: 'Build a strong, reliable team for your business.',
    href: '#',
    icon: BriefcaseIcon,
  },
];

export const callsToAction = [
  // { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];