import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/context/authContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import dynamic from "next/dynamic";
import axios from "axios";

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

  const { user, setUser } = useContext(AuthContext);
  const [img, setImg] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [preview, setPreview] = useState("");

  const onClose = () => {
    setPreview("");
  };
  const onCrop = (view: any) => {
    setPreview(view);
  };

  const add = async () => {
    try {
      const res = await axios.post(`http://localhost:8888/zuragUploadHiinee`);
      setUser(res.data.user);
    } catch (error) {
      console.log("Error", error);
    }
  };

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
      {img ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ borderBottom: 1, borderColor: "gray" }}
            >
              Change Avatar
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: 1,
                marginBottom: 2,
              }}
            >
              <Box
                sx={{
                  width: 275,
                  height: 300,
                  marginTop: 1,
                  marginBottom: 6,
                }}
              >
                <img src={user?.profileImg} alt="userImg" />
              </Box>
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  handleClose();
                  setImg(false);
                }}
              >
                Delete
              </Button>
              <Button
                sx={{ color: "white" }}
                variant="contained"
                onClick={() => {
                  handleClose();
                }}
              >
                Save
              </Button>
            </Stack>
          </Box>
        </Modal>
      ) : (
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
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button
                sx={{ color: "white" }}
                variant="contained"
                onClick={() => {
                  setAvatarUrl(preview);
                  handleClose();
                }}
              >
                Add
              </Button>
            </Stack>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default ImportImage;
