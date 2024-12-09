import {FocusCards} from "@/components/ui/focus-cards";

export default function SectionFour() {
    const cards = [
        {
            title: "Ảnh cưới 1",
            src: "/NHO02790.JPG",
        },
        {
            title: "Ảnh cưới 2",
            src: "/NHO02988.JPG",
        },
        {
            title: "Ảnh cưới 3",
            src: "/NHO03081.JPG",
        },
        {
            title: "Ảnh cưới 4",
            src: "/NHO03102.JPG",
        },
        {
            title: "Ảnh cưới 5",
            src: "/NHO03152.JPG",
        },
        {
            title: "Ảnh cưới 6",
            src: "/NHO03246.JPG",
        },
        {
            title: "Ảnh cưới 7",
            src: "/album/NHO03594.JPG",
        },
        {
            title: "Ảnh cưới 8",
            src: "/album/NHO03631.JPG",
        },        {
            title: "Ảnh cưới 9",
            src: "/album/NHO03653.JPG",
        },
        {
            title: "Ảnh cưới 10",
            src: "/album/NHO03668.JPG",
        },
        {
            title: "Ảnh cưới 11",
            src: "/album/NHO03956.JPG",
        },
        {
            title: "Ảnh cưới 12",
            src: "/album/NHO04177.JPG",
        },
        {
            title: "Ảnh cưới 13",
            src: "/album/NHO04275.JPG",
        },        {
            title: "Ảnh cưới 14",
            src: "/album/NHO04364.JPG",
        },        {
            title: "Ảnh cưới 15",
            src: "/album/NHO04406.JPG",
        },        {
            title: "Ảnh cưới 16",
            src: "/album/NHO04433.JPG",
        },
    ];

    return (
        <div className={"flex h-screen flex-col items-center overflow-y-scroll"}>
            <div className={"text-4xl font-bold mt-20 mb-10"}>
                Album hình cưới
            </div>

            <FocusCards cards={cards} />
        </div>
    )
}