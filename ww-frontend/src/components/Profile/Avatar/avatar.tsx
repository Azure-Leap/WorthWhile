import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ImportImage from "./modal";

export default function ImageAvatars() {
  const [avatarUrl, setAvatarUrl] = React.useState(
    "/static/images/avatar/1.jpg"
  );
  return (
    <div className="bg-white pb-3 pl-5">
      <Stack direction="row" spacing={2}>
        <Avatar src={avatarUrl} />
        <ImportImage setAvatarUrl={setAvatarUrl} />
        <h1 className="flex items-center">Name</h1>
      </Stack>
    </div>
  );
}
