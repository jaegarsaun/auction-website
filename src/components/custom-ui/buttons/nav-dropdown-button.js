'use client'
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { signOutUser } from "@/app/services/firebase"; // Import your sign-out function
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Import useRouter for redirecting
import { useToast } from "@/hooks/use-toast"; // Use a toast notification if you want

export function DropDownButton() {
  const router = useRouter(); // Initialize the router
  const { toast } = useToast(); // Toast for notifications

  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      await signOutUser(); // Call the sign-out function
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
      router.push("/auth/login"); // Redirect to login page after signing out
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an issue signing out.",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Profile</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <Link href="#">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <Link href="#">Billing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <Link href="#">Settings</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={handleSignOut}> {/* Sign out button */}
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

  