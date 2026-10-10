import { Link, useRouterState } from '@tanstack/react-router';
import { useEffect, useState, type ReactNode } from 'react';
import { ArrowUpRight, Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/soec-logo.png';
import { clinic, services } from '@/lib/clinic';
const navigation = [{ to: '/', label: 'Overview' }, { to: '/services', label: 'Our care' }, { to: '/eeg-test', label: 'EEG testing' }, { to: '/about', label: 'Our specialist' }, { to: '/resources', label: 'Resources' }, { to: '/your-visit', label: 'Your visit' }] as const;
export function ClinicLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  return <div className="clinic-site">
    <header className="site-header"><div className="header-inner">
      <Link to="/" className="brand" aria-label="SOEC home"><img src={logo} alt="SOEC" width={1295} height={422} className="brand-logo"/><span className="brand-caption">Southern Ontario<br/>Epilepsy Clinic</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} className={pathname === item.to ? 'nav-link active' : 'nav-link'}>{item.label}</Link>)}</nav>
      <Button variant="clinic" asChild className="header-contact"><Link to="/contact">Get in touch <ArrowUpRight/></Link></Button>
      <Button variant="ghost" size="icon" className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X/> : <Menu/>}</Button>
    </div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16}/></Link>)}<Link to="/contact" onClick={() => setOpen(false)}>Get in touch<ArrowUpRight size={16}/></Link></nav>}</header>
    <main>{children}</main>
    <section className="contact-band"><div className="container contact-band-inner"><div><span className="eyebrow">YOUR NEXT STEP</span><h2>Let’s move forward, together.</h2></div><Button variant="soft" size="spacious" asChild><Link to="/contact">Contact our clinic <ArrowUpRight/></Link></Button></div></section>
    <footer className="site-footer container"><div className="footer-top"><Link to="/" className="brand"><img src={logo} alt="SOEC" width={1295} height={422} className="brand-logo"/><span className="brand-caption">Southern Ontario<br/>Epilepsy Clinic</span></Link><p>Specialist knowledge.<br/>Care that sees the whole person.</p><div className="footer-contact"><a href={`tel:${clinic.phone}`}><Phone size={15}/>{clinic.phone}</a><a href={clinic.directions} target="_blank" rel="noreferrer"><MapPin size={15}/><span>{clinic.address}<br/>{clinic.city}</span></a></div></div><nav className="footer-explore" aria-label="Explore clinic care">{services.map(s => <Link key={s.to} to={s.to}>{s.title}<ArrowUpRight size={14}/></Link>)}<Link to="/your-visit">Your first visit<ArrowUpRight size={14}/></Link></nav><div className="footer-bottom"><span>© {new Date().getFullYear()} Southern Ontario Epilepsy Clinic</span><span>Toronto, Ontario · Patient-centred care</span><a href="https://seizuredoc.com" target="_blank" rel="noreferrer">Clinic information source <ArrowUpRight size={12}/></a></div></footer>
  </div>;
}
export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <section className="page-intro"><div className="container"><span className="eyebrow"><span className="status-dot"/>{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>; }
