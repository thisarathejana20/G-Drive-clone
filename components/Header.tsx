import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import FileUploader from "./FileUploader";
import Search from "./Search";
import { signUserOut } from "@/lib/actions/user.action";

const Header = () => {
  return (
    <header className="header">
      {/* Search */}
      <Search />
      <div className="header-wrapper">
        {/* FileUploader */}
        <FileUploader />
        {/* Since Header is a server component we cant handle button clicks */}
        {/* React 19 introduced new feature to handle code blocks in server */}
        <form
          action={async () => {
            "use server";
            await signUserOut();
          }}
        >
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logout"
              width={24}
              height={24}
              className="w-6"
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
