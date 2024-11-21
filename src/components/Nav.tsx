import Link from "next/link";
import "./nav.css";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";

export default function Nav() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <nav>
      <h2 className="text-xl">Welcome!</h2>
      <ul>
        {user ? (
          <>
            <li>
              <Link href="/newItem">Create Listing</Link>
            </li>
            <li>
              <Link href="/">Shop</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Button onClick={async () => signIn()}>Log In</Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
