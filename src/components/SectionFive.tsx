"use client"

import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import {Calendar, MapPin} from "lucide-react";
import {Image} from "@nextui-org/react";
import {Link} from "@nextui-org/link";

export default function SectionFive() {
    return (
        <div className={"flex h-screen flex-col items-center overflow-y-scroll"}>
            <div className={"text-4xl font-bold mt-20 mb-10"}>
                Lịch trình
            </div>

            {/* Lịch trình Grid */}
            <div className={"grid grid-cols-3 gap-4 w-3/4"}>
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


                        <div className="flex items-center justify-center gap-2 text-lg mb-4">
                            <Calendar className="w-5 h-5" />
                            <span>11:30 10/02/2023</span>
                        </div>

                        <Link href={"https://google.com"} className="flex items-center justify-center gap-2 text-lg mb-6">
                            <MapPin className="w-5 h-5" />
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


                        <div className="flex items-center justify-center gap-2 text-lg mb-4">
                            <Calendar className="w-5 h-5" />
                            <span>11:30 10/02/2023</span>
                        </div>

                        <Link href={"https://google.com"} className="flex items-center justify-center gap-2 text-lg mb-6">
                            <MapPin className="w-5 h-5" />
                            <span>Nhà hàng tiệc cưới Hoa Cau</span>
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
                            Nhà Hàng Tiệc Cưới
                        </h1>


                        <div className="flex items-center justify-center gap-2 text-lg mb-4">
                            <Calendar className="w-5 h-5" />
                            <span>11:30 10/02/2023</span>
                        </div>

                        <Link href={"https://google.com"} className="flex items-center justify-center gap-2 text-lg mb-6">
                            <MapPin className="w-5 h-5" />
                            <span>Nhà hàng tiệc cưới Hoa Cau</span>
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
        </div>
    )
}