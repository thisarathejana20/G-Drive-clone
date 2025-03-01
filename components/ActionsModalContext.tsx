import { Models } from "node-appwrite";
import React from "react";
import Thumbnails from "./Thumbnails";
import FormattedDateTime from "./FormattedDateTime";
import { convertFileSize, formatDateTime } from "@/lib/utils";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const ImageThumbnails = ({ file }: { file: Models.Document }) => {
  return (
    <div className="file-details-thumbnails">
      <Thumbnails type={file.type} extension={file.extension} url={file.url} />
      <div className="flex flex-col">
        <p className="subtitle-2 mb-1">{file.name}</p>
        <FormattedDateTime date={file.$createdAt} className="caption" />
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex">
      <p className="file-details-label text-left">{label}</p>
      <p className="file-details-value text-left">{value}</p>
    </div>
  );
};

export const FileDetails = ({ file }: { file: Models.Document }) => {
  return (
    <>
      <ImageThumbnails file={file} />
      <div className="space-y-4 px-2 pt-2">
        <DetailRow label="Format:" value={file.extension} />
        <DetailRow label="Size:" value={convertFileSize(file.size)} />
        <DetailRow label="Owner:" value={file.owner.fullName} />
        <DetailRow label="Last edit:" value={formatDateTime(file.$updatedAt)} />
      </div>
    </>
  );
};

interface Props {
  file: Models.Document;
  onInputChange: React.Dispatch<React.SetStateAction<string[]>>;
  onRemove: (email: string) => void; // Function to remove an email from the share list.
}

export const ShareFile = ({ file, onInputChange, onRemove }: Props) => {
  return (
    <>
      <ImageThumbnails file={file} />
      <div className="share-wrapper">
        <p className="subtitle-2 pl-1">Share file with others</p>
        <Input
          type="email"
          placeholder="Enter email address"
          onChange={(e) => onInputChange(e.target.value.trim().split(","))}
          className="share-input-field"
        />
        <div className="pt-4">
          <div className="flx justify-between">
            <p className="subtitle-2">Share with</p>
            <p className="subtitle-2">{file.users.length} users</p>
          </div>

          <ul className="pt-4">
            {file.users.map((email: string) => (
              <li
                key={email}
                className="flex items-center justify-between gap-2"
              >
                <p>{email}</p>
                <Button
                  className="share-remove-user"
                  onClick={() => onRemove(email)}
                >
                  <Image
                    src="/assets/icons/remove.svg"
                    alt="remove"
                    height={24}
                    width={24}
                  />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
