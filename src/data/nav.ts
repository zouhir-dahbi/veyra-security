export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Smart Home',
    href: '/smart-home',
    children: [
      { label: 'Smart Home Installation', href: '/smart-home#installation' },
      { label: 'Smart Locks & Doorbells', href: '/smart-home#locks-doorbells' },
      { label: 'Smart Devices & Automation', href: '/smart-home#devices-automation' },
    ],
  },
  {
    label: 'Wi-Fi & Networking',
    href: '/wifi-networking',
    children: [
      { label: 'Whole-Home Wi-Fi', href: '/wifi-networking#whole-home-wifi' },
      { label: 'Wi-Fi Troubleshooting', href: '/wifi-networking#troubleshooting' },
      { label: 'Ethernet & Wired Networking', href: '/wifi-networking#ethernet' },
      { label: 'Home Office Networking', href: '/wifi-networking#home-office' },
    ],
  },
  {
    label: 'Security',
    href: '/security',
    children: [
      { label: 'Security Cameras', href: '/security#cameras' },
      { label: 'PoE Camera Systems', href: '/security#poe-systems' },
      { label: 'Camera Upgrades', href: '/security#upgrades' },
      { label: 'Smart Security', href: '/security#smart-security' },
    ],
  },
  {
    label: 'Installation',
    href: '/installation',
    children: [
      { label: 'TV Mounting', href: '/installation#tv-mounting' },
      { label: 'Wire & Cable Management', href: '/installation#cable-management' },
      { label: 'Technology Installation', href: '/installation#technology-installation' },
    ],
  },
  { label: 'Small Business', href: '/small-business' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
