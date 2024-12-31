import Hero from "@/components/hero";
import scaleImg from "public/scale.jpg";

export default function Home() {
  return (
    <Hero
      image={scaleImg}
      title={"Scale and Availability"}
      description={"scaleImg"}
    />
  );
}
