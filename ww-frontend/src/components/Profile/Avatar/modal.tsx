import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/context/authContext";
import { AlertContext } from "@/context/alertContext";
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
  const { user, setUserData } = useContext(AuthContext);
  const { setMessage, setStatus } = useContext(AlertContext);

  const [open, setOpen] = React.useState(false);
  const [img, setImg] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [preview, setPreview] = useState("");

  const onClose = () => {
    setPreview("");
  };
  const onCrop = (view: any) => {
    setPreview(view);
  };

  useEffect(() => {
    if (user) {
      setImg(user.profileImg);
    }
  }, [user]);

  const onFileLoad = async (file: any) => {
    const form = new FormData();
    form.append("zurag", file);
    const res = await axios.post(
      `http://localhost:8888/zuragUploadHiinee`,
      form
    );
    // setUserData(res.f

    if (res) {
      const updateUser = {
        ...user,
        profileImg: res?.data?.path,
      };

      const res2 = await axios.put(
        `http://localhost:8888/users/${user._id}`,
        updateUser
      );
      setUserData(res2.data.user);
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
      {/* {img === "" ? (
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
                  setImg("");
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
      ) : ( */}
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
              onFileLoad={onFileLoad}
            />
          </Box>
          <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
            <Button
              sx={{ color: "white", bgcolor: "lime" }}
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
      {/* )} */}
    </div>
  );
};

export default ImportImage;
