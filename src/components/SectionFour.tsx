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