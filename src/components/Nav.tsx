import Link from "next/link";
import './nav.css'
import { useAuth } from "@/contexts/AuthContext";

export default function Nav() {
    const {user} = useAuth();

    return (
        <nav>
            <h2 className="text-xl">Welcome!</h2>
            <ul>
                {user ? <><li>
                    <Link href='/newItem'>Create Listing</Link>
                </li>
                <li>
                    <Link href='/account'>My Account</Link>
                </li>
                
                <li>
                    <Link href='/cart'>Cart</Link>
                </li>
                <li>
                    <Link href='/wishlist'>Wishlist</Link>
                </li>
                <li>
                    <Link href='/shop'>Shop</Link>
                </li></>: <li>
                    <Link href='/login'>Login / Register</Link>
                </li>}
            </ul>
        </nav>
    )
}