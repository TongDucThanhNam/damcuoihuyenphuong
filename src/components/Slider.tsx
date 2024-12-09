'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from "@nextui-org/react"
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

interface SliderProps {
    children: React.ReactNode[]
}

const Slider: React.FC<SliderProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const touchStartX = useRef<number | null>(null)
    const sliderRef = useRef<HTMLDivElement>(null)

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? children.length - 1 : currentIndex - 1
        goToSlide(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === children.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        goToSlide(newIndex)
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return

        const touchEndX = e.touches[0].clientX
        const diff = touchStartX.current - touchEndX

        if (diff > 50) {
            goToNext()
        } else if (diff < -50) {
            goToPrevious()
        }

        touchStartX.current = null
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                goToPrevious()
            } else if (e.key === 'ArrowRight') {
                goToNext()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [currentIndex])

    return (
        <div className="relative w-full h-screen overflow-hidden" ref={sliderRef}>
            <div
                className="flex transition-transform duration-300 ease-in-out h-full"
                style={{transform: `translateX(-${currentIndex * 100}%)`}}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {React.Children.map(children, (child, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        {child}
                    </div>
                ))}
            </div>

            <div
                className={"fixed bottom-4 right-4 flex space-x-2"}
            >
                <Button
                    isIconOnly={true}
                    className="bg-black"
                    onClick={goToPrevious}
                    aria-label="Previous slide"
                >
                    <ChevronLeftIcon className="w-6 h-6"/>
                </Button>
                <Button
                    isIconOnly={true}
                    className=" bg-black"
                    onClick={goToNext}
                    aria-label="Next slide"
                >
                    <ChevronRightIcon className="w-6 h-6"/>
                </Button>
            </div>


            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {children.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider