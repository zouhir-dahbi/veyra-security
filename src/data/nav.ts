export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Residential',
    href: '/residential',
    children: [
      { label: 'Residential Security Cameras', href: '/residential#cameras' },
      { label: 'Residential Access Control', href: '/residential#access-control' },
      { label: 'Security Camera Upgrades', href: '/residential#upgrades' },
      { label: 'Residential Security Assessment', href: '/contact?type=residential' },
    ],
  },
  {
    label: 'Commercial',
    href: '/commercial',
    children: [
      { label: 'Commercial Security Cameras', href: '/commercial#cameras' },
      { label: 'Commercial Access Control', href: '/commercial#access-control' },
      { label: 'Security System Upgrades', href: '/commercial#upgrades' },
      { label: 'Maintenance & Support', href: '/commercial#maintenance' },
      { label: 'Commercial Security Assessment', href: '/contact?type=commercial' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Security Cameras', href: '/services#cameras' },
      { label: 'Access Control', href: '/services#access-control' },
      { label: 'Security System Upgrades', href: '/services#upgrades' },
      { label: 'Maintenance & Support', href: '/services#maintenance' },
      { label: 'Security Assessments', href: '/services#assessments' },
    ],
  },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
