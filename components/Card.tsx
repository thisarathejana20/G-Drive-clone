import Link from "next/link";
import { Models } from "node-appwrite";
import React from "react";
import Thumbnails from "./Thumbnails";
import { convertFileSize } from "@/lib/utils";
import FormattedDateTime from "./FormattedDateTime";
import ActionsDropDown from "./ActionsDropDown";

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
        <div className="flex flex-col items-end justify-between">
          <ActionsDropDown file={file} />
          <p className="body-1">{convertFileSize(file.size)}</p>
        </div>
      </div>

      <div className="file-card-details">
        <p className="subtitle-2 line-clamp-1">{file.name}</p>
        <FormattedDateTime date={file.$createdAt} className="body-2" />
        <p className="caption line-clamp-1">By: {file.owner.fullName}</p>
      </div>
    </Link>
  );
};

export default Card;
