import Hero from "@/components/hero";
import performanceImg from "public/performance.jpg";

export default function Performance() {
  return (
    <Hero
      image={performanceImg}
      title={"Performance Optimization"}
      description={"performanceImg"}
    />
  );
}
