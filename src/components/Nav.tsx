import Link from "next/link";
import './nav.css'

export default function Nav() {
    return (
        <nav>
            <h2 className="text-xl">Categories</h2>
            <ul>
                <li>
                    <Link href='/account'>My Account</Link>
                </li>
                <li>
                    <Link href='/login'>Login / Register</Link>
                </li>
                <li>
                    <Link href='/cart'>Cart</Link>
                </li>
                <li>
                    <Link href='/wishlist'>Wishlist</Link>
                </li>
                <li>
                    <Link href='/shop'>Shop</Link>
                </li>
            </ul>
        </nav>
    )
}