export default function AccessoriesPage() {
    return (
        <>
            <section className="page-header">
                <h1>Accessories</h1>
                <p>The perfect finishing touch.</p>
            </section>

            <section className="masonry-layout">
                <div className="masonry-item">
                    <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop" alt="Bags" />
                    <div className="masonry-title">Handbags</div>
                </div>
                <div className="masonry-item">
                    <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1780&auto=format&fit=crop" alt="Sunglasses" />
                    <div className="masonry-title">Sunglasses</div>
                </div>
                <div className="masonry-item">
                    <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop" alt="Sneakers" />
                    <div className="masonry-title">Footwear</div>
                </div>
                <div className="masonry-item">
                    <img src="https://images.unsplash.com/photo-1509941943102-10c232535736?q=80&w=2070&auto=format&fit=crop" alt="Watches" />
                    <div className="masonry-title">Watches</div>
                </div>
                <div className="masonry-item">
                    <img src="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=2070&auto=format&fit=crop" alt="Jewelry" />
                    <div className="masonry-title">Jewelry</div>
                </div>
                <div className="masonry-item">
                    <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop" alt="Caps" />
                    <div className="masonry-title">Hats & Caps</div>
                </div>
            </section>
        </>
    );
}
