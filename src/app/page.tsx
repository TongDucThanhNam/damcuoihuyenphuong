import Slider from "@/components/Slider";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import SpotifyButton from "@/components/SpotifyButton";
import SectionFive from "@/components/SectionFive";

export default function Home() {
    return (
        <main className="">
            <Slider>
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
                <SectionFive/>
            </Slider>

            {/* Sound button*/}
            <div className={"fixed bottom-6 left-8"}>
                <SpotifyButton songTitle={"Die with a Smile"} artist={"Lady Gaga & Bruno Mars."}
                               albumArt={"/song.jpeg"} flacSrc={"/die_with_a_smile.flac"}/>
            </div>
        </main>
    );
}
