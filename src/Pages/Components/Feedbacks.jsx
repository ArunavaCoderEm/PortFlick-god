import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

export const Feedbacks = () => {
  const messages = [
    {
      title: "Message from User123",
      content: "Hey, how are you doing today?",
      received: "10 minutes ago",
    },
    {
      title: "Message from User123",
      content: "I really liked your recent post!",
      received: "2 hours ago",
    },
    {
      title: "Message from User123",
      content: "Do you have any book recommendations?",
      received: "1 day ago",
    },
    {
      title: "Message from User456",
      content: "Loved the recent changes you made to the site!",
      received: "3 days ago",
    },
    {
      title: "Message from User123",
      content: "Can you recommend some new blog posts?",
      received: "5 days ago",
    },
  ];

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
          {messages.map((message, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
              <Card>
                <CardHeader className="flex">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <CardTitle>{message.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                  <Mail className="flex-shrink-0" />
                  <div>
                    <p>{message.content}</p>
                    <p className="text-xs text-muted-foreground">
                      {message.received}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};
