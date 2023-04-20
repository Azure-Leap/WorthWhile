import React, { useEffect, useState } from "react";
import Avatar from "react-avatar-edit";

const UploadAvatar = () => {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };
  const onCrop = (view: any) => {
    setPreview(view);
  };

  useEffect(() => {
    console.log(preview);
  }, [preview]);

  return (
    <div>
      <Avatar
        width={400}
        height={300}
        src=""
        onCrop={onCrop}
        onClose={onClose}
      />
      {preview && <img src={preview} />}
    </div>
  );
};

export default UploadAvatar;
