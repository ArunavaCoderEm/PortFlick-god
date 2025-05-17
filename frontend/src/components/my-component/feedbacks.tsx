import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { messages } from "@/data/data";
import { messageProps } from "@/types/types";

export default function Feedbacks():React.ReactNode  {
  return (
    <>
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        opts={{
          align: "start",
        }}
        className="w-full max-w-6xl px-5 mb-10 flex items-center justify-center"
      >
        <CarouselContent>
          {messages.map((message: messageProps, index: number) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
              <Card className="flex relative overflow-hidden items-center gap-2">
                <CardHeader className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <CardTitle>{message.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                  <div>
                    <p>{message.content}</p>
                    <p className="text-xs text-muted-foreground">
                      {message.received}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="absolute bottom-0 right-0">
                  <Mail size={16} className="flex-shrink-0 stroke-purple-500/70" />
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
