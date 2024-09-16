import { ModeToggle } from "@/components/custom-ui/ModeToggle";
import SignupForm from "../../../components/custom-ui/forms/SignupForm";
import Link from "next/link";

export default function Page(){
    return (
        <main className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-2">
            <SignupForm />
            <p className="text-sm text-muted-foreground">Already have an account? <Link href={'/auth/login'} className="underline">Login</Link></p>
            <ModeToggle />
        </main>
    )
}