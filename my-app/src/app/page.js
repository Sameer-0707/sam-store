import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <>
      <Carousel />
      <section className="placeholder-section">
        <div className="container">
            <h2>Explore the Collection</h2>
            <p>Curated styles for every moment. Scroll down to discover more.</p>
        </div>
      </section>
    </>
  );
}
