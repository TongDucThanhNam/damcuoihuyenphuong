"use client"

import CountDown from "@/components/CountDown";
import {Button} from "@nextui-org/react";
import {
    SendIcon,
} from  "lucide-react";

const data: any[] = [
    {
        title: "Activity",
        color: "default",
        total: 31,
        chartData: [{name: "Ngày", value: 3, fill: "hsl(var(--nextui-primary))"}],
    },
    {
        title: "Activity",
        color: "default",
        total: 24,
        chartData: [{name: "Giờ", value: 12, fill: "hsl(var(--nextui-primary))"}],
    },
    {
        title: "Activity",
        color: "default",
        total: 60,
        chartData: [{name: "Phút", value: 30, fill: "hsl(var(--nextui-primary))"}],
    },
    {
        title: "Activity",
        color: "default",
        total: 60,
        chartData: [{name: "Giây", value: 0, fill: "hsl(var(--nextui-primary))"}],
    },
];

export default function SectionOne() {
    return (
        <div className="w-full h-full relative">
            <div
                className="absolute inset-0 bg-cover bg-center filter"
                style={{backgroundImage: "url('/hero.webp')"}}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative w-full h-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-6xl font-bold  mt-40">Bích Phượng &hearts; Trung Huyên</h1>
                    <p className="text-4xl mt-2">We’re getting married</p>
                    <div className={"w-full h-full"}>
                        <div className="flex flex-row w-full h-60">
                            {data.map((item, index) => (
                                <CountDown key={index} chartData={item.chartData} color={item.color}
                                           total={item.total}/>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Button
                            className="mt-4"
                            color={"primary"}
                            startContent={
                                <SendIcon/>
                            }
                        >
                            Xác nhận tham dự
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}