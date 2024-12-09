import Slider from "@/components/Slider";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";

export default function Home() {
  return (
      <main className="">
        <Slider>
          <SectionOne/>
          <SectionTwo/>
          <SectionThree/>
        <SectionFour/>
        </Slider>
      </main>
  );
}
