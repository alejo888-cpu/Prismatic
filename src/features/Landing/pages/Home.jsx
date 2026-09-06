import Hero from "../components/Hero";
import ExploreCards from "../components/ExploreCards";
import { QueHacemos, Conocenos } from "../components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <ExploreCards />
      <QueHacemos />
      <Conocenos />
    </>
  );
}
