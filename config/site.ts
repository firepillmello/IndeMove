export const site = {
  name: 'IndeMove', tagline: 'Helping you move safely and live independently.',
  phone: '(555) 014-2020', phoneHref: 'tel:+15550142020', email: 'hello@freedompathmobility.com',
  area: 'Greater Springfield Area', url: 'https://indemove.example',
  address: { street: '123 Independence Lane', city: 'Springfield', region: 'IL', postalCode: '62701', country: 'US' },
  hours: 'Mon–Fri, 9am–5pm', openingHours: ['Mo-Fr 09:00-17:00'],
  communities: ['Springfield', 'Chatham', 'Rochester', 'Sherman', 'Riverton', 'Pleasant Plains'],
  social: [{ label: 'Instagram', href: '/contact?reason=Social+updates' }, { label: 'Facebook', href: '/contact?reason=Social+updates' }],
  imagery: { hero: '/images/independence.jpg', heroAlt: 'An older woman enjoying time outdoors on a mobility scooter with her daughter', og: '/images/independence.jpg' },
  team: [{ name: 'Your mobility specialist', role: 'Thoughtful guidance, at your pace' }, { name: 'Your service technician', role: 'Practical help for everyday equipment' }, { name: 'Your installation team', role: 'A more accessible home, together' }],
} as const;
export const businessAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;
