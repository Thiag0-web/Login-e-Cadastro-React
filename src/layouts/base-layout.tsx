import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Outlet } from "react-router-dom";

import Autoplay from "embla-carousel-autoplay"

const slideData = [
  {
    image:
      "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=2500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFpc2FnZW18ZW58MHx8MHx8fDA%3D",
    text: "Capturando momentos, criando memórias",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=2500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhaXNhZ2VtfGVufDB8fDB8fHww",
    text: "Explore o mundo través das suas lentes",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBhaXNhZ2VtfGVufDB8fDB8fHww",
    text: "Suas histórias contada de forma encantadora",
  },
];

export default function BaseLayout() {
  return (
    <div className="flex min-h-screen w-full bg-[#15131D] text-white overflow-hidden">
      <div className="hidden lg:block lg:w-1/2 relative">
        <h5 className="fixed z-1 top-12 left-12 text-2xl font-bold tracking-widest italic">
          Aventura
        </h5>

        <Carousel plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false
          }),
        ]} opts={{ loop: true }}>
          <CarouselContent>
            {slideData.map((slide, index) => (
              <CarouselItem key={index} className="h-screen relative">
                <div
                  className="absolute inset-0 bg-cover bg-center brightness-[0.6]"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />

                <div className="absolute inset-0 bg-indigo-950/20" />

                <div className="relative z-1 h-full flex items-end justify-center pb-24">
                  <div className="text-center space-y-6">
                    <h2 className="text-4xl font-medium tracking-tighter max-w-md mx-auto">
                      {slide.text}
                    </h2>

                    <div className=" flex items-center justify-center gap-2">
                      {slideData.map((_, i) => (
                        <div
                          key={i}
                          data-active={index === i}
                          className=" h-1 rounded-full w-8 bg-white/30 data-[active=true]:bg-white"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <Outlet />
    </div>
  );
}
