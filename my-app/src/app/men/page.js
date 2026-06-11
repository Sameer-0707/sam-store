export default function MenPage() {
    const menImages = [
        { id: 1, src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop", title: "Jackets & Coats" },
        { id: 2, src: "https://images.unsplash.com/photo-1516826957135-700ede19c6ce?q=80&w=800&auto=format&fit=crop", title: "Premium Tees" },
        { id: 3, src: "https://images.unsplash.com/photo-1542272604-cb30b42f1f8b?q=80&w=800&auto=format&fit=crop", title: "Denim & Pants" },
        { id: 4, src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=800&auto=format&fit=crop", title: "Streetwear" },
        { id: 5, src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop", title: "Casual Style" },
        { id: 6, src: "https://images.unsplash.com/photo-1507680434267-dbd304059241?q=80&w=800&auto=format&fit=crop", title: "Formal Wear" },
        { id: 7, src: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=800&auto=format&fit=crop", title: "Urban Fashion" },
        { id: 8, src: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=800&auto=format&fit=crop", title: "Vintage Looks" },
        { id: 9, src: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=800&auto=format&fit=crop", title: "Outerwear" },
        { id: 10, src: "https://images.unsplash.com/photo-1520975867597-0af37a22e31e?q=80&w=800&auto=format&fit=crop", title: "Summer Vibes" },
        { id: 11, src: "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop", title: "Winter Collection" },
        { id: 12, src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop", title: "Essentials" },
        { id: 13, src: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop", title: "Street Style" },
        { id: 14, src: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=800&auto=format&fit=crop", title: "Minimalist" },
        { id: 15, src: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=800&auto=format&fit=crop", title: "Modern Classic" },
        { id: 16, src: "https://images.unsplash.com/photo-1499714608240-22fc6ad53cb2?q=80&w=800&auto=format&fit=crop", title: "Everyday Basics" },
        { id: 17, src: "https://images.unsplash.com/photo-1512411883712-4eb952cc20a7?q=80&w=800&auto=format&fit=crop", title: "Evening Wear" },
        { id: 18, src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", title: "Smart Casual" },
        { id: 19, src: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=800&auto=format&fit=crop", title: "Athleisure" },
        { id: 20, src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop", title: "Tropical Shirts" },
    ];

    return (
        <>
            <section className="collection-intro men-intro">
                <div className="intro-overlay">
                    <div className="intro-badge">🔥 LIMITED TIME OFFER</div>
                    <h1 className="intro-title">Men&apos;s <span>Collection</span></h1>
                    <p className="intro-subtitle">Redefine your style. Bold. Sharp. Unstoppable.</p>
                    <div className="intro-offer-strip">
                        <span>🎯 Up to <strong>50% OFF</strong> on Premium Jackets</span>
                        <span className="divider">|</span>
                        <span>👕 Buy 2 Get 1 <strong>FREE</strong> on Tees</span>
                        <span className="divider">|</span>
                        <span>🚚 <strong>Free Shipping</strong> above ₹999</span>
                    </div>
                    <a href="#men-grid" className="intro-cta">Shop Now →</a>
                </div>
            </section>

            <section id="men-grid" className="grid-collection">
                {menImages.map((item) => (
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
