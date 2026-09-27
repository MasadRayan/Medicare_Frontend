"use client";

import Logo from "@/assets/svg/logo";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useGetme, useLogout } from "@/hooks";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const Header = () => {
  const routes = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
  ];

  const { data, isLoading } = useGetme();
  const {mutate: logout} = useLogout();

  const queryClient = useQueryClient()

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        toast.add({
          title: "Logout Successful",
          description: "You have been logged out successfully",
          type: "success",
        });
        queryClient.removeQueries({ queryKey: ["user"] });
      },

      onError: (err) => {
        toast.add({
          title: "Logout Failed",
          description: err.message || "An error occurred while logging out",
          type: "error",
        });
      },
    })
  }

  

  return (
    <header className="w-full h-16 border border-b">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Logo />
          <span>MediCare</span>
        </div>
        <nav className="flex gap-5">
          {routes.map((route) => (
            <Link key={route.url} href={route.url}>
              {route.name}
            </Link>
          ))}
        </nav>
        <div>
          {!isLoading && !data && (
            <Button
              variant="outline"
              render={<Link href="/login"/>}
              nativeButton={false}
            >
              Login
            </Button>
          )}
          {!isLoading && data && (
            <Button
              variant="destructive"
              onClick={handleLogout}
            >
              LogOut
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
