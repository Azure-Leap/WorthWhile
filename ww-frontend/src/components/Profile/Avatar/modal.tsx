import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import dynamic from "next/dynamic";

const Avatar = dynamic(() => import("react-avatar-edit"), {
  ssr: false,
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ImportImage = ({ setAvatarUrl }: any) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState("");

  const onClose = () => {
    setPreview("");
  };
  const onCrop = (view: any) => {
    setPreview(view);
  };

  // useEffect(() => {
  //   console.log(preview);
  // }, [preview]);

  return (
    <div className="absolute left-0 top-6">
      <IconButton
        onClick={handleOpen}
        sx={{ padding: 0, bgcolor: "white" }}
        aria-label="upload picture"
        component="label"
      >
        <PhotoCamera sx={{ width: 20 }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Change Avatar
          </Typography>
          <Box sx={{ marginTop: 5, marginBottom: 5 }}>
            <Avatar
              width={330}
              height={300}
              onCrop={onCrop}
              onClose={onClose}
            />
            {/* <img src={preview} alt="Alt" /> */}
          </Box>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined">Delete</Button>
            <Button
              sx={{ color: "white" }}
              variant="contained"
              onClick={() => {
                setAvatarUrl(preview);
                console.log(preview);
                handleClose();
              }}
            >
              Save
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default ImportImage;
