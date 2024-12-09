"use client"

import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Image, Spacer} from "@nextui-org/react";

export default function SectionTwo() {
    return (
        <div className="w-screen h-screen relative overflow-y-scroll">
            <div
                className="absolute inset-0 bg-cover bg-center filter"
                style={{backgroundImage: "url('/hero.webp')"}}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>
            <div className="relative w-full min-h-screen flex flex-col justify-start items-center px-4 py-8 md:py-16">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12">Cô dâu & Chú rể</h1>
                <div className="flex flex-col w-full max-w-6xl gap-8 md:flex-row">
                    <Card
                        className="w-full max-w-[450px] p-4 md:p-6 bg-white/20 backdrop-blur-md hover:bg-white/30 mx-auto">
                        <CardHeader className="flex flex-col items-center pb-4 md:pb-6">
                            <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wider">
                                Cô dâu
                            </h3>
                        </CardHeader>
                        <CardBody className="flex flex-col items-center gap-4 md:gap-6">
                            <div
                                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white bg-pink-100">
                                <Image
                                    src="/2.png"
                                    alt="Cô dâu"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="text-center">
                                <h2 className="text-3xl md:text-4xl font-dancing-script text-white mb-2 md:mb-4">
                                    Nguyễn Thị Phượng
                                </h2>
                                <div className="text-white text-lg md:text-xl space-y-1 md:space-y-2">
                                    <p>Con ông: Nguyễn Quang Lô</p>
                                    <p>Con bà: Hoàng Thị Vang</p>
                                </div>
                                <p className="mt-3 md:mt-4 text-white text-sm max-w-sm mx-auto leading-relaxed">
                                    Là một người hay cười nhưng lại sống nội tâm và hay khóc thầm, không thích gặp
                                    nhiều người nhưng thích đi chơi, thích đi du lịch, không thích trồng hoa nhưng
                                    thích cắm hoa. Và mình cũng cực thích Huyên; nữa :3
                                </p>
                            </div>
                        </CardBody>
                    </Card>

                    <Card
                        className="w-full max-w-[450px] p-4 md:p-6 bg-white/20 backdrop-blur-md hover:bg-white/30 mx-auto">
                        <CardHeader className="flex flex-col items-center pb-4 md:pb-6">
                            <h3 className="text-xl md:text-2xl font-semibold text-white">
                                Chú rể
                            </h3>
                        </CardHeader>
                        <CardBody className="flex flex-col items-center gap-4 md:gap-6">
                            <div
                                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white bg-pink-100">
                                <Image
                                    src="/3.png"
                                    alt="Chú rể"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="text-center">
                                <h2 className="text-3xl md:text-4xl text-white mb-2 md:mb-4">
                                    Đỗ Trung Huyên
                                </h2>
                                <div className="text-white text-lg md:text-xl space-y-1 md:space-y-2">
                                    <p>Con ông: Đỗ Trung Việt</p>
                                    <p>Con bà: Nguyễn Thị Bằng</p>
                                </div>
                                <p className="mt-3 md:mt-4 text-white text-sm max-w-sm mx-auto leading-relaxed">
                                    Là một người thân thiện, hòa đồng. Thích đi du lịch, thích kiếm tiền và tiêu
                                    tiền. Đặc biệt là &quot;Thích Phượng&quot;. Luôn coi trọng tình cảm và yêu thương
                                    gia đình.
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <Spacer y={24}/>
            </div>
        </div>
    )
}