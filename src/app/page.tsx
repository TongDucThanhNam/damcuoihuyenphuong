import Slider from "@/components/Slider";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import SpotifyButton from "@/components/SpotifyButton";
import SectionFive from "@/components/SectionFive";
import SectionSix from "@/components/SectionSix";

export default function Home() {
    return (
        <main className="">
            <Slider>
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
                <SectionFive/>
                <SectionSix/>
            </Slider>

            {/* Sound button*/}
            <div className={"fixed md:bottom-6 bottom-12 left-4 md:left-8"}>
                <SpotifyButton songTitle={"Die with a Smile"} artist={"Lady Gaga & Bruno Mars."}
                               albumArt={"/song.jpeg"} flacSrc={"/die_with_a_smile.flac"}/>
            </div>
        </main>
    );
}
