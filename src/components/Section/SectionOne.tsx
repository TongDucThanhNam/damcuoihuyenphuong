"use client"

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
import Image from "next/image";

import dynamic from "next/dynamic";

const CountDown = dynamic(() => import("@/components/CountDown"), {
    ssr: false,
});

import hero from "@/assets/hero.webp";


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

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [name, setName] = useState('')
    const [guestOf, setGuestOf] = useState("groom")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        try {
            console.log({name, guestOf})
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, guestOf}),
            })

            if (response.ok) {
                setName('')
            } else {
                throw new Error('Failed to send email')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Xóa bộ đếm khi component unmount
    }, []);

    if (!timeLeft) {
        return <div>Countdown finished!</div>;
    }


    return (
        <div className="w-screen h-screen relative">
            <div className="absolute inset-0">
                <Image
                    loading={"eager"}
                    src={hero}
                    alt="Hero Image"
                    fill
                    sizes="100vw"
                    quality={50} // Adjust quality as needed
                    style={{objectFit: "cover"}}
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative w-full h-full flex flex-col justify-center items-center"
            >
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="md:text-6xl text-4xl font-bold text-blue-300 mt-10 md:mt-56 text-center sm:text-left">
                        <span className="block sm:inline">Trung Huyên</span>
                        <span className="block sm:inline">&hearts;</span>
                        <span className="block sm:inline">Nguyễn Phượng</span>
                    </h1>
                    <p className="text-4xl mt-2 text-white flex items-center motion-preset-confetti  ">
                        We’re getting married
                        <Image
                            src={"/wedding.gif"}
                            alt="Wedding"
                            width={30}
                            height={30}
                            className="ml-2"
                        />
                    </p>
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
                        <Modal
                            isOpen={isOpen}
                            onOpenChange={onOpenChange}
                            placement="center"
                            backdrop="blur"
                        >
                            <ModalContent className="text-black">
                                {(onClose) => (
                                    <form onSubmit={handleSubmit}>
                                        <ModalHeader className="flex flex-col gap-1 text-black">Thông tin khách mời</ModalHeader>
                                        <ModalBody>
                                            <RadioGroup
                                                label="Bạn là khách của"
                                                isRequired
                                                value={guestOf}
                                                onValueChange={setGuestOf}
                                            >
                                                <Radio
                                                    value="groom">
                                                    <p className={"text-black"}>
                                                        Nhà trai
                                                    </p>
                                                </Radio>
                                                <Radio value="bride">
                                                    <p className={"text-black"}>
                                                        Nhà gái
                                                    </p>
                                                </Radio>
                                            </RadioGroup>
                                            <Input
                                                color={"primary"}
                                                isRequired
                                                errorMessage={name.trim() === "" ? "Vui lòng nhập đúng tên" : ""}
                                                label="Họ tên"
                                                labelPlacement="outside"
                                                placeholder="Nhập họ tên"
                                                value={name}
                                                onValueChange={setName}
                                            />
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Đóng
                                            </Button>
                                            <Button color="primary" type="submit">
                                                Xác nhận
                                            </Button>
                                        </ModalFooter>
                                    </form>
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