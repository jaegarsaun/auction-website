import Navbar from "@/components/custom-ui/Navbar";
import { ModeToggle } from "@/components/custom-ui/ModeToggle";
import { SearchBarComponent } from "@/components/search-bar";
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
          <div>{/* items you have bid on */}
            <h1 className="font-black">Your bids</h1>
          </div>
          <div>{/* all auctions */}
            <h1 className="font-black">Recently posted</h1>
          </div>
          <div>{/* all auctions */}
            <h1 className="font-black">All auctions</h1>
          </div>
        </section>
      </section>
    </main>
  );
}
