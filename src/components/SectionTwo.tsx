"use client"

import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Image, Spacer} from "@nextui-org/react";

export default function SectionTwo() {
    return (
        <div className="w-full h-full relative">
            <div
                className="absolute inset-0 bg-cover bg-center filter"
                style={{backgroundImage: "url('/hero.webp')"}}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>
            <div className="relative w-full h-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold  mt-40">Cô dâu & Chú rể</h1>

                    <div
                        className={"flex flex-row mt-10 space-x-10 "}
                    >
                        <Card className="w-[450px] p-6 bg-white/20 backdrop-blur-md hover:bg-white/30">
                            <CardHeader className="flex flex-col items-center pb-6">
                                <h3 className="text-2xl font-semibold text-white tracking-wider">
                                    Cô dâu
                                </h3>
                            </CardHeader>
                            <CardBody className="flex flex-col items-center gap-6">
                                <div
                                    className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white bg-pink-100">
                                    <Image
                                        isBlurred={true}
                                        src={"2.png"}
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                <div className="text-center">
                                    <h2 className="text-4xl font-dancing-script text-white mb-4">
                                        Nguyễn Thị Phượng
                                    </h2>
                                    <div className="text-white space-y-2">
                                        <p>Con ông: </p>
                                        <p>Con bà: </p>
                                    </div>
                                    <p className="mt-4 text-white text-sm max-w-sm mx-auto leading-relaxed">
                                        Là một người hay cười nhưng lại sống nội tâm và hay khóc thầm, không thích gặp
                                        nhiều người nhưng thích đi chơi, thích đi du lịch, không thích trồng hoa nhưng
                                        thích cắm hoa. Và mình cũng cực thích Huyên; nữa :3
                                    </p>
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="w-[450px]  p-6 bg-white/20 backdrop-blur-md hover:bg-white/30">
                            <CardHeader className="flex flex-col items-center pb-6">
                                <h3 className="text-2xl font-semibold text-white">
                                    Chú rể
                                </h3>
                            </CardHeader>
                            <CardBody className="flex flex-col  items-center gap-6">
                                <div
                                    className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white bg-pink-100">
                                    <Image
                                        isBlurred={true}
                                        src={"3.png"}
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                <div className="text-center">
                                    <h2 className="text-4xl text-white mb-4">
                                        Đỗ Trung Huyên
                                    </h2>
                                    <div className="text-white space-y-2">
                                        <p>Con ông: </p>
                                        <p>Con bà: </p>
                                    </div>
                                    <p className="mt-4 text-white text-sm max-w-sm mx-auto leading-relaxed">
                                        Là một người thân thiện, hòa đồng. Thích đi du lịch, thích kiếm tiền và tiêu
                                        tiền. Đặc biệt là &#34; Thích Phượng&#34;. Luôn coi trọng tình cảm và yêu thương
                                        gia đình.
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <Spacer y={20}/>
                </div>
            </div>
        </div>
    )
}