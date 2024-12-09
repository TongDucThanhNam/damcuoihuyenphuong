"use client"

import CountDown from "@/components/CountDown";
import {
    Button, Form, Input,
    Modal,
    ModalBody,
    ModalContent, ModalFooter,
    ModalHeader,
    Popover,
    PopoverContent,
    PopoverTrigger, Radio, RadioGroup, Spacer, useDisclosure
} from "@nextui-org/react";
import {
    SendIcon,
} from "lucide-react";
import MagneticButton from "@/components/ui/ManeticButton";
import {useEffect, useState} from "react";

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
        chartData: [{name: "Giây", value: 60, fill: "#6696ff"}],
    },
];

export default function SectionOne() {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-12-26T15:00:00').getTime(); // Ngày 26/12
        const currentTime = new Date().getTime();
        const difference = targetDate - currentTime;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return null; // Đã hết thời gian
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Xóa bộ đếm khi component unmount
    }, []);

    if (!timeLeft) {
        return <div>Countdown finished!</div>;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    return (
        <div className="w-screen h-screen relative">
            <div
                className="absolute inset-0 bg-cover bg-center filter"
                style={{backgroundImage: "url('/hero.webp')"}}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative w-full h-full flex flex-col justify-center items-center"
            >
                <div className="flex flex-col justify-center items-center">
                    <h1 className="md:text-6xl text-4xl font-bold text-blue-300 mt-56 text-center sm:text-left">
                        <span className="block sm:inline">Trung Huyên</span>
                        <span className="block sm:inline">&hearts;</span>
                        <span className="block sm:inline">Nguyễn Phượng</span>
                    </h1>                    <p className="text-4xl mt-2 text-white">We’re getting married</p>
                    <div className={"w-full h-full"}>
                        <div className="flex flex-row w-full h-60">
                            <CountDown timeLeft={timeLeft}/>
                        </div>
                    </div>
                    <div>
                        <MagneticButton>
                            <Button
                                className="mt-4"
                                color={"primary"}
                                startContent={
                                    <SendIcon/>
                                }
                                onPress={onOpen}
                            >
                                Xác nhận tham dự
                            </Button>
                        </MagneticButton>
                        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1 text-black">Modal Title</ModalHeader>
                                        <ModalBody>
                                            <Form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    onClose();
                                                }}
                                            >
                                                <RadioGroup label="Bạn là khách của"
                                                    isRequired={true}
                                                >
                                                    <Radio value="groom">Nhà trai</Radio>
                                                    <Radio value="bride">Nhà gái</Radio>
                                                </RadioGroup>
                                                <Input
                                                    isRequired
                                                    errorMessage="Vui lòng nhập đúng tên"
                                                    label="Họ tên"
                                                    labelPlacement="outside"
                                                    name="fullName"
                                                    placeholder="Nhâp họ tên"
                                                    type="text"
                                                />
                                            </Form>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Đóng
                                            </Button>
                                            <Button color="primary" onPress={onClose}>
                                                Xác nhận
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                    <Spacer y={28}/>

                </div>
            </div>
        </div>
    )
}