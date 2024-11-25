"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const defaultFormData = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const router = useRouter();

  return (
    <div className="w-full flex flex-row justify-end">
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          /* make sure user has a student email */
          if (!formData.email.endsWith("@uga.edu")) {
            alert("Please use a student email");
            return;
          }

          if (formData.username && formData.email && formData.password) {
            try {
              const newUser = {
                username: formData.username,
                email: formData.email,
                password: formData.password,
              };
              await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              setFormData(defaultFormData);
              router.push("/");
            } catch {}
          }
        }}
        className="max-w-sm w-full mr-96"
      >
        <h2 className="font-bold text-3xl mb-4">Create an Account</h2>
        <h3 className="text-md text-muted-foreground mb-8">
          Enter your details below
        </h3>
        <input
          className="border-b-2 border-b-muted-foreground p-2 w-full mb-8"
          placeholder="Name"
          type="text"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          required
        />
        <input
          className="border-b-2 border-b-muted-foreground p-2 w-full mb-8"
          placeholder="Email"
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          className="border-b-2 border-b-muted-foreground p-2 w-full mb-12"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        <Button className="w-full p-6 text-lg mb-8">Create Account</Button>
        <div className="text-muted-foreground">
          Already have an account?{" "}
          <Button className="text-md" variant={"link"} asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </form>
    </div>
  );
}
