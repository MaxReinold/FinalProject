import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { AuthError } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const SIGNIN_ERROR_URL = "/login";
export default async function LogIn() {
  const formAction = async (formData: FormData) => {
    "use server";
    try {
      await signIn("credentials", {
        email: formData.get("email") as String,
        password: formData.get("password") as String,
        redirectTo: "/",
      });
    } catch (error) {
      if (error instanceof AuthError) {
        return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
      }
      throw error;
    }
  };

  return (
    <div className="w-full flex flex-row justify-end">
      <form action={formAction} className="max-w-sm w-full mr-96">
        <h2 className="font-bold text-3xl mb-4">Login</h2>
        <h3 className="text-md text-muted-foreground mb-8">
          Enter your details below
        </h3>
        <input
          className="border-b-2 border-b-muted-foreground p-2 w-full mb-8"
          placeholder="Email"
          type="text"
          name="email"
          id="email"
        />
        <input
          className="border-b-2 border-b-muted-foreground p-2 w-full mb-12"
          placeholder="Password"
          type="password"
          name="password"
          id="password"
        />
        <Button className="w-full p-6 text-lg mb-8">Login</Button>
        <div className="text-muted-foreground">
          Don't have an account?{" "}
          <Button className="text-md" variant={"link"} asChild>
            <Link href="/register">Create Account</Link>
          </Button>
        </div>
      </form>
    </div>
  );
}
