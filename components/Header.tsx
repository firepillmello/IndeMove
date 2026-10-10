'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import { site } from '@/config/site';
import { navigation } from '@/data/navigation';

export function Wordmark() {
  return <span className="wordmark"><span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>{site.name}<span className="brand-dot">.</span></span>;
}

export function MobileNav({ close }: { close: () => void }) {
  return <nav aria-label="Mobile navigation" className="mobile-nav">
    {navigation.map(item => <Link key={item.href} href={item.href} onClick={close}>{item.label}<ArrowRight size={22} /></Link>)}
    <Link className="button" href="/contact" onClick={close}>Talk to our team <ArrowRight size={22} /></Link>
    <a className="mobile-menu-phone" href={site.phoneHref}><Phone size={22} /> Call {site.phone}</a>
  </nav>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const mobileToggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        mobileToggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (header.current && !header.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', escape); document.removeEventListener('pointerdown', outside); };
  }, [open]);
  return <header ref={header} className="site-header">
    <div className="utility"><div className="container utility-inner"><span>Local people. Help at home.</span><div><a href={site.phoneHref}><Phone size={17} />{site.phone}</a><span className="utility-hours">{site.hours}</span></div></div></div>
    <div className="container header-inner">
      <Link href="/" aria-label={`${site.name} home`}><Wordmark /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.filter(item => item.primary).map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? 'page' : undefined}>{item.label}</Link>)}</nav>
      <Link href="/contact" className="button header-cta">Talk to us <ArrowRight size={20} /></Link>
      <a href={site.phoneHref} className="mobile-call"><Phone size={20} /> Call</a>
      <button ref={mobileToggle} className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}<span>Menu</span></button>
    </div>
    {open && <div id="mobile-navigation"><MobileNav close={() => setOpen(false)} /></div>}
  </header>;
}

export function StickyMobileActions() {
  return <div className="sticky-mobile-actions"><a href={site.phoneHref}><Phone size={21} /> Call us</a><Link href="/contact">Get free advice <ArrowRight size={21} /></Link></div>;
}
