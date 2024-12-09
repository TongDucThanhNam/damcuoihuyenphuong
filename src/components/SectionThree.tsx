"use client"

import {Image} from "@nextui-org/react";
import React from "react";
import {Timeline} from "@/components/ui/timeline";

export default function SectionThree() {
    const data = [
        {
            title: "2020",
            content: (
                <div>
                    <p className={"text-black text-xl"}>
                        Chúng mình học cùng lớp hồi đại học đã từng là bạn &#34; khá thân &#34; từ hồi mới vào học.
                        Đã
                        từng nói
                        với nhau&#34; Ê ! Mày có chó nó lấy&#34; . Và chúng mình cũng chưa từng nghĩ sẽ có ngày yêu
                        nhau.
                        Vậy mà sau
                        gần 5 năm, giờ đây chúng mình đã sắp ở một &#34; Cương vị mới &#34; và sắp kêu &#34;gâu
                        gâu&#34; ^^
                    </p>
                    <div className={"flex justify-center grid-cols-2 space-x-8"}>
                        <Image
                            isBlurred={true}
                            src="2020.jpeg"
                            alt="2020"
                            height={500}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div>
                    <p className={"text-black text-xl"}>
                        Thời điểm đó, chúng mình đều đang độc thân. <br/> Phượng ở Quốc Oai còn mình ở Hà Nam, do
                        ảnh
                        hưởng của dịch covid nên cơ hội gặp nhau không nhiều. <br/>Dù vậy chúng mình vẫn luôn dành thời
                        gian
                        tâm sự, chia sẻ với nhau những câu chuyện trong thời gian học online tại nhà.

                    </p>
                    <div className={"flex justify-center grid-cols-2 space-x-8"}>
                        <Image
                            isBlurred={true}
                            src="2021a.jpg"
                            alt="2020"
                            className="rounded-lg"
                        />
                        <Image
                            isBlurred={true}
                            src="2021b.jpg"
                            alt="2020"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className={"text-black text-xl"}>
                        Năm 2022 ảnh hưởng của dịch giảm dần, chúng mình quay trở lại giảng đường và có nhiều thời
                        gian đi chơi cùng nhau hơn. <br/>
                        Và rồi tới 1 ngày đặc biệt, ngày 11/05/2022 khi cả 2 đã suy nghĩ đủ kỹ về mối quan hệ, thì chúng
                        mình đã quyết định nói hết cảm xúc của mình với đối phương. <br/> Và sau ngày định mệnh đó, đã
                        có &#34;
                        Chúng mình của hiện tại&#34;

                    </p>
                    <div className={"flex justify-center grid-cols-2 space-x-8"}>
                        <Image
                            isBlurred={true}

                            src="2022a.jpg"
                            alt="2020"
                            className="rounded-lg"
                        />
                        <Image
                            isBlurred={true}

                            src="2023.jpg"
                            alt="2020"
                            className="rounded-lg"
                        />
                    </div>

                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div className={""}>
                    <p className={"text-black text-xl"}>
                        Đầu năm 2023, chúng mình bắt đầu thực tập ở cùng một công ty và từ đây chúng mình gần như dành
                        phần lớn thới gian cho nhau. &#34;Sáng đèo nhau đi học chiều lai nhau đi làm ^^&#34;. Đây cũng
                        là khoảng
                        thời gian vui vẻ nhất trong 4 năm sinh viên của chúng mình. Cùng nhau học tập, làm việc, ăn
                        chơi,...
                    </p>
                    <div className={"flex justify-center grid-cols-2 space-x-8"}>
                        <Image
                            isBlurred={true}

                            src="2023a.jpg"
                            alt="2020"
                            className="rounded-lg"
                        />
                        <Image
                            isBlurred={true}

                            src="2023b.jpg"
                            alt="2020"
                            className="rounded-lg"
                        />
                        {/*<Image*/}
                        {/*    src="2023c.jpg"*/}
                        {/*    alt="2020"*/}
                        {/*    className="rounded-lg"*/}
                        {/*/>*/}
                    </div>

                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <p className={"text-black text-xl"}>
                        Ngày chung đôi: Hơn 2 năm tình bạn, và 2 năm tình yêu không phải là quãng thời gian quá
                        dài, nhưng cũng không quá ngắn, đủ để chúng mình nhận ra nhiều điều. <br/> Cuối cùng ngày vui
                        nhất của
                        chúng mình cũng tới rồi. Cảm ơn vì chúng ta đã luôn là một phần trong cuộc sống của nhau. Em
                        và
                        anh không chỉ là người yêu mà còn là huynh đệ. <br/>Kể từ Ngày hôm nay, em là em, anh là anh và
                        chúng
                        ta là Một gia đình hạnh phúc.
                    </p>
                    <div className={"grid grid-cols-2 md:grid-cols-4 gap-2"}>
                        <Image
                            isBlurred={true}

                            src="2024a.jpeg"
                            alt="2020"
                            className="rounded-lg"
                        />
                        <Image
                            isBlurred={true}

                            src="2024b.jpg"
                            alt="2020"
                            className="rounded-lg"
                        />
                        <Image
                            isBlurred={true}

                            src="2024c.jpeg"
                            alt="2020"
                            className="rounded-lg"
                        />
                        <Image
                            isBlurred={true}

                            src="2024d.jpg"
                            alt="2020"
                            className="rounded-lg"
                        />
                    </div>

                </div>
            ),
        },
        {
            title: "NOW AND FOREVER",
            content: (
                <div>
                    <Image
                        src="hero.webp"
                        alt="2020"
                        className="rounded-lg"
                    />
                </div>
            ),
        },
    ];
    return (
        <div className="w-full h-screen overflow-y-scroll"
             style={{backgroundColor: "#B6E1F6"}}>

            <Timeline data={data}/>
        </div>
    );
}
