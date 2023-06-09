import React, { useContext, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ImportImage from "./modal";
import { AuthContext } from "@/context/authContext";

export default function ImageAvatars() {
  const { user } = useContext(AuthContext);
  const [avatarUrl, setAvatarUrl] = React.useState("");

  const [name, setName] = React.useState("Name");

  useEffect(() => {
    if (user) {
      setName(user.userName);
      setAvatarUrl(user.profileImg);
    }
  }, [user]);
  return (
    <div className="bg-white pb-3 pl-5">
      <Stack direction="row" spacing={2}>
        <Avatar src={avatarUrl} />
        <ImportImage setAvatarUrl={setAvatarUrl} />
        <h1 className="flex items-center">{name}</h1>
      </Stack>
    </div>
  );
}
