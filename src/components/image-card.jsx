'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

export function ImageCardComponent({title, description, thumbnail, id, currentBid}) {
  return (
    (<Card className="w-full max-w-sm overflow-hidden p-5 flex flex-col gap-5">
      <div className="relative h-48">
        <Image
          src="/placeholder.svg?height=200&width=400"
          alt="Card image"
          layout="fill"
          objectFit="cover" />
      </div>
      <CardHeader className="p-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{currentBid}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 p-0">
        <Button variant="outline" className="w-1/2">Place Bid</Button>
        <Button className="w-1/2">View Auction</Button>
      </CardFooter>
    </Card>)
  );
}