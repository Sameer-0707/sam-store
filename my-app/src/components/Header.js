"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
            <Link href="/" className="logo">
                <span className="logo-text">SamStore.</span>
            </Link>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
                    <li><Link href="/men" className={pathname === '/men' ? 'active' : ''}>Men</Link></li>
                    <li><Link href="/women" className={pathname === '/women' ? 'active' : ''}>Women</Link></li>
                    <li><Link href="/accessories" className={pathname === '/accessories' ? 'active' : ''}>Accessories</Link></li>
                    <li><Link href="/footwear" className={pathname === '/footwear' ? 'active' : ''}>Footwear</Link></li>
                </ul>
            </nav>
            <div className="nav-icons">
                <button aria-label="Search" className="icon-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
                <button aria-label="Cart" className="icon-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                </button>
            </div>
        </div>
    </header>
  );
}
