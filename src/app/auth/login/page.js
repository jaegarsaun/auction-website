import { ModeToggle } from "@/components/custom-ui/ModeToggle";
import LoginForm from "../../../components/custom-ui/forms/LoginForm";
import Link from "next/link";

export default function Page(){
    return (
        <main className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-2">
            <LoginForm />
            <p className="text-sm text-muted-foreground">Don't have an account? <Link href={'/auth/signup'} className="underline">Sign up today!</Link></p>
            <ModeToggle />
        </main>
    )
}