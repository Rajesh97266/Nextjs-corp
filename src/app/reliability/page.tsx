import Hero from "@/components/hero";
import relaiabilityImg from "public/reliability.jpg";
export default function Home() {
  return (
    <Hero
      image={relaiabilityImg}
      title={"Reliability and Availability"}
      description={"relaiabilityImg"}
    />
  );
}
