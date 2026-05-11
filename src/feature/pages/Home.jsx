import Hero from "../components/Hero/Hero";
import { QueHacemos, Conocenos } from "../components/SocialLinks/SocialLinks";
import ProductCard from "../components/ProductCard/ProductCard";
import Gallery from "../components/Hero/Gallery";

export default function Home() {
    return (
        <>
            <Hero />
            <QueHacemos />
            <Conocenos />
            <ProductCard />
            <Gallery />
        </>
    );
}