'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    return (
        <div className="w-full flex flex-row justify-end">
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(formData)
            }}
            className="max-w-sm w-full mr-96">
                <h2 className="font-bold text-3xl mb-4">Create an Account</h2>
                <h3 className="text-md text-muted-foreground mb-8">Enter your details below</h3>
                <input className="border-b-2 border-b-muted-foreground p-2 w-full mb-8" placeholder="Name" type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input className="border-b-2 border-b-muted-foreground p-2 w-full mb-8" placeholder="Email" type="text" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <input className="border-b-2 border-b-muted-foreground p-2 w-full mb-12" placeholder="Password" type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
                <Button className="w-full p-6 text-lg mb-8">Create Account</Button>
                <div className="text-muted-foreground">Already have an account? <Button className='text-md' variant={'link'} asChild><Link href="/login">Login</Link></Button></div>
            </form>
        </div>
    )
}