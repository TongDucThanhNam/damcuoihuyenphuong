"use client"

import { Image } from "@nextui-org/react";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function SectionThree() {
    const data = [
        {
            title: "2020",
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
        {
            title: "2021",
            content: (
                <div>
                </div>
            ),
        },
        {
            title: "NOW AND FOREVER",
            content: (
                <div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full h-screen overflow-y-scroll">
            <Timeline data={data} />
        </div>
    );
}
