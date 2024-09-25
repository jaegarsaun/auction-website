import Navbar from "@/components/custom-ui/Navbar";
import { ModeToggle } from "@/components/custom-ui/ModeToggle";
import { SearchBarComponent } from "@/components/search-bar";
import {ImageCardComponent} from "@/components/image-card";
const auctions = [
  {
    title: "Auction 1",
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.",
    currentBid: 100,
  },
  {
    title: "Auction 2",
    id: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.",
    currentBid: 200,
  },
  {
    title: "Auction 3",
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.",
    currentBid: 300,
  },
  {
    title: "Auction 4",
    id: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.",
    currentBid: 400,
  },
  {
    title: "Auction 5",
    id: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.",
    currentBid: 500,
  },
  // 10 more auctions
  {
    title: "Auction 6",
    id: 6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.",
    currentBid: 600,
  },
  {
    title: "Auction 7",
    id: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.",
    currentBid: 700,
  },
  {
    title: "Auction 8",
    id: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.",
    currentBid: 800,
  },
  {
    title: "Auction 9",
    id: 9,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.",
    currentBid: 900,
  },
  {
    title: "Auction 10",
    id: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.",
    currentBid: 1000,
  },
];
export default function Page() {
  return (
    <main className="h-[100vh] w-[100vw]">
      <Navbar />
      <ModeToggle />
      <section className="w-full flex flex-col gap-10 p-10">
        <div>
          <SearchBarComponent />
        </div>
        <section className="flex flex-col gap-10">
          <div>
            {/* active bids */}
            <h1 className="font-black">Your bids</h1>
          </div>
          <div>
            {/* all auctions */}
            <h1 className="font-black">Recently posted</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {auctions.map((auction) => (
                <ImageCardComponent key={auction.id} title={auction.title} description={auction.description} id={auction.id} currentBid={auction.currentBid}/>
              ))}
            </div>
          </div>
          <div>
            {/* all auctions */}
            <h1 className="font-black">All auctions</h1>
          </div>
        </section>
      </section>
    </main>
  );
}
