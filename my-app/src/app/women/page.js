import Link from 'next/link';

export default function WomenPage() {
    const womenImages = [
        { id: 1, src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop", title: "Fashion Trends" },
        { id: 2, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop", title: "Elegant Dresses" },
        { id: 3, src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop", title: "Casual Wear" },
        { id: 4, src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop", title: "Street Style" },
        { id: 5, src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop", title: "Boho Chic" },
        { id: 6, src: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop", title: "Office Wear" },
        { id: 7, src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop", title: "Vintage Dress" },
        { id: 8, src: "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=800&auto=format&fit=crop", title: "Modern Style" },
        { id: 9, src: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=800&auto=format&fit=crop", title: "Urban Fashion" },
        { id: 10, src: "https://images.unsplash.com/photo-1524041255072-7da0525d6b34?q=80&w=800&auto=format&fit=crop", title: "Chic Look" },
        { id: 11, src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop", title: "Summer Collection" },
        { id: 12, src: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop", title: "Floral Print" },
        { id: 13, src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop", title: "Evening Gown" },
        { id: 14, src: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop", title: "Party Wear" },
        { id: 15, src: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=800&auto=format&fit=crop", title: "Spring Look" },
        { id: 16, src: "https://images.unsplash.com/photo-1475180429745-7b1b651ccd7f?q=80&w=800&auto=format&fit=crop", title: "Resort Wear" },
        { id: 17, src: "https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?q=80&w=800&auto=format&fit=crop", title: "Minimalist" },
        { id: 18, src: "https://images.unsplash.com/photo-1519657337289-077653f724ed?q=80&w=800&auto=format&fit=crop", title: "Formal Style" },
        { id: 19, src: "https://images.unsplash.com/photo-1478812374698-bf5d870ce1db?q=80&w=800&auto=format&fit=crop", title: "Cozy Knits" },
        { id: 20, src: "https://images.unsplash.com/photo-1485462537346-5b7f7e915156?q=80&w=800&auto=format&fit=crop", title: "Everyday Wear" },
    ];

    return (
        <>
            <section className="collection-intro women-intro">
                <div className="intro-overlay">
                    <div className="intro-badge">✨ EXCLUSIVE DEALS</div>
                    <h1 className="intro-title">Women&apos;s <span>Collection</span></h1>
                    <p className="intro-subtitle">Elegance meets confidence. Discover your signature look.</p>
                    <div className="intro-offer-strip">
                        <span>💃 Up to <strong>60% OFF</strong> on Dresses</span>
                        <span className="divider">|</span>
                        <span>👗 Buy 3 Get 1 <strong>FREE</strong> on Tops</span>
                        <span className="divider">|</span>
                        <span>🎁 <strong>Free Gift</strong> on orders above ₹1499</span>
                    </div>
                    <a href="#women-grid" className="intro-cta women-cta">Shop Now →</a>
                </div>
            </section>

            <section id="women-grid" className="grid-collection">
                {womenImages.map((item) => (
                    <div className="grid-item" key={item.id}>
                        <img src={item.src} alt={item.title} loading="lazy" />
                        <div className="grid-overlay">
                            <h3>{item.title}</h3>
                            <p>Shop Now →</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
