import Link from "next/link";
import { Models } from "node-appwrite";
import React from "react";
import Thumbnails from "./Thumbnails";

const Card = ({ file }: { file: Models.Document }) => {
  return (
    <Link href={file.url} target="_blank" className="file-card">
      <div className="flex justify-between">
        <Thumbnails
          type={file.type}
          extension={file.extension}
          url={file.url}
          className="!size-20"
          imageClassName="!size-11"
        />
        <div className="flex flex-col items-end justify-between"></div>
      </div>
    </Link>
  );
};

export default Card;
