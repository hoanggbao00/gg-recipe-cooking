'use client'

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useRef } from "react"

interface CarouselProps {
  images: string[]
  autoplayInterval?: number
  className?: string
  hideNavigation?: boolean
}

export function Carousel({ images, autoplayInterval = 3000, className = "", hideNavigation = false }: CarouselProps) {
  const plugin = useRef(
    Autoplay({ delay: autoplayInterval, stopOnInteraction: true })
  )

  return (
    <ShadcnCarousel
      plugins={[plugin.current]}
      className={`w-full ${className}`}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-video w-full">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="object-cover rounded-md absolute inset-0 size-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {!hideNavigation && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </ShadcnCarousel>
  )
}

