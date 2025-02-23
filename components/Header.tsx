import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import FileUploader from "./FileUploader";
import Search from "./Search";

const Header = () => {
  return (
    <header className="header">
      {/* Search */}
      <Search />
      <div className="header-wrapper">
        {/* FileUploader */}
        <FileUploader />
        <form>
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logout"
              width={24}
              height={24}
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
