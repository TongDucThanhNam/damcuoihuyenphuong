import {FocusCards} from "@/components/ui/focus-cards";
// import anhCuoi1 from "@/assets/album/NHO02790.JPG";
// import anhCuoi2 from "@/assets/album/NHO02988.JPG";
// import anhCuoi3 from "@/assets/album/NHO03081.JPG";
// import anhCuoi4 from "@/assets/album/NHO03102.JPG";
// import anhCuoi5 from "@/assets/album/NHO03152.JPG";
// import anhCuoi6 from "@/assets/album/NHO03246.JPG";
// import anhCuoi7 from "@/assets/album/NHO03594.JPG";
// import anhCuoi8 from "@/assets/album/NHO03631.JPG";
// import anhCuoi9 from "@/assets/album/NHO03653.JPG";
// import anhCuoi10 from "@/assets/album/NHO03668.JPG";
// import anhCuoi11 from "@/assets/album/NHO03956.JPG";
// import anhCuoi12 from "@/assets/album/NHO04177.JPG";
// import anhCuoi13 from "@/assets/album/NHO04275.JPG";
// import anhCuoi14 from "@/assets/album/NHO04364.JPG";
// import anhCuoi15 from "@/assets/album/NHO04406.JPG";
// import anhCuoi16 from "@/assets/album/NHO04433.JPG";


export default function SectionFour() {
    const cards = [
        {
            title: "Ảnh cưới 1",
            src: "/album/NHO02790.JPG",
        },
        {
            title: "Ảnh cưới 2",
            src: "/album/NHO02988.JPG",
        },
        {
            title: "Ảnh cưới 3",
            src: "/album/NHO03081.JPG",
        },
        {
            title: "Ảnh cưới 4",
            src: "/album/NHO03102.JPG",
        },
        {
            title: "Ảnh cưới 5",
            src: "/album/NHO03152.JPG",
        },
        {
            title: "Ảnh cưới 6",
            src: "/album/NHO03246.JPG",
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