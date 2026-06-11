export default function FootwearPage() {
    const footwearImages = [
        { id: 1, src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop", title: "Air Jordan Retro" },
        { id: 2, src: "https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=800&auto=format&fit=crop", title: "Nike Air Max" },
        { id: 3, src: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop", title: "Classic Sneakers" },
        { id: 4, src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop", title: "Air Jordan 1 High" },
        { id: 5, src: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop", title: "Air Jordan 4 Retro" },
        { id: 6, src: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop", title: "Premium Kicks" },
        { id: 7, src: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop", title: "Jordan 3" },
        { id: 8, src: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop", title: "Jordan 11 Retro" },
        { id: 9, src: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=800&auto=format&fit=crop", title: "Limited Edition" },
        { id: 10, src: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=800&auto=format&fit=crop", title: "Court Ready" },
        { id: 11, src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop", title: "Running Shoes" },
        { id: 12, src: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=800&auto=format&fit=crop", title: "Street Kicks" },
        { id: 13, src: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop", title: "High Tops" },
        { id: 14, src: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop", title: "Collab Edition" },
        { id: 15, src: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=800&auto=format&fit=crop", title: "Jordan Mid" },
    ];

    return (
        <>
            <section className="collection-intro footwear-intro">
                <div className="intro-overlay">
                    <div className="intro-badge">👟 NEW DROP ALERT</div>
                    <h1 className="intro-title">Footwear <span>Collection</span></h1>
                    <p className="intro-subtitle">Step into greatness. Exclusive Jordans &amp; premium kicks.</p>
                    <div className="intro-offer-strip">
                        <span>🔥 Up to <strong>40% OFF</strong> on Jordans</span>
                        <span className="divider">|</span>
                        <span>👟 Buy Any 2 <strong>Save ₹500</strong></span>
                        <span className="divider">|</span>
                        <span>🚚 <strong>Free Shipping</strong> on all Footwear</span>
                    </div>
                    <a href="#footwear-grid" className="intro-cta footwear-cta">Shop Now →</a>
                </div>
            </section>

            <section id="footwear-grid" className="grid-collection">
                {footwearImages.map((item) => (
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
