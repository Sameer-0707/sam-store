"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-grid">
                <div className="footer-col brand-col">
                    <h3 className="footer-logo">SamStore.</h3>
                    <p className="footer-desc">Premium quality fashion for those who dare to stand out. Explore our latest collections today.</p>
                </div>
                <div className="footer-col">
                    <h4>Shop</h4>
                    <ul>
                        <li><Link href="/men">Men's Wear</Link></li>
                        <li><Link href="/women">Women's Wear</Link></li>
                        <li><Link href="/footwear">Footwear</Link></li>
                        <li><Link href="/accessories">Accessories</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Help</h4>
                    <ul>
                        <li><Link href="#">Track Order</Link></li>
                        <li><Link href="#">Returns</Link></li>
                        <li><Link href="#">Shipping Info</Link></li>
                        <li><Link href="#">FAQs</Link></li>
                    </ul>
                </div>
                <div className="footer-col newsletter-col">
                    <h4>Stay in the loop</h4>
                    <p>Subscribe for updates, exclusive offers, and more.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 SamStore. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                    <a href="#" aria-label="Twitter"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                    <a href="#" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                </div>
            </div>
        </div>
    </footer>
  );
}
