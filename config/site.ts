// Public build-time prefix lets local assets work on GitHub project Pages.
export const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
export const site = {
  name: 'Indemove', tagline: 'Helping you move safely and live independently.',
  phone: '(555) 014-2020', phoneHref: 'tel:+15550142020', email: 'hello@indemove.example',
  area: 'Allentown & the Lehigh Valley', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://indemove.example',
  address: { street: '123 Independence Lane', city: 'Allentown', region: 'PA', postalCode: '18101', country: 'US' },
  hours: 'Mon–Fri, 9am–5pm', openingHours: ['Mo-Fr 09:00-17:00'],
  communities: ['Allentown', 'Bethlehem', 'Easton', 'Whitehall', 'Emmaus', 'Macungie'],
  social: [{ label: 'Instagram', href: '/contact?reason=Social+updates' }, { label: 'Facebook', href: '/contact?reason=Social+updates' }],
  imagery: { hero: assetPath('/images/independence.jpg'), heroAlt: 'An older woman enjoying time outdoors on a mobility scooter with her daughter', og: assetPath('/images/independence.jpg') },
  team: [{ name: 'Your mobility specialist', role: 'Thoughtful guidance, at your pace' }, { name: 'Your service technician', role: 'Practical help for everyday equipment' }, { name: 'Your installation team', role: 'A more accessible home, together' }],
} as const;
export const businessAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;
