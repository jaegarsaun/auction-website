import Navbar from "@/components/custom-ui/Navbar";
import { ModeToggle } from "@/components/custom-ui/ModeToggle";
export default function Page(){
    return (
        <main className="h-[100vh] w-[100vw]">
            <Navbar />
            <ModeToggle />
        </main>
    )
};