"use client"

import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Button, Spacer} from "@nextui-org/react";
import {Calendar, MapPin} from "lucide-react";
import {Image} from "@nextui-org/react";
import {Link} from "@nextui-org/link";

export default function SectionFive() {
    return (
        // <div className="w-screen h-screen relative overflow-y-scroll">
        //     <div
        //         className="absolute inset-0 bg-cover bg-center filter"
        //         style={{backgroundImage: "url('/hero.webp')"}}
        //     ></div>
        //     <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        //     <div className="relative w-full min-h-screen flex flex-col justify-start items-center px-4 py-8 md:py-16">

        <div className="w-screen h-screen relative overflow-y-scroll">
            <div className={"text-4xl font-bold mt-20 mb-10"}>
                Lịch trình
            </div>

            {/* Lịch trình Grid */}
            <div className="relative w-full min-h-screen flex flex-col justify-start items-center px-4 py-8 md:py-16">
                <div className="flex flex-col w-full max-w-6xl gap-8 md:flex-row">
                    <Card className="max-w-md mx-auto">
                        {/* Image Carousel */}
                        <CardBody className="p-0">
                            <div className="relative">
                                <Image
                                    alt="Wedding table setting with pink roses"
                                    className="w-full object-cover h-[300px]"
                                    src="/home.jpg"
                                />
                            </div>
                        </CardBody>

                        <CardBody className="text-center px-8 pt-6">
                            <h1 className="text-3xl font-medium tracking-wide text-[#FF4D6D] mb-4">
                                TIỆC CƯỚI NHÀ TRAI
                            </h1>


                            <div className="flex items-center justify-center gap-2 text-lg mb-4 text-black">
                                <Calendar className="w-5 h-5"/>
                                <span>09:00 26/12/2024</span>
                            </div>

                            <Link href={"https://maps.app.goo.gl/TD8yiC5La4z65GYr7"}
                                  className="flex items-center justify-center gap-2 text-lg mb-6">
                                <MapPin className="w-5"/>
                                <span>An Thái, Bình Mỹ, Bình Lục, Hà Nam</span>
                            </Link>


                        </CardBody>

                        <CardFooter className="px-8 pb-6">
                            <Button
                                color="danger"
                                className="w-full bg-[#FF4D6D]"
                                size="lg"
                            >
                                THÊM VÀO LỊCH
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="max-w-md mx-auto">
                        {/* Image Carousel */}
                        <CardBody className="p-0">
                            <div className="relative">
                                <Image
                                    alt="Wedding table setting with pink roses"
                                    className="w-full object-cover h-[300px]"
                                    src="/home.jpg"
                                />
                            </div>
                        </CardBody>

                        <CardBody className="text-center px-8 pt-6">
                            <h1 className="text-3xl font-medium tracking-wide text-[#FF4D6D] mb-4">
                                TIỆC CƯỚI NHÀ NỮ
                            </h1>


                            <div className="flex items-center justify-center gap-2 text-lg mb-4 text-black">
                                <Calendar className="w-5 h-5"/>
                                <span>10:00 26/12/2024</span>
                            </div>

                            <Link href={"https://maps.app.goo.gl/y9JLbYP9AB4zLdLs6"}
                                  className="flex items-center justify-center gap-2 text-lg mb-6">
                                <MapPin className="w-5 h-5"/>
                                <span>Xóm 4, Thôn Hoà Trúc, Xã Hoà Thạch, Huyện Quốc Oai, TP Hà Nội</span>
                            </Link>


                        </CardBody>

                        <CardFooter className="px-8 pb-6">
                            <Button
                                color="danger"
                                className="w-full bg-[#FF4D6D]"
                                size="lg"
                            >
                                THÊM VÀO LỊCH
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <Spacer y={24}/>

            </div>
        </div>
    )
}